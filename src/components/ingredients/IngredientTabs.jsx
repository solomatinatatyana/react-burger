import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientTabs = (props) => {

    const [current, setCurrent] = React.useState('Булки')

    return (
        <div style={{display: 'flex'}} className="pb-10">
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
    )
}

export default IngredientTabs