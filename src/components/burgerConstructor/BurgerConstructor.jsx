import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerListElement from "./BurgerListElement";

const BurgerConstructor = (props) =>{
    return (
        <section className="pl-10 pt-25">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "flex-end"}}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: "center", alignItems: "center"}} className="pb-10">
                        <BurgerListElement selected={props.selectedIngredients}/>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "8px"}} className="pr-10">
                            <span className="text text_type_main-medium">610</span>
                            <CurrencyIcon type="primary" />
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Button htmlType="button" type="primary" size="medium">
                                <span className="text text_type_main-default">Оформить заказ</span>
                            </Button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default BurgerConstructor;