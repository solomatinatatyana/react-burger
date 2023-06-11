import { FC, useRef, useEffect, useState } from "react";

import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';

import orderInfoLayout from './order-info.module.css';
import {useSelector} from "../../services/hook-store";
import OrderToColumn from "./order-to-column";
import OrderInLine from "./order-in-line";

const OrderInfo: FC<{ order: MODEL.TOrder, source: 'feed' | 'profile', direction: 'row' | 'column' }> = ({ order, source, direction }) => {

  const { number, name, status, createdAt, ingredients: arrID } = order;

  let info;
  let style = '';
  switch (status) {
    case 'created': info = 'Создан'; break;
    case 'pending': info = 'Готовится'; break;
    case 'done': info = 'Выполнен'; style = orderInfoLayout.done; break;
    default: info = 'Cоздан';
  }

  const { ingredientsIsLoaded, ingredients } = useSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
    ingredientsIsLoaded: store.burgerIngredients.ingredientsIsLoaded
  }));
  const burgerRef = useRef<any>();
  const [isSecondRender, setIsSecondRender] = useState(false);

  useEffect(() => {
    if (ingredientsIsLoaded) {
      burgerRef.current = arrID.map((item) => ingredients.find((it) => it._id === item));
      setIsSecondRender(true);
    }
  }, [ingredientsIsLoaded]);

  let ingredientList: MODEL.TIngredient[] = [];
  let total: number = 0;

  if (ingredientsIsLoaded && isSecondRender) {
    ingredientList = [...burgerRef.current];
    total = ingredientList.reduce((previousValue, item) => {
      if (item !== undefined) {
        if (item.type === 'bun') return previousValue + 2 * item.price;
        else return previousValue + item.price;
      }
      else return previousValue;
    }, total);
  }

  return (
    <>
      {ingredientsIsLoaded && isSecondRender && direction === 'row' &&
        <div className={orderInfoLayout.boxLine} >
          <div className={orderInfoLayout.boxContent} >
            <span className="text text_type_digits-default">#{number}</span>
            <div className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(createdAt)} /></div>
          </div>
          <div>
            <h3 className="text text_type_main-medium" >{name}</h3>
            {source === 'profile' &&
              <p className={`text text_type_digits-default text_color_inactive ${style} mt-2`} >{info}</p>
            }
          </div>
          <div className={orderInfoLayout.boxContent} >
            <OrderInLine ingredients={ingredientList} />
            <div className={orderInfoLayout.total}>
              <CurrencyIcon type="primary" />
              <span className="text text_type_digits-default">{total}</span>
            </div>
          </div>
        </div>
      }
      {ingredientsIsLoaded && isSecondRender && direction === 'column' &&
        <div className={`${orderInfoLayout.boxColumn}`} >
          <h3 className={`text text_type_main-medium mt-5 mb-3`} >{name}</h3>
          <p className={`text text_type_main-default ${style}`} >{info}</p>
          <h3 className={`text text_type_main-medium mt-15 mb-6`} >Состав:</h3>
          <div className={`custom-scroll  ${orderInfoLayout.ingredients}`} ><OrderToColumn ingredients={ingredientList} /></div>
          <div className={`${orderInfoLayout.boxContent} mt-10`} >
            <div className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(createdAt)} /></div>
            <div className={orderInfoLayout.total}>
              <CurrencyIcon type="primary" />
              <span className="text text_type_digits-default">{total}</span>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default OrderInfo;
