import React, {forwardRef} from "react";
import IngredientCard from "./ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css"
import PropTypes from "prop-types";
import ingredientTypes from "../../utils/constants/props.type";
import styles from './ingredient-card-list.module.css'


const IngredientCardList = forwardRef(({ingredients, onClick, title, inView}, ref) => {
    return (
        <div className={ingredientsStyle.containerOuter} ref={ref}>
            <h2 className="text text_type_main-medium">{title}{inView}</h2>
            <div className={ingredientsStyle.ingredientListInnerWrapper}>
                {ingredients.map((ingredient => {
                    return (
                        <div id={ingredient.type} key={ingredient._id}
                             className={styles.ingredientCardWrapper}>
                            <IngredientCard draggable onclick={() => onClick(ingredient)} card={ingredient}/>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
})

export default IngredientCardList

IngredientCardList.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    ingredients: PropTypes.arrayOf(ingredientTypes).isRequired,
    inView: PropTypes.any.isRequired
}