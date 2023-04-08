import React from "react";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ModalOverlay = ({header, onClose, children}) => {
    return <div className={`${styles.modalBody} pl-10 pr-10 pt-10`}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} className="pb-10">
            <p className="text text_type_main-large">
                {header}
            </p>
            <CloseIcon type={"primary"} onClick={onClose}/>
        </div>
        {children}
    </div>
}

export default ModalOverlay

ModalOverlay.propTypes = {
    header: PropTypes.string,
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired
}