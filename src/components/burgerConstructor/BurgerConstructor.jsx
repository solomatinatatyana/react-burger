import React from "react";
import BurgerListElement from "./BurgerListElement";
import styleBurgerConstructor from "./burger-constructor.module.css"
import PropTypes from "prop-types";

const BurgerConstructor = (props) => {
    return (
        <>
            <section className="pl-10 pt-25">
                <div className={styleBurgerConstructor.burgerList}>
                    <BurgerListElement selected={props.selectedIngredients}/>
                </div>
            </section>
        </>
    )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    selectedIngredients: PropTypes.array.isRequired
}