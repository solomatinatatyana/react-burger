import React from "react";
import IngredientCard from "./IngredientCard";

const IngredientCardList = (props) =>{
    return(
<div style={{display:"flex", flexDirection:"column"}}>
    <h2 className="text text_type_main-medium">{props.title}</h2>
    <div style={{display:"flex", flexWrap: "wrap"}}>
        {props.ingredients.map((ingredient=>{
            return (
                <div key={ingredient.id} style={{display: "flex", flexWrap: "wrap"}}>
                    <IngredientCard  card={ingredient}/>
                </div>

            )
        }))}
    </div>


</div>
    )
}

export default IngredientCardList