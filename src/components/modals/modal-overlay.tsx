import React, {ReactElement} from "react";
import styles from "./modal.module.css";

interface IProps {
    children?: ReactElement
    onClose: () => void
}

const ModalOverlay: React.FC<IProps> = ({children, onClose}) => {
    return <div className={`${styles.modalOverlay}`} onClick={onClose}>
        {children}
    </div>
}

export default ModalOverlay

