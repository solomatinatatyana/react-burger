import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {isLogged} from "../../utils/utils";

const ProtectedRouteElement = ({element, anonymous = false}) => {

    const location = useLocation();
    const from = location.state?.from || '/';
    // Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && isLogged()) {
        // ...то отправляем его на предыдущую страницу
        return <Navigate to={from}/>;
    }
    // Если требуется авторизация, а пользователь не авторизован...
    if (!isLogged()) {
        // ...то отправляем его на страницу логин
        return <Navigate to="/login" state={{from: location}}/>;
    }
    return element
}

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
    element: PropTypes.element.isRequired
}