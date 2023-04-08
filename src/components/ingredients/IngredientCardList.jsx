import React from "react";
import IngredientCard from "./IngredientCard";
import ingredientsStyle from "./burger-ingredients.module.css"
import PropTypes from "prop-types";


const IngredientCardList = (props) => {
    return (
        <div className={ingredientsStyle.containerOuter}>
            <h2 className="text text_type_main-medium">{props.title}</h2>
            <div className={ingredientsStyle.ingredientListInnerWrapper}>
                {props.ingredients.map((ingredient => {
                    return (
                        <div key={ingredient.id} style={{display: "flex", flexWrap: "wrap", width: "272px"}}>
                            <IngredientCard getInfo={props.getInfo} onclick={props.onClick} card={ingredient}/>
                        </div>
                    )
                }))}
            </div>

        </div>
    )
}

export default IngredientCardList

IngredientCardList.propTypes = {
    title: PropTypes.string.isRequired,
    getInfo: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    ingredients: PropTypes.array.isRequired
}