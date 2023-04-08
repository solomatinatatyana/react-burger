import React, {useEffect, useState} from 'react';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burgerConstructor/BurgerConstructor";
import styles from './components/global.module.css'


function App() {

    const [allIngredients, setAllIngredients] = useState([])
    const [loading, setLoading] = useState(false)
    const URL = 'https://norma.nomoreparties.space/api/ingredients';


    const fetchData = async () => {
        setLoading(true)
        try {
            setLoading(false)
            const response = await fetch(URL)
            const data = await response.json();
            setAllIngredients(data.data)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (<>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <AppHeader/>
                <main className={styles.container}>
                    <div style={{display: "flex", justifyContent: "center", boxSizing: "border-box", height: "100%"}}>
                        <BurgerIngredients ingredients={allIngredients}/>
                        <BurgerConstructor selectedIngredients={allIngredients}/>
                    </div>
                </main>
            </div>
        </>
    );
}


export default App;
