import React from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.outerContainer}>
                <div className={styles.container}>
                    <div className={styles.navigation}>
                        <div className={styles.navigation}>
                            <BurgerIcon type="primary"/>
                            <p className="text text_type_main-default">Конструктор</p>
                        </div>
                        <div className={styles.navigation}>
                            <ListIcon type="secondary"/>
                            <p className="text text_type_main-default">Лента Заказов</p>
                        </div>
                    </div>
                    <div style={{padding: "16px 20px"}} className="p-4">
                        <Logo/>
                    </div>
                    <div className={styles.navigation}>
                        <ProfileIcon type="secondary"/>
                        <p className="text text_type_main-default">Личный кабинет</p>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default AppHeader;
