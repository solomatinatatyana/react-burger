import style from './loader.module.css';
import {LoaderSvg} from './loader.svg';
import React from "react";

enum loaderSizes {
    small = 16,
    medium = 24,
    large = 40
};

interface IProps {
    size: any
    inverse?: boolean
}

export const Loader: React.FC<IProps> = ({size, inverse = false}) => {
    const loaderColor = inverse ? '#fff' : '#3C39EC';

    const wrapperStyleKey = 'wrapper_' + size;
    return (
        <div className={style[wrapperStyleKey]}>
            <div className="text text_type_main-default">Загрузка...</div>
            <LoaderSvg color={loaderColor} size={loaderSizes[size]}/>
        </div>
    );
};