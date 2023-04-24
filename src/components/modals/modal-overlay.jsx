import React from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({children, isOpened, onClose}) => {
    return <div className={`${styles.modalOverlay} ${isOpened ? 'open' : 'close'}`} onClick={onClose}>
        {children}
    </div>
}

export default ModalOverlay

ModalOverlay.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
}

