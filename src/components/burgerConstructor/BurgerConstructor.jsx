import React from "react";
import BurgerListElement from "./BurgerListElement";
import styleBurgerConstructor from "./burger-constructor.module.css"
import PropTypes from "prop-types";

const BurgerConstructor = ({selectedIngredients}) => {

    return (
        <>
            <section className="pl-10 pt-25">
                <div className={styleBurgerConstructor.burgerList}>
                    <BurgerListElement selected={selectedIngredients}/>
                </div>
            </section>
        </>
    )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    selectedIngredients: PropTypes.array.isRequired
}