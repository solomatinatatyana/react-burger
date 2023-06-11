import React, {useMemo} from "react";
import IngredientCardList from "./ingredient-card-list";
import IngredientTabs from "./ingredient-tabs";
import {Loader} from "../loader/loader";
import {getIngredientInfo} from "../../services/actions/ingredient-details";
import {useInView} from "react-intersection-observer";
import globalStyle from '../global.module.css'
import styles from './burger-ingredients.module.css'
import {useDispatch, useSelector} from "../../services/hook-store";

const BurgerIngredients: React.FC = () => {

    const {
        ingredients,
        ingredientsRequest,
        ingredientsFailed,
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

    const bunsList = ingredients.filter((b: MODEL.TIngredient) => b.type === "bun")
    const sauceList = ingredients.filter((b: MODEL.TIngredient) => b.type === "sauce")
    const mainList = ingredients.filter((b: MODEL.TIngredient) => b.type === "main")

    const handleOpenModal = (ingredient: MODEL.TIngredient) => {
        dispatch(getIngredientInfo(ingredient))
    }

    const handleTabClick = (type:string) => {
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
        </>
    )
}

export default BurgerIngredients;
