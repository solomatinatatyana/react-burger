import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {deleteIngredient} from "../../services/actions/burger-constructor";
import {useDispatch} from "react-redux";
import styles from './burger-constructor.module.css'
import ingredientTypes from "../../utils/constants/props-ingredient.type";
import PropTypes from "prop-types";

const BurgerElement = ({element, index, type, extraClass, moveListItem}) => {

    const [{isDragging}, dragRef] = useDrag({
        type: 'item',
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const {id} = element;

    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            if (moveListItem !== undefined) moveListItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
        //сортировка работает в обоих направлениях без добавления булок, как только добавились булки - начинает
        //работать через раз, непонятно в чем проблемв
    })

    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))

    const opacity = isDragging ? 0 : 1

    const dispatch = useDispatch()

    const handleElementDelete = useCallback(() => {
        dispatch(deleteIngredient(id));
    }, [])

    return (
        <div key={element.id} className={`p-1 ${styles.burgerElementContainer}`}  {...(element.type !== 'bun' && {
            ref: dragDropRef
        })} style={{opacity}}>
            {element.type !== 'bun' && <DragIcon type="primary" draggable/>}
            <ConstructorElement
                type={type}
                extraClass={extraClass}
                text={type === "top" ? element.name + ` (верх)` : type === "bottom" ? element.name + ` (низ)` : element.name}
                price={element.price}
                thumbnail={element.image}
                isLocked={element.type === 'bun'}
                handleClose={handleElementDelete}/>
        </div>)
}

export default BurgerElement;

BurgerElement.propTypes = {
    element: ingredientTypes.isRequired,
    moveListItem: PropTypes.func,
    index: PropTypes.number,
    type: PropTypes.string,
    extraClass: PropTypes.string
}