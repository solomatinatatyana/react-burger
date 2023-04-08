import React from "react";
import imagePath from "../../images/check.svg";
import Modal from "./Modal";
import PropTypes from "prop-types";


const OrderDetails = ({isOpened, onClose}) =>{
    return <Modal
        isOpened={isOpened}
        onClose={onClose}
    >
        <div style={{padding: "0 100px 0 100px"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="pb-8">
                <p className="text text_type_digits-large"
                style={{textShadow: "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)"}}>034536</p>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p className="text text_type_main-medium">
                    идентификатор заказа
                </p>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="pt-15 pb-15">
                <img src={imagePath} alt={"Check"}/>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="pb-2">
                <p className="text text_type_main-default">
                    Ваш заказ начали готовить
                </p>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="pb-30">
                <p className="text text_type_main-default text_color_inactive">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </div>
    </Modal>
}

export default OrderDetails;

OrderDetails.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}