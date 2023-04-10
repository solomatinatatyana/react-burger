import React, {useCallback, useEffect} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const modalRoot = document.getElementById("react-modals");

const Modal = ({isOpened, header, children, onClose}) => {

    const handleKey = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        document.addEventListener("keydown", handleKey);
        return (() => {
            document.removeEventListener("keydown", handleKey)
        })
    }, [handleKey])

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay isOpened={isOpened} onClose={onClose}/>
                <div className={`${styles.modal}`}>
                    <div className={`${styles.modalBody} pl-10 pr-10 pt-10`}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
                             className="pb-10">
                            <p className="text text_type_main-large">
                                {header}
                            </p>
                            <CloseIcon type={"primary"} onClick={onClose}/>
                        </div>
                        {children}
                    </div>
                </div>
            </>
        ),
        modalRoot
    )
}

/*<div className={`${styles.modalBody} pl-10 pr-10 pt-10`}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} className="pb-10">
        <p className="text text_type_main-large">
            {header}
        </p>
        <CloseIcon type={"primary"} onClick={onClose}/>
    </div>
    {children}
</div>*/

export default Modal;

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    header: PropTypes.string,
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired
}