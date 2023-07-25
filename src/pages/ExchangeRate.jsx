import React, {useEffect, useState} from 'react';
import ExchangeService from "../API/ExchangeService";
import RateTable from "../components/RateTable/RateTable";
import Loader from "../components/Loader/Loader";
import InputField from "../components/InputField/InputField";

const ExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState([]);
    const [source, setSource] = useState('RUB');
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        fetchExchangeRate();
    }, [])

    async function fetchExchangeRate() {
        setIsLoading(true);
        setTimeout(async () => {
            const rate = await ExchangeService.getExchangeRate(source);
            setExchangeRate(rate);
            setIsLoading(false);
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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
        <div>
            <h1 className={'h1'}>Курс валют</h1>
            <div className={'content'}>
                <h2 className={'h2'}>Курс показан относительно базовой валюты - <span>{exchangeRate.source}</span></h2>
                <h3 className={'h3'}>Изменить базовую валюту</h3>
                <InputField
                    value={value}
                    placeholder={'Базовая валюта'}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    onClick={handleSubmit}
                >
                    Изменить
                </InputField>
                {isLoading
                ? <Loader/>
                : <RateTable exchangeRate={exchangeRate.quotes}/>
                }
            </div>
        </div>
    );
};

export default ExchangeRate;