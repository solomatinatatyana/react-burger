import React, {useCallback, useEffect} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import PropTypes from "prop-types";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import ModalOverlay from "./ModalOverlay";
import {closeModal} from "../../services/actions/modal";


const modalRoot = document.getElementById("react-modals");

const Modal = ({isOpened, header, children, onClose}) => {

    const dispatch = useDispatch();

    const { resetContentModalFunc } = useSelector(state => state.modal);

    const handleKey = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose()
        }
    }, [onClose])

    const handleClose = useCallback(() => {
        resetContentModalFunc !== undefined && resetContentModalFunc !== null && dispatch(resetContentModalFunc);
        onClose !== undefined ? onClose() : dispatch(closeModal());
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKey);
        return (() => {
            document.removeEventListener("keydown", handleKey)
        })
    }, [handleKey])

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay onClose={handleClose} isOpened={isOpened}/>
                <div className={`${styles.modal}`}>
                    <div className={`${styles.modalBody} pl-10 pr-10 pt-10`}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
                             className="pb-10">
                            <p className="text text_type_main-large">
                                {header}
                            </p>
                            <CloseIcon type={"primary"} onClick={handleClose}/>
                        </div>
                        {children}
                    </div>
                </div>

            </>
        ),
        modalRoot
    )
}

export default Modal;

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    header: PropTypes.string,
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired
}