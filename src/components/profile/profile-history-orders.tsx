import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './profile.module.css'
import React from "react";

const ProfileHistoryOrders: React.FC = () => {
    return <>
        <div className={styles.editForm}>
            <Button htmlType="button">Здесь будет история заказов</Button>
        </div>
    </>
};

export default ProfileHistoryOrders;