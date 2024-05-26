import './catalogue.css';
/* import React, { useEffect } from 'react';
import { useState } from 'react'; */

function AutoCard (props) {


    return <>
        <div className='img-block'><img src={props.img} alt="error" /></div>
        <h4>{props.brand}</h4>
        <p className='catalogue-p'>{props.model}</p>
        <p className='economy'>
            <div className='check'></div>
            Ви економете бл.{props.price * 0.05} USD 
        </p>
        <button className='catalogue-btn'>Надіслати запит</button>
        <p className='media-p'>Получить Варианты в мессенджер</p>
        <div className='social-media'>
            <img className='messenger' src="./img/tg.png" alt="error" />
            <img className='messenger' src="./img/fb.png" alt="error" />
        </div>
    </>
}
export default AutoCard;