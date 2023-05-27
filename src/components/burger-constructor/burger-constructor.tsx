import React from "react";
import BurgerListElement from "./burger-list-element";
import styleBurgerConstructor from "./burger-constructor.module.css"
import globalStyle from "../global.module.css";


const BurgerConstructor: React.FC = () => {

    return (
        <section className={`pl-10 pt-25  ${globalStyle.section}`}>
            <div className={styleBurgerConstructor.burgerList}>
                <BurgerListElement/>
            </div>
        </section>
    )
}

export default BurgerConstructor;