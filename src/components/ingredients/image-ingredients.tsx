import React from "react";

import style from './image-ingredients.module.css'

const ImageIngredients: React.FC<{ src: string, name: string, count?: string | null}> = ({ src, name, count = null }) => {
  return (
    <>
      <div className={style.boxMain}>
        <div className={style.boxUnit1}>
          <div className={style.gradientBox}>
            <img className={style.image} src={src} alt={name}></img>
          </div>
        </div>
        {count &&
          <div className={style.boxUnit2}>
            <div className={style.gradientBox}>
              <span className={`${style.count} text text_type_main-default`}>{count}</span>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ImageIngredients;
