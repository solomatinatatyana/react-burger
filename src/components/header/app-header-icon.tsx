import React from "react";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeaderIcon: React.FC<{ link: string, type: "primary" | "secondary" }> = ({link, type}) => {
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