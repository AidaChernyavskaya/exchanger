import React, {useEffect, useState} from 'react';
import Arrows from '../icons/arrows.svg';
import ExchangeService from "../API/ExchangeService";

const CurrencyExchange = () => {
    const [exchange,setExchange] = useState([]);

    let amount = 15;
    let from = 'USD';
    let to = 'RUB';

    useEffect(() => {
        fetchCurrencyExchange();
    }, []);

    async function fetchCurrencyExchange() {
        setTimeout( async () => {
            const exchange = await ExchangeService.getCurrencyExchange(amount, from, to);
            setExchange(exchange);
            console.log(exchange);
        })
    }

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
                    <h4 className={'h4'}>{amount}</h4>
                    <h2 className={'h2 h2__bold'}>{from}</h2>
                </div>
                <button className={'change__button'}>
                    <input type={"image"} src={Arrows} className={'arrows__icon'}/>
                </button>
                <div className={'card'}>
                    <p className={'text__italic'}>У меня будет</p>
                    <h4 className={'h4'}>{exchange.result}</h4>
                    <h2 className={'h2 h2__bold'}>{to}</h2>
                </div>
            </div>
        </div>
    );
};

export default CurrencyExchange;