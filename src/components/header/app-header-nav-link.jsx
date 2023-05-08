import {NavLink} from "react-router-dom";
import styles from "./app-header.module.css";
import React from "react";
import AppHeaderIcon from "./app-header-icon";
import PropTypes from "prop-types";
import ingredientTypes from "../../utils/constants/props-ingredient.type";
import IngredientCardList from "../ingredients/ingredient-card-list";

const AppHeaderNavLink = ({linkType, isActive, children}) => {

    let type, style;
    if (isActive) {
        type = "primary";
        style = `${styles.active} text text_type_main-default`;
    } else {
        type = "secondary";
        style = ``
    }

    return (<>
        <AppHeaderIcon link={linkType} type={type}/>
        <NavLink to="#" className="text text_type_main-default">
            <span className={`${style}`}>{children}</span>
        </NavLink>
    </>)
}

export default AppHeaderNavLink;

AppHeaderNavLink.propTypes = {
    linkType: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired
}