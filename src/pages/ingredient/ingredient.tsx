import React, {useEffect, useRef, useState} from "react";
import IngredientDetails from "../../components/modals/ingredient-details";
import globalPageStyle from './../global-page.module.css'
import {useNavigate, useParams} from "react-router-dom";
import Modal from "../../components/modals/modal";
import {useSelector} from "../../services/hook-store";

const IngredientPage: React.FC<{ mode: string }> = ({mode}) => {

    const navigate = useNavigate();
    const id = useParams().id;

    const {ingredients, ingredientsIsLoaded} = useSelector(store => store.burgerIngredients)

    let ingredientRef = useRef<MODEL.TIngredient>();

    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        if (ingredientsIsLoaded) {
            ingredientRef.current = ingredients.filter((ingredient: MODEL.TIngredient) => ingredient._id === id)[0];
            if (ingredientRef.current === undefined) {
                navigate('/not-found')
            } else {
                setIsFiltered(true)
            }
        }
    }, [ingredientsIsLoaded, isFiltered]);

    const handleClose = () => navigate(-1);

    console.log(ingredientRef)

    return (<>
        {mode === 'page' && isFiltered && ingredientRef.current !== undefined &&
            <div className={globalPageStyle.contentWrapper}>
                <p className="text text_type_main-large">Детали ингредиента</p>
                <IngredientDetails cardDetail={ingredientRef?.current}/>
            </div>
        }
        {mode === 'modal' && isFiltered && ingredientRef.current !== undefined &&
            <Modal header={"Детали ингредиента"}
                   onClose={handleClose}>
                <IngredientDetails cardDetail={ingredientRef.current}/>
            </Modal>
        }
    </>)
}
export default IngredientPage;