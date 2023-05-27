import React, {useEffect, useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import globalStyle from '../global.module.css'

interface IProps {
    tabClick: (type: string)=> void
    inViewBuns: any
    inViewSauces: any
    inViewMain: any
}

const IngredientTabs: React.FC<IProps> = ({tabClick, inViewBuns, inViewSauces, inViewMain}) => {

    const [current, setCurrent] = useState('Булки')

    useEffect(() => {
        inViewSauces ? setCurrent("Соусы") : inViewBuns ? setCurrent("Булки") : inViewMain && setCurrent("Начинки")
    }, [inViewSauces, inViewBuns, inViewMain])


    return (
        <div className={`pb-10 mt-5 ${globalStyle.container}`}>
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
                setCurrent('Начинки')
            }}>
                <span className="text text_type_main-medium">Начинки</span>
            </Tab>
        </div>
    )
}

export default IngredientTabs