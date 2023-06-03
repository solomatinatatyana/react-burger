import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import globalPageStyle from "../global-page.module.css";
import {useNavigate} from "react-router-dom";

import styles from './../global-page.module.css'
import React from "react";

const NotFoundPage: React.FC = () => {

    const navigate = useNavigate();

    const onBack = () => navigate(-1)

    return (
        <div className={globalPageStyle.contentWrapper}>
            <div className={globalPageStyle.edit}>
                <h1 className={`${styles.errorCodeTextColor} text text_type_digits-large`}>404</h1>
                <h3 className={`text text_type_main-medium text_color_inactive`}>Страница не найдена</h3>
                <Button extraClass={`mt-6`} onClick={onBack} htmlType="button">Вернуться назад</Button>
            </div>
        </div>
    )
}

export default NotFoundPage;