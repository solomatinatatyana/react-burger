import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import globalStyle from "../global.module.css";
import PropTypes from "prop-types";
import ingredientTypes from "../../utils/constants/props.type";
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";


const IngredientCard = (props) => {


    const {selectedIngredients, selectedBuns, selectedOtherIngredients} = useSelector(store => ({
        selectedIngredients: store.burgerConstructor.selectedIngredients,
/*        selectedBuns: store.burgerConstructor.selectedBuns,
        selectedOtherIngredients: store.burgerConstructor.selectedOtherIngredients,*/
        //count: store.burgerIngredients.count
    }));

    const cardElem = props.card || {}

    const countBuns = (id) =>{
        return selectedIngredients?.filter((el)=> el.type === 'bun').length * 2
    }

    const countIngredients = (id) => {
        return selectedIngredients?.filter((el)=> el._id === id).length
    }

    //selectedIngredients: state.selectedIngredients.filter((item) => item.id !== action.id)

    console.log("countIngredients",countIngredients())


    const {count} = props

    const getIngredientInfo = () => {
        props.onclick()
    }

    const [{ opacity }, dragRef] = useDrag({
        type: 'ingredient',
        item: {_id: cardElem._id, name: cardElem.name, price: cardElem.price, image: cardElem.image, count: cardElem.count} ,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const [, dragBunRef] = useDrag({
        type: 'bun',
        item: {_id: cardElem._id, name: cardElem.name, price: cardElem.price, image: cardElem.image}
    });

    return (
        <div className={`${globalStyle.containerColumn} pt-6 pr-6 pb-10 pl-4`}
             onClick={getIngredientInfo} style={{opacity}}>
            <div className="pl-4 pr-4" style={{position: "relative"}} ref={cardElem.type === 'bun' ? dragBunRef : dragRef} >
                {selectedIngredients.map((ingredient)=>{

                    return ingredient._id === cardElem._id &&
                        count!== 0 && <Counter key={ingredient.id} count={ingredient.type !== 'bun' ? countIngredients(ingredient._id) : countBuns(ingredient.id)} size="default" extraClass="m-1"/>
                })}
                <img src={cardElem.image} alt={cardElem.name} />
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

IngredientCard.propTypes = {
    card: ingredientTypes.isRequired,
    onClick: PropTypes.func,
}