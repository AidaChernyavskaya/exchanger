import React, {useEffect, useState} from 'react';
import ExchangeService from "../API/ExchangeService";
import RateTable from "../components/RateTable/RateTable";

const ExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState([]);
    const [source, setSource] = useState('RUB');
    const [value, setValue] = useState('');

    useEffect( () => {
        fetchExchangeRate();
    }, [])

    async function fetchExchangeRate() {
        setTimeout(async () => {
            const rate = await ExchangeService.getExchangeRate(source);
            setExchangeRate(rate);
        })
    }

    const handleChange = (event) => {
        setSource(event.target.value);
        setValue(event.target.value);
    }

    const handleSubmit = () => {
        fetchExchangeRate();
        setValue('');
    }

    return (
        <div>
            <h1 className={'h1'}>Курс валют</h1>
            <div className={'content'}>
                <h2 className={'h2'}>Курс показан относительно базовой валюты - <span>{exchangeRate.source}</span></h2>
                <h3 className={'h3'}>Изменить базовую валюту</h3>
                <div className={'input'}>
                    <input
                        className={'input__field'}
                        type={'text'}
                        placeholder={'Базовая валюта'}
                        value={value}
                        onChange={handleChange}
                    />
                    <button className={'input__button'} onClick={handleSubmit}>Изменить</button>
                </div>
                <RateTable exchangeRate={exchangeRate.quotes}/>
            </div>
        </div>
    );
};

export default ExchangeRate;