import React, {useEffect, useState} from 'react';
import AppHeader from "./components/header/AppHeader";
import BurgerIngredients from "./components/ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burgerConstructor/BurgerConstructor";
import styles from './components/global.module.css'


function App() {

    const [allIngredients, setAllIngredients] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const URL = 'https://norma.nomoreparties.space/api/ingredients';

    const checkResponse = (res) => {
        return res.ok ? res.json() : res.json()
            .then((err) => Promise.reject(err));
    };

    const fetchData = async () => {
        setLoading(true)
        await fetch(URL)
            .then(checkResponse)
            .then((res) => {
                setLoading(false)
                setAllIngredients(res.data)
            })
            .catch((error) => {
                setLoading(false)
                setError(error)
                console.error(error)
            })
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
