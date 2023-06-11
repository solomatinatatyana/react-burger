import React, {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "../../services/hook-store";
import {wsAuthConnect, wsAuthDisConnect} from "../../services/actions/wsAuth";
import {wsConnect, wsDisConnect} from "../../services/actions/ws";
import style from './order.module.css'
import OrderInfo from "../../components/order/order-info";
import Modal from "../../components/modals/modal";
import {getAccessToken} from "../../services/get-data";


const OrderPage: React.FC<{ mode: 'modal' | 'page' }> = ({mode}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const {pathname} = useLocation();

    let source: 'feed' | 'profile' = 'feed';
    if (pathname.includes('profile')) source = 'profile';

    const [isFiltered, setIsFiltered] = useState(false);

    const orderRef = useRef<MODEL.TOrder>();

    let orders: MODEL.TOrder[];
    const {orders: ordersAll} = useSelector(state => state.ws);
    const {orders: ordersAuth} = useSelector(state => state.wsAuth);
    source === 'feed' ? orders = ordersAll : orders = ordersAuth;

    useEffect(() => {

        async function openAuthWS() {
            let accessToken = await getAccessToken();
            if (typeof (accessToken) === 'string') accessToken = accessToken.slice('Bearer '.length)
            dispatch(wsAuthConnect(`?token=${accessToken}`));
        }

        source === 'feed' ? dispatch(wsConnect('/all')) : openAuthWS();

        return () => {
            source === 'feed' ? dispatch(wsDisConnect()) : dispatch(wsAuthDisConnect());
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!isFiltered && orders.length !== 0) {
            orderRef.current = orders.filter(it => String(it.number) === id)[0];
            setIsFiltered(true);
            if (orderRef.current === undefined) navigate('/not-found')
        }
        isFiltered && dispatch(wsDisConnect());
    }, [orders, isFiltered]); // eslint-disable-line react-hooks/exhaustive-deps

    const onClose = () => navigate(-1);

    return (
        <>
            {mode === 'page' && isFiltered && (orderRef.current !== undefined) &&
                <div className={style.boxPage}>
                    <span className={`text text_type_digits-default ${style.orderId}`}>#{orderRef.current.number}</span>
                    <OrderInfo order={orderRef.current} source={source} direction={'column'}/>
                </div>
            }
            {mode === 'modal' && isFiltered && (orderRef.current !== undefined) &&
                <Modal header={`#${orderRef.current.number}`} onClose={onClose}>
                    <OrderInfo order={orderRef.current} source={source} direction={'column'}/>
                </Modal>
            }
        </>
    )
}

export default OrderPage
