import React from 'react';
import Arrows from '../icons/arrows.svg';

const CurrencyExchange = () => {
    return (
        <div>
            <h1 className={'h1'}>Конвертер валют</h1>
            <div className={'content'}>
                <h3 className={'h3'}>
                    Введите запрос обмена в формате <span className={'h3__alternative'}>“15 usd in rub”</span>
                </h3>
                <div className={'input'}>
                    <input
                        className={'input__field'}
                        type={'text'}
                        placeholder={'Запрос обмена'}
                    />
                    <button className={'input__button'}>Обменять</button>
                </div>

                <div className={'card'}>
                    <p className={'text__italic'}>У меня есть</p>
                    <h4 className={'h4'}>15</h4>
                    <h2 className={'h2 h2__bold'}>USD</h2>
                </div>
                <button className={'change__button'}>
                    <input type={"image"} src={Arrows} className={'arrows__icon'}/>
                </button>
                <div className={'card'}>
                    <p className={'text__italic'}>У меня будет</p>
                    <h4 className={'h4'}>1340</h4>
                    <h2 className={'h2 h2__bold'}>RUB</h2>
                </div>
            </div>
        </div>
    );
};

export default CurrencyExchange;