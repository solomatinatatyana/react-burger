import React, {useMemo, useState} from "react";
import IngredientCardList from "./ingredient-card-list";
import IngredientDetails from "../modals/ingredient-details";
import IngredientTabs from "./ingredient-tabs";
import Modal from "../modals/modal";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../loader/loader";
import {getIngredientInfo} from "../../services/actions/ingredient-details";
import {useInView} from "react-intersection-observer";
import globalStyle from '../global.module.css'
import styles from './burger-ingredients.module.css'

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
            <section className={`pr-10  ${globalStyle.section}`}>
                <div className={globalStyle.baseContainerColumn}>
                    <h1 className="pt-10 pb-5 mr-4 text text_type_main-large">Соберите бургер</h1>
                    <IngredientTabs
                        inViewBuns={inViewBuns}
                        inViewSauces={inViewSauces}
                        inViewMain={inViewMain}
                        tabClick={handleTabClick}/>
                    <div className={styles.ingredientsContainerOuter}>
                        <div className={`custom-scroll ${globalStyle.containerInner}`}>
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
