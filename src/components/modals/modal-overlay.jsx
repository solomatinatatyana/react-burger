import React from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({children, onClose}) => {
    return <div className={`${styles.modalOverlay}`} onClick={onClose}>
        {children}
    </div>
}

export default ModalOverlay

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

