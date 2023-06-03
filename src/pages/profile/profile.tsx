import React from "react";
import {useLocation} from "react-router-dom";
import ProfileNavList from "../../components/profile/profile-nav-list";
import styles from './profile.module.css'
import ProfileForm from "../../components/profile/profile-form";
import ProfileHistoryOrders from "../../components/profile/profile-history-orders";

const ProfilePage: React.FC = () => {

    const {pathname} = useLocation();

    return (
        <div className={styles.profilePageWrapper}>
            <div className={`${styles.boxProfile}`}>
                <div>
                    <ProfileNavList/>
                    <span className={`${styles.span} ${styles.textColorGrey}`}>
                        В этом разделе вы можете<br/>изменить свои персональные данные
                     </span>
                </div>
                {pathname === '/profile' && <ProfileForm/>}
                {pathname === '/profile/orders' && <ProfileHistoryOrders/>}
            </div>
        </div>

    )
}

export default ProfilePage;