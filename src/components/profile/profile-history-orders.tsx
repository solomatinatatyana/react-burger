import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './profile.module.css'
import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import profileHistoryLayout from "./profile-history.module.css";
import OrderInfo from "../order/order-info";
import {useDispatch, useSelector} from "../../services/hook-store";
import {wsAuthConnect, wsAuthDisConnect} from "../../services/actions/wsAuth";
import {getAccessToken} from "../../services/get-data";

const ProfileHistoryOrders: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { orders } = useSelector(store => store.wsAuth);

    async function openAuthWS() {
        let accessToken = await getAccessToken();
        if (typeof (accessToken) === 'string') accessToken = accessToken.slice('Bearer '.length)
        dispatch(wsAuthConnect(`?token=${accessToken}`));
    }

    useEffect(() => {
        openAuthWS();
        return () => {
            dispatch(wsAuthDisConnect());
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {orders.length !== 0 &&
                <div className={`custom-scroll ${profileHistoryLayout.boxOrders}`}>
                    {
                        orders.sort((a, b) => {
                            if (a.createdAt > b.createdAt) return -1;
                            if (a.createdAt < b.createdAt) return 1;
                            return 0;
                        }).map(order =>
                            <Link
                                key={order.number}
                                to={`/profile/orders/${order.number}`}
                                style={{ color: 'white', textDecoration: 'none' }}
                                state={{ backgroundLocation: location }}
                            >
                                <OrderInfo order={order} source={'profile'} direction={'row'} key={order._id} />
                            </Link>
                        )
                    }
                </div>
            }
        </>
    )
};

export default ProfileHistoryOrders;