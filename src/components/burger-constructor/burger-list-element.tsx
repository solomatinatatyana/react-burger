import React, {useCallback, useEffect, useState} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../modals/order-details";
import globalStyle from "../global.module.css";
import styles from "./burger-constructor.module.css"
import Modal from "../modals/modal";
import {makeOrderRequest} from "../../services/actions/order-details";
import {Loader} from "../loader/loader";
import {
    addIngredient,
    getSelectedOtherIngredients,
    resetBurgerConstructor,
    shuffleIngredient,
    updateBun
} from "../../services/actions/burger-constructor";
import {useDrop} from "react-dnd";
import BurgerElement from "./burger-element";
import {resetCountBun} from "../../services/actions/burger-ingredients";
import {useNavigate} from "react-router-dom";
import {isLogged} from "../../utils/utils";
import {useDispatch, useSelector} from "../../services/hook-store";

const BurgerListElement: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {order, checkoutRequest, checkoutFailed, selectedIngredients, ingredients} = useSelector(store => ({
        order: store.orderDetail.order,
        checkoutRequest: store.orderDetail.checkoutRequest,
        checkoutFailed: store.orderDetail.checkoutFailed,
        ingredients: store.burgerIngredients.ingredients,
        selectedIngredients: store.burgerConstructor.selectedIngredients,
        selectedOtherIngredients: store.burgerConstructor.selectedOtherIngredients
    }));

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const getIds = (): string[] => {
        return selectedIngredients?.map((el: MODEL.TIngredient) => el._id);
    }

    const getBuns = (): MODEL.TIngredient[] => {
        return selectedIngredients.filter((b: MODEL.TIngredient) => b.type === "bun");
    }

    const getNotBuns = (): MODEL.TIngredient[] => {
        return selectedIngredients.filter((b: MODEL.TIngredient) => b.type !== "bun");
    }

    const getCommonPrice = (): number => {
        return selectedIngredients.reduce((acc: number, item: MODEL.TIngredient) => {
            if (item.type === "bun") {
                return 2 * item.price + acc
            }
            return acc + item.price
        }, 0);
    }

    const handleOpenModal = () => {
        setIsOpen(true)
        dispatch(makeOrderRequest({
            "ingredients": getIds()
        }, () => navigate("/login")))
        dispatch(resetBurgerConstructor());
    }

    const checkoutOrder = () => {
        if (!isLogged()) {
            navigate("/login")
        }
        handleOpenModal()
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }


    const modal = (
        <Modal isOpened={isOpen}
               onClose={handleCloseModal}>
            {checkoutRequest ? (<Loader size="large"/>) : checkoutFailed ? (<p>Ошибка получения данных</p>) : (
                <OrderDetails detail={order}/>)}
        </Modal>
    )

    useEffect(() => {
        dispatch(getSelectedOtherIngredients(getNotBuns()))
    }, [selectedIngredients])

    const moveIngredientToBurger = (_id: string) => {
        dispatch(
            addIngredient(
                {
                    ...ingredients?.filter((item: MODEL.TIngredient) => item._id === _id)[0],
                    count: 1,
                    id: crypto.randomUUID()
                }
            )
        );
    }

    const moveBun = (_id: string) => {
        ingredients[0]?.type === 'bun' && dispatch(resetCountBun(ingredients[0]._id));
        dispatch(updateBun(
            {...ingredients.filter((item: MODEL.TIngredient) => item._id === _id)[0], count: 2, id: crypto.randomUUID()}
        ));
    }

    const [{isHoverBunTop}, dropBunTopTarget] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBunTop: monitor.isOver()
        }),
        drop(item: any) {
            moveBun(item._id)
        }
    });

    const [{isHover}, dropTarget] = useDrop({
        accept: "ingredient",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item: any) {
            moveIngredientToBurger(item._id)
        }
    });

    const [{isHoverBunBottom}, dropBunBottomTarget] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBunBottom: monitor.isOver()
        }),
        drop(item: any) {
            moveBun(item._id)
        }
    });

    const moveListIngredient = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            dispatch(shuffleIngredient(dragIndex, hoverIndex));
        },
        [])

    const isBunContent = selectedIngredients[0]?.type === 'bun';
    const isIngredientContent = selectedIngredients?.length > 1;

    const bunPlace = `${isHoverBunTop || isHoverBunBottom ? styles.plus : ''}`;
    const bunStart = `${isHoverBunTop || isHoverBunBottom ? styles.onHover : ''}`;

    const ingredientsPlace = `${styles.elements} ${isIngredientContent && isHover ? styles.plus : ''}`;

    return (<>
            <div className={`${globalStyle.containerColumn} pb-10`}>
                <div className={`${globalStyle.containerColumn} pt-2`}>
                    <div ref={dropBunTopTarget} data-test-id={'bunTopTarget'} className={`${isHoverBunTop && styles.onHover}`}>
                        {isBunContent
                            ? <div className={bunPlace}><
                                BurgerElement element={getBuns()[0]} type={"top"} extraClass={"pt-4 ml-6"}/>
                            </div>
                            : (<div className={`${styles.burgerTopBunBox}`}><h3
                                className={`${bunStart} pb-4 pt-4 ml-9 mr-1 `}>Перетащите булку</h3></div>)
                        }
                    </div>

                    <div className={`${ingredientsPlace} custom-scroll ${isHover && styles.onHover}`}
                         ref={dropTarget} data-test-id={'bunIngredientTarget'}>
                        {isIngredientContent
                            ? selectedIngredients.map((item: MODEL.TIngredient, index: number) =>
                                item.type !== 'bun'
                                && item.type !== 'blank'
                                && <BurgerElement element={item} key={item.id} index={index} extraClass={"pb-4"}
                                                  moveListItem={moveListIngredient}/>)
                            : (<div className={`${styles.burgerIngredientBox}`}>
                                <h3 className={` pb-1 pt-1 ml-9 mr-1 pr-2 `}>Перетащите ингредиенты</h3>
                            </div>)
                        }
                    </div>

                    <div ref={dropBunBottomTarget} data-test-id={'bunBottomTarget'} className={`${isHoverBunBottom && styles.onHover}`}>
                        {isBunContent
                            ?
                            <div className={bunPlace}>
                                <BurgerElement element={getBuns()[0]} type={"bottom"} extraClass={"pb-4 ml-6"}/>
                            </div>
                            : (<div className={`${styles.burgerBottomBunBox}`}>
                                <h3 className={`${bunStart} pb-4 pt-4 ml-9 mr-2 `}>Перетащите булку</h3>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className={`${globalStyle.container} ${styles.burgerMakeOrderContainer}`}>
                <div className={`${globalStyle.container} pr-10`}>
                    <span className="text text_type_main-medium pr-2">
                        {selectedIngredients ? getCommonPrice() : 0}
                    </span>
                    <CurrencyIcon type="primary"/>
                </div>
                <div className={globalStyle.container} data-test-id={'buttonCheckoutOrder'}>
                    <Button htmlType="button" onClick={checkoutOrder} type="primary" size="medium"
                            disabled={getBuns().length === 0 || getNotBuns().length === 0}>
                        <span className="text text_type_main-default">Оформить заказ</span>
                    </Button>
                    <div style={{overflow: "hidden"}}>
                        {isOpen && modal}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerListElement;