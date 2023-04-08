import React from "react";
import Modal from "./Modal";
import globalStyle from "../global.module.css";
import NutritionInfo from "./NutritionInfo";
import PropTypes from "prop-types";

const cardPropTypes = PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired
});

const IngredientDetails = ({isOpened, header, onClose, cardDetail}) => {

    return <Modal
        header={header}
        isOpened={isOpened}
        onClose={onClose}
    >
        <div style={{padding: "0 100px 0 100px"}}>
            <div className={`${globalStyle.container} pb-8`}>
                <img src={cardDetail.image} alt={cardDetail.name}/>
            </div>
            <div className={`${globalStyle.container} pb-8`}>
                <p className="text text_type_main-medium">
                    {cardDetail.name}
                </p>
            </div>
            <div className={`${globalStyle.container} pb-15`}>
                <div style={{display: "flex"}}>
                    <NutritionInfo nutrition="Калории,ккал" value={cardDetail.calories}/>
                    <NutritionInfo nutrition="Белки, г" value={cardDetail.proteins}/>
                    <NutritionInfo nutrition="Жиры, г" value={cardDetail.fat}/>
                    <NutritionInfo nutrition="Углеводы, г" value={cardDetail.carbohydrates}/>
                </div>
            </div>
        </div>
    </Modal>
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    header: PropTypes.string.isRequired,
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    cardDetail: cardPropTypes.isRequired
}