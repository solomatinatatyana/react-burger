import {NavLink} from "react-router-dom";
import styles from "./app-header.module.css";
import React from "react";
import AppHeaderIcon from "./app-header-icon";

const AppHeaderNavLink: React.FC<{ linkType: string, isActive: boolean, children: string }> =
    ({linkType, isActive, children}) => {

        let type: 'primary' | 'secondary', style;
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