import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = (props) => {
    return (

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
                 className="pt-6 pr-6 pb-10 pl-4">
                <div className="pl-4 pr-4" style={{position: "relative"}}>
                    {props.card.name !== "Флюоресцентная булка R2-D3" && < React.Fragment key={props.card.id}>
                        <Counter key={props.card.id} count={1} size="default" extraClass="m-1"/>
                    </React.Fragment>
                    }

                    <img src={props.card.image} alt={props.name}/>
                    <div style={{display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}
                         className="pt-1 pb-1">
                        <span className="text text_type_digits-default">{props.card.price}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="text text_type_main-default">{props.card.name}</span>
                </div>
            </div>
    )
}
export default IngredientCard