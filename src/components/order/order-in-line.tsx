import orderInLineLayout from './order-in-line.module.css'
import React, {ReactElement} from "react";
import ImageIngredients from "../ingredients/image-ingredients";

const OrderInLine: React.FC<{ ingredients: MODEL.TIngredient[] }> = ({ingredients}) => {

    const maxCountImages = 6;

    const countImages = Math.min(maxCountImages, ingredients.length);

    let rest: string | null;
    let imageList: ReactElement[] = [];

    let step = countImages - 1;
    while (step >= 0) {

        ingredients.length > countImages && step === countImages - 1
            ? rest = '+' + String(ingredients.length - countImages)
            : rest = null;

        imageList[countImages - 1 - step] =
            (<div className={orderInLineLayout.image} style={{left: `${step * 48}px`}} key={step}>
                <ImageIngredients src={ingredients[step].image_mobile} name={ingredients[step].name} count={rest}/>
            </div>)

        step--;
    }

    return (
        <>
            <div className={orderInLineLayout.boxMain}>
                {imageList}
            </div>
        </>
    )
}

export default OrderInLine
