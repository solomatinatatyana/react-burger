import React, {ForwardedRef, forwardRef} from "react";
import IngredientCard from "./ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css"
import styles from './ingredient-card-list.module.css'
import {Link, useLocation} from "react-router-dom";

interface IProps {
    ingredients: MODEL.TIngredient[]
    onClick: (ingredient: MODEL.TIngredient) => void
    title: string
    inView: any
    ref: ForwardedRef<HTMLDivElement>
}

const IngredientCardList: React.FC<IProps> = forwardRef(({ingredients, onClick, title, inView}, ref) => {

    const location = useLocation();

    return (
        <div className={ingredientsStyle.containerOuter}>
            <h2 className="text text_type_main-medium">{title}{inView}</h2>
            <div className={ingredientsStyle.ingredientListInnerWrapper} ref={ref}>
                {ingredients.map(((ingredient: MODEL.TIngredient) => {
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