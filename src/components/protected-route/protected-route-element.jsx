import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {isLogged} from "../../utils/utils";

const ProtectedRouteElement = ({element}) => {

    const location = useLocation();

    if (!isLogged()) {
        return <Navigate to="/login" state={{from: location}}/>;
    }
    return element;
}

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
    element: PropTypes.element.isRequired
}