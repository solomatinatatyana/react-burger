import React, {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCardList from "./IngredientCardList";

const BurgerIngredients = (props) => {

    const bunsList = props.ingredients.filter(b => b.type === "bun")
    const sauceList = props.ingredients.filter(b => b.type === "sauce")
    const mainList = props.ingredients.filter(b => b.type === "main")

    const [current, setCurrent] = useState('Булки')

    return (
        <section className="pr-10"
                 style={{justifyContent: "center", alignItems: "center", width: "35%", boxSizing: "border-box"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1 className="pt-10 pb-5 mr-4 text text_type_main-large">Соберите бургер</h1>
                <div style={{display: 'flex', justifyContent: "space-around"}} className="pb-10">
                    <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                        <span className="text text_type_main-medium">Булки</span>
                    </Tab>
                    <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                        <span className="text text_type_main-medium">Соусы</span>
                    </Tab>
                    <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                        <span className="text text_type_main-medium">Начинки</span>
                    </Tab>
                </div>
                <div style={{display: "flex", overflow: "hidden", height: "60vh"}}>
                    <div style={{display: "flex", flexDirection: "column", height: "100%", overflowY: "scroll"}}
                         className="custom-scroll">
                        <IngredientCardList title="Булки" ingredients={bunsList}/>
                        <IngredientCardList title="Соусы" ingredients={sauceList}/>
                        <IngredientCardList title="Начинки" ingredients={mainList}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;