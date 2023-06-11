import React from "react";

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import orderToColumnLayout from './order-to-column.module.css'
import ImageIngredients from "../ingredients/image-ingredients";


const OrderToColumn: React.FC<{ ingredients: MODEL.TIngredient[] }> = ({ingredients}) => {

    const shortArr: MODEL.TIngredient[] =
        JSON.parse(JSON.stringify(ingredients.filter((it, ind, arr) => arr.indexOf(it) === ind)));

    shortArr.forEach(item =>
        item.count = ingredients.reduce((prev, it) =>
            it._id === item._id
                ? it.type === 'bun'
                    ? prev + 2
                    : ++prev
                : prev, 0
        ))

    return (
        <>
            <div className={orderToColumnLayout.boxMain}>
                {
                    shortArr.map((item: MODEL.TIngredient) => {
                        return (
                            <div className={orderToColumnLayout.boxIngredient} key={item._id}>
                                <div className={orderToColumnLayout.boxName}>
                                    <ImageIngredients src={item.image_mobile} name={item.name}/>
                                    <span className={`text text_type_main-default ${orderToColumnLayout.name}`}>{item.name}</span>
                                </div>
                                <div className={orderToColumnLayout.total}>
                                    <div>
                                        <span className="text text_type_digits-default">{`${item.count}x`}</span>
                                        <span className="text text_type_digits-default">{item.price}</span>
                                    </div>
                                    <CurrencyIcon type="primary"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OrderToColumn
