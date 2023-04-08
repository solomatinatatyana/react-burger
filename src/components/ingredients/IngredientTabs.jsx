import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const IngredientTabs = ({tabClick}) => {

    const [current, setCurrent] = React.useState('Булки')

    return (
        <div style={{display: 'flex'}} className="pb-10 mt-5">
            <Tab value="Булки" active={current === 'Булки'} onClick={() => {
                tabClick('bun')
                setCurrent("Булки")
            }}>
                <span className="text text_type_main-medium">Булки</span>
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={() => {
                tabClick('sauce')
                setCurrent("Соусы")
            }}>
                <span className="text text_type_main-medium">Соусы</span>
            </Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={() => {
                tabClick('main')
                setCurrent("Начинки")
            }}>
                <span className="text text_type_main-medium">Начинки</span>
            </Tab>
        </div>
    )
}

export default IngredientTabs

IngredientTabs.propTypes = {
    tabClick: PropTypes.func.isRequired
}