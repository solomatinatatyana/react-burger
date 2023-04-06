import React from 'react';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burgerConstructor/BurgerConstructor";
import DATA from "./utils/constants/data";
import styles from './components/global.module.css'


function App() {

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AppHeader/>
            <main className={styles.container}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", boxSizing: "border-box", height: "100%"}}>
                    <BurgerIngredients ingredients={DATA}/>
                    <BurgerConstructor selectedIngredients={DATA}/>
                </div>
            </main>

        </div>
    );
}

export default App;
