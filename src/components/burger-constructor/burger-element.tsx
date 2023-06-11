import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {deleteIngredient} from "../../services/actions/burger-constructor";
import styles from './burger-constructor.module.css'
import {useDispatch} from "../../services/hook-store";

interface IProps {
    element: MODEL.TIngredient
    index?: number
    type?: 'top' | 'bottom'
    extraClass: string
    moveListItem?: (dragIndex: number, hoverIndex: number) => void
}

const BurgerElement: React.FC<IProps> = ({element, index = 0, type, extraClass, moveListItem}) => {

    const {id, _id} = element;

    const [{isDragging}, dragRef] = useDrag({
        type: 'item',
        item: {index, _id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })


    const [{handlerId}, dropRef] = useDrop({
        accept: 'item',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover: (item: any, monitor) => {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset: any = monitor.getClientOffset();
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

    const ref = useRef<any>(null)
    dragRef(dropRef(ref))

    const opacity = isDragging ? 0 : 1

    const dispatch = useDispatch()

    const handleElementDelete = useCallback(() => {
        dispatch(deleteIngredient(id));
    }, [])

    return (
        <div key={element.id} className={`p-1 ${styles.burgerElementContainer}`}  {...(element.type !== 'bun' && {
            ref: ref
        })} style={{opacity}} data-handler-id={handlerId}>
            {element.type !== 'bun' && <DragIcon type="primary"/>}
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