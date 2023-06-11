import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./services/reducers";
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import {wsMiddleware} from "./services/middleware/wsMiddleware";
import {WS_BASE_URL} from "./utils/burger-api";
import {wsAllActions, wsAuthActions} from "./services/middleware/constants-ws-actions";
import {wsDataMiddleware} from "./services/middleware/wsDataMiddleware";

const composeEnhancers = composeWithDevTools({trace: true});

const enhancer = composeEnhancers(applyMiddleware(
    thunkMiddleware,
    wsMiddleware(WS_BASE_URL, wsAllActions),
    wsMiddleware(WS_BASE_URL, wsAuthActions),
    wsDataMiddleware()
));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
    document.getElementById('root') as Element
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
