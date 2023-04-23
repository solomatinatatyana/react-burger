import React, {useCallback, useEffect, useState} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../modals/order-details";
import globalStyle from "../global.module.css";
import styles from "./burger-constructor.module.css"
import Modal from "../modals/modal";
import {useDispatch, useSelector} from "react-redux";
import {checkout} from "../../services/actions/order-details";
import {Loader} from "../loader/loader";
import {
    addIngredient,
    getSelectedOtherIngredients,
    shuffleIngredient,
    updateBun
} from "../../services/actions/burger-constructor";
import {useDrop} from "react-dnd";
import BurgerElement from "./burger-element";
import {resetCountBun} from "../../services/actions/burger-ingredients";

const BurgerListElement = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {
        order, checkoutRequest, checkoutFailed, selectedIngredients, ingredients, selectedOtherIngredients
    } = useSelector(store => ({
        order: store.orderDetail.order,
        checkoutRequest: store.orderDetail.checkoutRequest,
        checkoutFailed: store.orderDetail.checkoutFailed,
        ingredients: store.burgerIngredients.ingredients,
        selectedIngredients: store.burgerConstructor.selectedIngredients,
        selectedOtherIngredients: store.burgerConstructor.selectedOtherIngredients
    }))

    const dispatch = useDispatch()

    const getIds = () => {
        return selectedIngredients?.map(el => el._id);
    }

    const getBuns = () => {
        return selectedIngredients.filter(b => b.type === "bun");
    }

    const getNotBuns = () => {
        return selectedIngredients.filter(b => b.type !== "bun");
    }

    const getCommonPrice = () => {
        return selectedIngredients.reduce((acc, item) => {
            if (item.type === "bun") {
                return 2 * item.price + acc
            }
            return acc + item.price
        }, 0);
    }

    const handleOpenModal = () => {
        setIsOpen(true)
        dispatch(checkout({
            "ingredients": getIds()
        }))
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

    const moveIngredientToBurger = (_id) => {
        dispatch(
            addIngredient(
                {
                    ...ingredients?.filter((item) => item._id === _id)[0],
                    count: 1,
                    id: crypto.randomUUID()
                }
            )
        );
    }

    const moveBun = (_id) => {
        ingredients[0]?.type === 'bun' && dispatch(resetCountBun(ingredients[0]._id));
        dispatch(updateBun(
            {...ingredients.filter((item) => item._id === _id)[0], count: 2, id: crypto.randomUUID()}
        ));
    }

    const [{isHoverBunTop}, dropBunTopTarget] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBunTop: monitor.isOver()
        }),
        drop(item) {
            moveBun(item._id)
        }
    });

    const [{isHover}, dropTarget] = useDrop({
        accept: "ingredient",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {
            moveIngredientToBurger(item._id)
        }
    });

    const [{isHoverBunBottom}, dropBunBottomTarget] = useDrop({
        accept: 'bun',
        collect: monitor => ({
            isHoverBunBottom: monitor.isOver()
        }),
        drop(item) {
            moveBun(item._id)
        }
    });

    const moveListIngredient = useCallback(
        (dragIndex, hoverIndex) => {
            dispatch(shuffleIngredient(dragIndex, hoverIndex));
        },
        [])

    const borderColor = isHover ? 'lightgreen' : 'transparent';

    return (<>
            <div className={`${globalStyle.containerColumn} pb-10`}>
                <div className={`${globalStyle.containerColumn} pt-2`}>
                    <div style={{borderColor}} ref={dropBunTopTarget} className={`${isHoverBunTop && styles.onHover}`}>
                        {getBuns()[0] ? (
                                <BurgerElement element={getBuns()[0]} type={"top"} extraClass={"pt-4"}/>) :
                            (<div className={`${styles.burgerTopBunBox}`}>
                                <h3 className="pb-4 pt-4 ml-9 mr-1 ">Перетащите Булку</h3>
                            </div>)}
                        {isHoverBunTop && <p>Булку сюда</p>}
                    </div>

                    <div className={styles.burgerListIngredientsOuterContainer}>
                        <div className={`${globalStyle.containerInner} custom-scroll  ${isHover && styles.onHover}`}
                             ref={dropTarget}>
                            {
                                selectedOtherIngredients?.length !== 0 ? selectedIngredients.filter((el) => el.type !== "bun").map((el, index) =>
                                        <BurgerElement key={el.id} index={index} element={el} extraClass={"pb-4"}
                                                       moveListItem={moveListIngredient}/>) :
                                    (<div className={`${styles.burgerIngredientBox}`}>
                                        <h3 className="pb-4 pt-4 ml-9 mr-1 pr-2 ">Перетащите ингредиенты</h3>
                                    </div>)
                            }
                            {isHover && <p>Сюда ингридиент</p>}
                        </div>
                    </div>
                    <div ref={dropBunBottomTarget} className={`${isHoverBunBottom && styles.onHover}`}>
                        {getBuns()[0] ? (
                                <BurgerElement element={getBuns()[0]} type={"bottom"}/>) :
                            (<div className={`${styles.burgerBottomBunBox}`}><h3
                                className="pb-4 pt-4 ml-9 mr-2 ">Перетащите Булку</h3></div>)}
                        {isHoverBunBottom && <p>Булку сюда</p>}
                    </div>
                </div>

            </div>
            <div className={globalStyle.container}>
                <div className={`${globalStyle.container} pr-10`}>
                    <span className="text text_type_main-medium pr-2">
                        {selectedIngredients ? getCommonPrice() : 0}
                    </span>
                    <CurrencyIcon type="primary"/>
                </div>
                <div className={globalStyle.container}>
                    <Button htmlType="button" onClick={handleOpenModal} type="primary" size="medium">
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