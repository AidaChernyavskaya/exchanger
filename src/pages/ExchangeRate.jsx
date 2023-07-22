import React, {useEffect, useState} from 'react';
import ExchangeService from "../API/ExchangeService";
import RateTable from "../components/RateTable/RateTable";

const ExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState([]);

    let source = 'RUB';

    useEffect( () => {
        fetchExchangeRate();
    }, [])

    async function fetchExchangeRate() {
        setTimeout(async () => {
            const rate = await ExchangeService.getExchangeRate(source);
            setExchangeRate(rate);
        })
    }
    return (
        <div>
            <h1 className={'h1'}>Курс валют</h1>
            <div className={'content'}>
                <h2 className={'h2'}>Курс показан относительно базовой валюты - <span>{exchangeRate.source}</span></h2>
                <h3 className={'h3'}>Изменить базовую валюту</h3>
                <div className={'input'}>
                    <input className={'input__field'} type={'text'} placeholder={'Базовая валюта'}/>
                    <button className={'input__button'}>Изменить</button>
                </div>
                <RateTable exchangeRate={exchangeRate.quotes}/>
            </div>
        </div>
    );
};

export default ExchangeRate;