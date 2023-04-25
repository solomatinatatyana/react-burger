import React from "react";
import globalStyle from "../global.module.css";
import NutritionInfo from "./nutrition-info";
import ingredientTypes from "../../utils/constants/props-ingredient.type";


const IngredientDetails = ({cardDetail}) => {

    const detail = cardDetail || {}

    return <div className={globalStyle.modalDetailsWrapper}>
        <div className={`${globalStyle.container} pb-8`}>
            <img src={detail.image} alt={detail.name}/>
        </div>
        <div className={`${globalStyle.container} pb-8`}>
            <p className="text text_type_main-medium">
                {cardDetail?.name}
            </p>
        </div>
        <div className={`${globalStyle.container} pb-15`}>
            <div className={globalStyle.container}>
                <NutritionInfo nutrition="Калории,ккал" value={detail.calories}/>
                <NutritionInfo nutrition="Белки, г" value={detail.proteins}/>
                <NutritionInfo nutrition="Жиры, г" value={detail.fat}/>
                <NutritionInfo nutrition="Углеводы, г" value={detail.carbohydrates}/>
            </div>
        </div>
    </div>
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    cardDetail: ingredientTypes.isRequired
}