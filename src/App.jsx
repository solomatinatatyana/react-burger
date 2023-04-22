import React from 'react';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burgerConstructor/BurgerConstructor";
import styles from './components/global.module.css'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function App() {

    return (<>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <AppHeader/>
                <main className={styles.container}>
                    <div style={{display: "flex", justifyContent: "center", boxSizing: "border-box", height: "100%"}}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    </div>
                </main>
            </div>
        </>
    );
}


export default App;
