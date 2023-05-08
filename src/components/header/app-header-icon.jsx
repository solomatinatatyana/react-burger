import React from "react";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const AppHeaderIcon = ({link, type}) => {
    switch (link) {
        case "burgerType":
            return (<BurgerIcon type={type}/>);
        case "listType":
            return (<ListIcon type={type}/>);
        case "profileType":
            return (<ProfileIcon type={type}/>);
        default:
            return <></>;
    }
}

export default AppHeaderIcon;

AppHeaderIcon.propTypes = {
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}