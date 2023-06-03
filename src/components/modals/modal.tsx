import React, {ReactElement, useCallback, useEffect} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import ModalOverlay from "./modal-overlay";
import {closeModal} from "../../services/actions/modal";
import {useSelector} from "../../services/hook-store";


interface IProps {
    header?: string
    children?: ReactElement
    onClose: () => void
    isOpened?:boolean
}

const Modal: React.FC<IProps> = ({header, children, onClose}) => {

    const dispatch = useDispatch();

    const {resetContentModalFunc}:any = useSelector(state => state.modal);

    const handleKey = useCallback((event: KeyboardEvent) => {
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
            <ModalOverlay onClose={handleClose}>
                <div className={`${styles.modal}`}>
                    <div className={`${styles.modalBody} pl-10 pr-10 pt-10`} onClick={(evt) => evt.stopPropagation()}>
                        <div
                            className={`pb-10 ${styles.modalHeader}`}>
                            <p className="text text_type_main-large">
                                {header}
                            </p>
                            <CloseIcon type={"primary"} onClick={handleClose}/>
                        </div>
                        {children}
                    </div>
                </div>
            </ModalOverlay>
        ),
        document.getElementById("react-modals") as Element
    )
}

export default Modal;