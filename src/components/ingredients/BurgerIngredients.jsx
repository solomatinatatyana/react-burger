import React, {useState} from "react";
import IngredientCardList from "./IngredientCardList";
import IngredientDetails from "../modals/IngredientDetails";
import PropTypes from "prop-types";
import IngredientTabs from "./IngredientTabs";
import Modal from "../modals/Modal";
import ingredientTypes from "../../utils/constants/props.type";


const BurgerIngredients = (props) => {

    const bunsList = props.ingredients.filter(b => b.type === "bun")
    const sauceList = props.ingredients.filter(b => b.type === "sauce")
    const mainList = props.ingredients.filter(b => b.type === "main")

    const [isOpen, setIsOpen] = useState(false)
    const [cardDetail, setCardDetail] = useState(
        {image: "", name: "", calories: 0, proteins: 0, fat: 0, carbohydrates: 0}
    )

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const getCardDetail = ({image, name, calories, proteins, fat, carbohydrates}) => {
        setCardDetail({
            image: image,
            name: name,
            calories: calories,
            proteins: proteins,
            fat: fat,
            carbohydrates: carbohydrates
        })
    }

    const modal = (
        <Modal isOpened={isOpen}
               header={"Детали ингредиента"}
               onClose={handleCloseModal}>
            <IngredientDetails cardDetail={cardDetail}/>
        </Modal>
    )

    const handleTabClick = (type) => {
        const element = document.getElementById(type);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            <section className="pr-10"
                     style={{justifyContent: "center", alignItems: "center", width: "35%", boxSizing: "border-box"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 className="pt-10 pb-5 mr-4 text text_type_main-large">Соберите бургер</h1>
                    <IngredientTabs tabClick={handleTabClick}/>
                    <div style={{display: "flex", overflow: "hidden", height: "60vh"}}>
                        <div style={{display: "flex", flexDirection: "column", height: "100%", overflowY: "scroll"}}
                             className="custom-scroll">
                            <IngredientCardList getInfo={getCardDetail} onClick={handleOpenModal} title="Булки"
                                                ingredients={bunsList}/>
                            <IngredientCardList getInfo={getCardDetail} onClick={handleOpenModal} title="Соусы"
                                                ingredients={sauceList}/>
                            <IngredientCardList getInfo={getCardDetail} onClick={handleOpenModal} title="Начинки"
                                                ingredients={mainList}/>
                        </div>
                    </div>
                </div>
            </section>
            {isOpen && modal}
        </>
    )
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientTypes).isRequired
}