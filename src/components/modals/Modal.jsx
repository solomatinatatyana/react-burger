import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";


const modalRoot = document.getElementById("react-modals");

const Modal = ({isOpened, header, children, onClose}) => {

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        });
        return (() => {
            document.removeEventListener("keydown", (event) => {
                if (event.key === 'Escape') {
                    onClose()
                }
            });
        })
    }, [])

    return ReactDOM.createPortal(
        (
            <div className={`${styles.modal} ${isOpened ? 'open' : 'close'}`} onClick={onClose}>
                <ModalOverlay header={header} children={children} onClose={onClose}/>
            </div>
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