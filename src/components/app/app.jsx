import React, {useEffect} from 'react';
import AppHeader from "../header/app-header";
import BurgerIngredients from "../ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import globalStyles from '../global.module.css'
import styles from './app.module.css'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch} from "react-redux";
import {getAllIngredients} from "../../services/actions/burger-ingredients";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllIngredients())
    }, [])

    return (
        <div className={globalStyles.containerColumn}>
            <AppHeader/>
            <main className={globalStyles.container}>
                <div className={styles.mainContainer}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
                </div>
            </main>
        </div>
    );
}


export default App;
