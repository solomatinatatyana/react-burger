import React, {useEffect} from "react";
import BurgerListElement from "./BurgerListElement";
import styleBurgerConstructor from "./burger-constructor.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllIngredients} from "../../services/actions/BurgerIngredients";


const BurgerConstructor = () => {

    const {ingredients} = useSelector(store => ({
        ingredients: store.burgerIngredients.ingredients,
    }));


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllIngredients())
    }, [])


    /*    useEffect(() => {
            dispatch(getSelectedIngredients(generateRandomIngredients(ingredients)))
        }, [ingredients])*/

    return (
        <>
            <section className="pl-10 pt-25">
                <div className={styleBurgerConstructor.burgerList}>
                    <BurgerListElement ingredients={ingredients}/>
                </div>
            </section>
        </>
    )
}

export default BurgerConstructor;