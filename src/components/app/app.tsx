import React, {useEffect} from 'react';
import AppHeader from "../header/app-header";
import globalStyles from '../global.module.css'
import {useDispatch} from "react-redux";
import {getAllIngredients} from "../../services/actions/burger-ingredients";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import RegistrationPage from "../../pages/register/registration";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredient/ingredient";
import NotFoundPage from "../../pages/not-found/not-found";
import ProtectedRouteElement from "../protected-route/protected-route-element";


function App() {

    const dispatch = useDispatch();

    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        dispatch(getAllIngredients())
    }, [])

    return (
        <div className={globalStyles.containerColumn}>
            <AppHeader/>
            <Routes location={state?.backgroundLocation || location}>
                <Route index path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegistrationPage/>}/>
                <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="/reset-password" element={<ResetPasswordPage/>}/>
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage/>}/>}/>
                <Route path="/profile/orders" element={<ProfilePage/>}/>
                <Route path="/ingredients/:id" element={<IngredientPage mode={'page'}/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/ingredients/:id" element={<IngredientPage mode={'modal'}/>}/>
                </Routes>
            )}

        </div>
    );
}


export default App;
