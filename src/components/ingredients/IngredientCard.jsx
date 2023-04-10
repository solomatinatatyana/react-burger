import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import globalStyle from "../global.module.css";
import PropTypes from "prop-types";
import ingredientTypes from "../../utils/constants/props.type";


const IngredientCard = (props) => {

    const getIngredientInfo = () => {
        props.onclick()
        props.getInfo({
            image: props.card.image,
            name: props.card.name,
            calories: props.card.calories,
            proteins: props.card.proteins,
            fat: props.card.fat,
            carbohydrates: props.card.carbohydrates
        })
    }

    return (
        <div className={`${globalStyle.containerColumn} pt-6 pr-6 pb-10 pl-4`}
             onClick={getIngredientInfo}>
            <div className="pl-4 pr-4" style={{position: "relative"}}>
                {props.card.name !== "Флюоресцентная булка R2-D3" && < React.Fragment key={props.card.id}>
                    <Counter key={props.card.id} count={1} size="default" extraClass="m-1"/>
                </React.Fragment>
                }
                <img src={props.card.image} alt={props.name}/>
                <div
                    className={`${globalStyle.container} pt-1 pb-1`}>
                    <span className="text text_type_digits-default pr-2">{props.card.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
            <div className={`${globalStyle.container}`}>
                <span className="text text_type_main-default">{props.card.name}</span>
            </div>
        </div>
    )
}
export default IngredientCard

IngredientCard.propTypes = {
    card: ingredientTypes.isRequired,
    onClick: PropTypes.func,
    getInfo: PropTypes.func.isRequired
}