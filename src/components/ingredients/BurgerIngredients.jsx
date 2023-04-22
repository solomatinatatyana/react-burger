import React, {useEffect, useMemo, useState} from "react";
import IngredientCardList from "./IngredientCardList";
import IngredientDetails from "../modals/IngredientDetails";
import IngredientTabs from "./IngredientTabs";
import Modal from "../modals/Modal";
import {useDispatch, useSelector} from "react-redux";
import {getAllIngredients} from "../../services/actions/BurgerIngredients";
import {Loader} from "../loader/loader";
import {getIngredientInfo} from "../../services/actions/IngredientDetails";
import {useInView} from "react-intersection-observer";


const BurgerIngredients = () => {

    const {
        ingredients,
        ingredientsRequest,
        ingredientsFailed,
        ingredientInfo
    } = useSelector(store => ({
        ingredients: store.burgerIngredients.ingredients,
        ingredientsRequest: store.burgerIngredients.ingredientsRequest,
        ingredientsFailed: store.burgerIngredients.ingredientsFailed,
        ingredientInfo: store.ingredientDetail.ingredientInfo,
    }));

    const options = {
        threshold: 0
    };

    const {ref: refBun, inView: inViewBuns} = useInView(options);
    const {ref: refSauce, inView: inViewSauces} = useInView(options);
    const {ref: refMain, inView: inViewMain} = useInView(options);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllIngredients())
    }, [])

    const bunsList = ingredients.filter(b => b.type === "bun")
    const sauceList = ingredients.filter(b => b.type === "sauce")
    const mainList = ingredients.filter(b => b.type === "main")

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = (ingredient) => {
        setIsOpen(true)
        dispatch(getIngredientInfo(ingredient))
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const modal = (
        <Modal isOpened={isOpen}
               header={"Детали ингредиента"}
               onClose={handleCloseModal}>
            <IngredientDetails cardDetail={ingredientInfo}/>
        </Modal>
    )

    const handleTabClick = (type) => {
        const element = document.getElementById(type);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    const ingredientCards = useMemo(() => {
        return ingredientsRequest ? (<Loader size="large"/>) : ingredientsFailed ? (<p>Произошла ошибка!</p>) : (<>
            <IngredientCardList ref={refBun} inView={inViewBuns} onClick={handleOpenModal} title="Булки"
                                ingredients={bunsList}/>
            <IngredientCardList ref={refSauce} inView={inViewSauces} onClick={handleOpenModal} title="Соусы"
                                ingredients={sauceList}/>
            <IngredientCardList ref={refMain} inView={inViewMain} onClick={handleOpenModal} title="Начинки"
                                ingredients={mainList}/>
        </>)
    }, [ingredientsRequest, ingredients])

    return (
        <>
            <section className="pr-10"
                     style={{justifyContent: "center", alignItems: "center", width: "35%", boxSizing: "border-box"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 className="pt-10 pb-5 mr-4 text text_type_main-large">Соберите бургер</h1>
                    <IngredientTabs
                        inViewBuns={inViewBuns}
                        inViewSauces={inViewSauces}
                        inViewMain={inViewMain}
                        tabClick={handleTabClick}/>
                    <div style={{display: "flex", overflow: "hidden", height: "60vh"}}>
                        <div style={{display: "flex", flexDirection: "column", height: "100%", overflowY: "scroll"}}
                             className="custom-scroll">
                            {ingredientCards}
                        </div>
                    </div>
                </div>
            </section>
            {isOpen && modal}
        </>
    )
}

export default BurgerIngredients;
