import ProfileNavListItem from "./profile-nav-list-item";
import {useLocation, useNavigate} from "react-router-dom";

import styles from './profile.module.css'
import {useDispatch} from "react-redux";
import {logoutRequest} from "../../services/actions/logout";
import {getAllTokens} from "../../utils/utils";

const ProfileNavList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const {refreshToken} = getAllTokens();

    const onProfile = () => navigate('/profile');
    const onHistory = () => navigate('/profile/orders');
    const onLogout = () => {
        dispatch(logoutRequest(refreshToken, () => navigate("/login")))
    }

    return <nav>
        <ul className={styles.ul}>
            <li onClick={onProfile}>
                <ProfileNavListItem title='Профиль' isActive={pathname === '/profile'}/>
            </li>
            <li onClick={onHistory}>
                <ProfileNavListItem title='История заказов' isActive={pathname === '/profile/orders'}/>
            </li>
            <li onClick={onLogout} id='logout'>
                <ProfileNavListItem title='Выход' isActive={pathname === '/logout'}/>
            </li>
        </ul>
    </nav>
}
export default ProfileNavList;