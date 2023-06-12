import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hook-store";
import style from './feed.module.css'
import OrderInfo from "../../components/order/order-info";
import {wsConnect, wsDisConnect} from "../../services/actions/ws";

const FeedPage: React.FC = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnect('/all'));
        return () => {
            dispatch(wsDisConnect());
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const {orders, total, totalToday} = useSelector(state => state.ws);

    return (
        <>
            {orders.length !== 0 &&
                <div>
                    <div className={style.boxPage}>
                        <h1 className={`text text_type_main-large mb-5`}>Лента заказов</h1>
                    </div>
                    <div className={style.boxContent}>
                        <div className={`custom-scroll ${style.boxOrders}`}>
                            {
                                orders.sort((a, b) => {
                                    if (a.createdAt > b.createdAt) return -1;
                                    if (a.createdAt < b.createdAt) return 1;
                                    return 0;
                                }).map(order => {
                                    return (
                                        <Link
                                            key={order.number}
                                            to={`/feed/${order.number}`}
                                            style={{color: 'white', textDecoration: 'none'}}
                                            state={{backgroundLocation: location}}
                                        >
                                            <OrderInfo order={order} source={'feed'} direction={'row'} key={order._id}/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className={style.boxStat}>
                            <div className={style.boxStatCurrent}>
                                <div className={`${style.column} ${style.done}`}>
                                    <h3 className={`text text_type_main-medium mb-6`}>Готовы:</h3>
                                    <div className={style.orders}>
                                        {
                                            orders.filter(it => it.status === 'done')
                                                .map((item, index) => <p className={`text text_type_digits-default mr-2`}
                                                                         key={index}>{item.number}</p>)
                                        }
                                    </div>
                                </div>
                                <div className={style.column}>
                                    <h3 className={`text text_type_main-medium mb-6`}>В работе:</h3>
                                    <div className={style.orders}>
                                        {
                                            orders.filter(it => it.status === 'pending')
                                                .map((item, index) => <p className={`text text_type_digits-default mr-2`}
                                                                         key={index}>{item.number}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.boxStatTotal}>
                                <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                                <p className='text text_type_digits-large'>{total}</p>
                            </div>
                            <div className={style.boxStatTotal}>
                                <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                                <p className='text text_type_digits-large'>{totalToday}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FeedPage;