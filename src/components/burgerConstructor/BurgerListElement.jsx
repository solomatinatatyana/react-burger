import React, {useState} from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../modals/OrderDetails";
import globalStyle from "../global.module.css";
import PropTypes from "prop-types";

const BurgerListElement = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const getBuns = () => {
        return props.selected.filter(b => b.type === "bun");
    }

    const getCommonPrice = () => {
        return props.selected.map((item) => item.price).reduce((el, sum) => el + sum, 0);
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const modal = (<OrderDetails isOpened={isOpen} onClose={handleCloseModal}/>)

    return (<>
            <div className={`${globalStyle.containerColumn} pb-10`}>
                <div className={`${globalStyle.containerColumn} pt-2`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={getBuns()[0]?.name}
                        price={getBuns()[0]?.price}
                        thumbnail={getBuns()[0]?.image}
                        extraClass="pt-4"
                    />
                    <div style={{display: "flex", overflow: "hidden", height: "50vh"}}>
                        <div className={`${globalStyle.containerInner} custom-scroll`}>
                            {
                                props.selected.filter((el) => el.type !== "bun").map((el) => (
                                        <div key={props.selected.id} className="p-1">
                                            <DragIcon type="primary"/>
                                            <ConstructorElement
                                                extraClass="pb-4"
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
                        text={getBuns()[0]?.name}
                        price={getBuns()[0]?.price}
                        thumbnail={getBuns()[0]?.image}
                    />
                </div>

            </div>
            <div className={globalStyle.container}>
                <div className={`${globalStyle.container} pr-10`}>
                    <span className="text text_type_main-medium pr-2">
                        {props.selected ? getCommonPrice() : 0}
                    </span>
                    <CurrencyIcon type="primary"/>
                </div>
                <div className={globalStyle.container}>
                    <Button htmlType="button" onClick={handleOpenModal} type="primary" size="medium">
                        <span className="text text_type_main-default">Оформить заказ</span>
                    </Button>
                    <div style={{overflow: "hidden"}}>
                        {isOpen && modal}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerListElement;

BurgerListElement.propTypes = {
    selected: PropTypes.array.isRequired
}