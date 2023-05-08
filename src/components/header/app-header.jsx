import React from "react";
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import AppHeaderNavLink from "./app-header-nav-link";
import {isLogged} from "../../utils/utils";

const AppHeader = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const onHome = () => navigate("/");

    const onFeed = () => navigate("/feed");

    const onLogin = () => {
        isLogged() ? navigate('/profile') : navigate('/login');
    };

    return (
        <header className={styles.header}>
            <div className={styles.outerContainer}>
                <div className={styles.container}>
                    <div className={`${styles.navigationPaddingOrderBlock}`}>
                        <div className={styles.navigation} onClick={onHome}>
                            <AppHeaderNavLink linkType="burgerType"
                                              isActive={pathname === '/'}>Конструктор</AppHeaderNavLink>
                        </div>
                        <div className={`${styles.navigation} ${styles.navigationPaddingOrderBlock}`} onClick={onFeed}>
                            <AppHeaderNavLink linkType="listType" isActive={pathname === '/feed'}>Лента
                                Заказов</AppHeaderNavLink>
                        </div>
                    </div>
                    <div className={`p-4 ${styles.logo}`}>
                        <NavLink to="/"><Logo/></NavLink>
                    </div>
                    <div className={`${styles.navigationPaddingUserBlock}`} onClick={onLogin}>
                        <AppHeaderNavLink linkType="profileType" isActive={pathname === '/login'}>Личный
                            кабинет</AppHeaderNavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
