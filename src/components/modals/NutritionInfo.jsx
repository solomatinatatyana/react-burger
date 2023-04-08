import React from "react";
import globalStyle from "../global.module.css";
import PropTypes from "prop-types";

const NutritionInfo = ({nutrition, value}) => {
    return <div className={`${globalStyle.containerColumn} pr-4`}>
        <p className="text text_type_main-default text_color_inactive">{nutrition}</p>
        <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </div>
}

export default NutritionInfo;

NutritionInfo.propTypes = {
    nutrition: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}