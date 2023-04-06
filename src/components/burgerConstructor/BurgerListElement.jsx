import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerListElement = (props)=>{

    const getBuns = () =>{
        return props.selected.filter(b=> b.type === "bun");
    }

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={getBuns()[0].name}
                    price={getBuns()[0].price}
                    thumbnail={getBuns()[0].image}
                />
            <div style={{display:"flex", overflow: "hidden", height: "50vh"}}>
                <div style={{display: "flex", flexDirection: "column",overflowY: "scroll", height: "100%"}} className="custom-scroll">
                    {
                        props.selected.filter((el)=>el.type !== "bun").map((el)=>  (
                            <div key={props.selected.id} className="p-1"
                                 >
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                        text={el.name}
                                        price={el.price}
                                        thumbnail={el.image}/>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={props.selected[0].name}
                price={props.selected[0].price}
                thumbnail={props.selected[0].image}
            />
        </div>
        )
}

export default BurgerListElement;