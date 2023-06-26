import React from "react";
import imagePath from "../../images/check.svg";
import globalStyle from '../global.module.css'

interface IProps {
    detail: MODEL.TOrderRs
}

const OrderDetails: React.FC<IProps> = ({detail}) => {
    return <div className={globalStyle.modalDetailsWrapper}>
        <div className={`pb-8 ${globalStyle.container}`}>
            <p className="text text_type_digits-large"
               style={{textShadow: "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)"}}
               data-test-id={'orderId'}>
                {detail?.order.number}
            </p>
        </div>
        <div className={globalStyle.container}>
            <p className="text text_type_main-medium">
                идентификатор заказа
            </p>
        </div>
        <div className={`pt-15 pb-15 ${globalStyle.container}`}>
            <img src={imagePath} alt={"Check"}/>
        </div>
        <div className={`pb-2 ${globalStyle.container}`}>
            <p className="text text_type_main-default">
                Ваш заказ начали готовить
            </p>
        </div>
        <div className={`pb-30 ${globalStyle.container}`}>
            <p className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    </div>
}

export default OrderDetails;