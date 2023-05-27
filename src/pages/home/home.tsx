import React from "react";
import globalStyles from "../../components/global.module.css";
import styles from "../../components/app/app.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

const HomePage: React.FC = () => {
    return <main className={globalStyles.container}>
        <div className={styles.mainContainer}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </DndProvider>
        </div>
    </main>
}

export default HomePage