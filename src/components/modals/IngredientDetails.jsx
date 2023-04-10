import React from "react";
import globalStyle from "../global.module.css";
import NutritionInfo from "./NutritionInfo";
import ingredientTypes from "../../utils/constants/props.type";


const IngredientDetails = ({cardDetail}) => {

    return <div style={{padding: "0 100px 0 100px"}}>
        <div className={`${globalStyle.container} pb-8`}>
            <img src={cardDetail.image} alt={cardDetail.name}/>
        </div>
        <div className={`${globalStyle.container} pb-8`}>
            <p className="text text_type_main-medium">
                {cardDetail.name}
            </p>
        </div>
        <div className={`${globalStyle.container} pb-15`}>
            <div style={{display: "flex"}}>
                <NutritionInfo nutrition="Калории,ккал" value={cardDetail.calories}/>
                <NutritionInfo nutrition="Белки, г" value={cardDetail.proteins}/>
                <NutritionInfo nutrition="Жиры, г" value={cardDetail.fat}/>
                <NutritionInfo nutrition="Углеводы, г" value={cardDetail.carbohydrates}/>
            </div>
        </div>
    </div>
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    cardDetail: ingredientTypes.isRequired
}