import React, {forwardRef} from "react";
import IngredientCard from "./ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css"
import PropTypes from "prop-types";
import styles from './ingredient-card-list.module.css'
import ingredientTypes from "../../utils/constants/props-ingredient.type";
import {Link, useLocation} from "react-router-dom";


const IngredientCardList = forwardRef(({ingredients, onClick, title, inView}, ref) => {

    const location = useLocation();

    return (
        <div className={ingredientsStyle.containerOuter}>
            <h2 className="text text_type_main-medium">{title}{inView}</h2>
            <div className={ingredientsStyle.ingredientListInnerWrapper} ref={ref}>
                {ingredients.map((ingredient => {
                    return (
                        <Link key={ingredient._id}
                              to={`/ingredients/${ingredient._id}`}
                              state={{backgroundLocation: location}}
                              style={{color: 'white', textDecoration: "none"}}
                        >
                            <div id={ingredient.type} key={ingredient._id}
                                 className={styles.ingredientCardWrapper}>
                                <IngredientCard draggable onclick={() => onClick(ingredient)} card={ingredient}/>
                            </div>
                        </Link>
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