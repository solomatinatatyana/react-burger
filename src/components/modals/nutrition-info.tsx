import React from "react";
import style from './ingredient-detail.module.css'

interface IProps {
    nutrition: string
    value: number
}

const NutritionInfo: React.FC<IProps> = ({nutrition, value}) => {
    return <div className={`${style.nutritionWrapper} pr-4`}>
        <p className="text text_type_main-default text_color_inactive">{nutrition}</p>
        <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </div>
}

export default NutritionInfo;