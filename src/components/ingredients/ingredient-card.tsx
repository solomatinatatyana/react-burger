import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import globalStyle from "../global.module.css";
import {useDrag} from "react-dnd";
import styles from './ingredient-card.module.css'
import {useSelector} from "../../services/hook-store";

interface IProps {
    card: MODEL.TIngredient,
    onclick: (ingredient?: MODEL.TIngredient) => void
    draggable: boolean
}

const IngredientCard: React.FC<IProps> = (props) => {


    const {selectedIngredients} = useSelector(store => ({
        selectedIngredients: store.burgerConstructor.selectedIngredients,
    }));

    const cardElem: MODEL.TIngredient = props.card || {}

    const isBun = cardElem.type === 'bun'

    const countBuns = (id: string): number => {
        return selectedIngredients?.filter((el: MODEL.TIngredient) => el.type === 'bun').length * 2
    }

    const countIngredients = (id: string): number => {
        return selectedIngredients?.filter((el: MODEL.TIngredient) => el._id === id).length
    }

    //const {count} = props

    const getIngredientInfo = () => {
        props.onclick()
    }

    const [{opacity}, dragRef] = useDrag({
        type: 'ingredient',
        item: {
            _id: cardElem._id,
            name: cardElem.name,
            price: cardElem.price,
            image: cardElem.image,
            count: cardElem.count
        },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const [{opacityBun}, dragBunRef] = useDrag({
        type: 'bun',
        item: {_id: cardElem._id, name: cardElem.name, price: cardElem.price, image: cardElem.image},
        collect: monitor => ({
            opacityBun: monitor.isDragging() ? 0.5 : 1
        })
    });

    return (
        <div className={`${globalStyle.containerColumn} pt-6 pr-6 pb-10 pl-4`}
             ref={isBun ? dragBunRef : dragRef}
             onClick={getIngredientInfo}
             style={isBun ? {opacity} : {opacity}}>
            <div className={`pl-4 pr-4 ${styles.ingredientCounter}`}>
                {selectedIngredients.map((ingredient: MODEL.TIngredient) => {

                    return ingredient._id === cardElem._id &&
                        /*count !== 0 &&*/
                        <Counter key={ingredient.id}
                                 count={ingredient.type !== 'bun' ? countIngredients(ingredient._id) : countBuns(ingredient._id)}
                                 size="default" extraClass="m-1"/>
                })}
                <img src={cardElem.image} alt={cardElem.name}/>
                <div
                    className={`${globalStyle.container} pt-1 pb-1`}>
                    <span className="text text_type_digits-default pr-2">{cardElem.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
            <div className={`${globalStyle.container}`}>
                <span className="text text_type_main-default">{cardElem.name}</span>
            </div>
        </div>
    )
}
export default IngredientCard