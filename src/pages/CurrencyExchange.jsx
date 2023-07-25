import React, {useEffect, useState} from 'react';
import ExchangeService from "../API/ExchangeService";
import InputField from "../components/InputField/InputField";
import ExchangeCards from "../components/ExchangeCards/ExchangeCards";
import Loader from "../components/Loader/Loader";

const CurrencyExchange = () => {
    const [exchange,setExchange] = useState([]);
    const [request, setRequest] = useState({amount: 15, from: 'USD', to: 'RUB'});
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchCurrencyExchange();
    }, [request]);


    async function fetchCurrencyExchange() {
        setIsLoading(true);
        setTimeout( async () => {
            const exchange = await ExchangeService.getCurrencyExchange(request.amount, request.from, request.to);
            setExchange(exchange);
            setIsLoading(false);
        })
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = () => {
        let parameters = value.split(' ');
        let query = {
            amount: Number(parameters[0]),
            from: parameters[1],
            to: parameters[3]
        }
        setRequest(query);
        setValue('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
        <div>
            <h1 className={'h1'}>Конвертер валют</h1>
            <div className={'content'}>
                <h3 className={'h3'}>
                    Введите запрос обмена в формате <span className={'h3__alternative'}>“15 usd in rub”</span>
                </h3>

                <InputField
                    value={value}
                    onChange={handleChange}
                    onClick={handleSubmit}
                    onKeyDown={handleKeyPress}
                    placeholder={'Запрос обмена'}
                >
                    Обменять
                </InputField>

                {isLoading
                ? <Loader/>
                : <ExchangeCards amount={request.amount} from={request.from} to={request.to} result={exchange.result}/>
                }
            </div>
        </div>
    );
};

export default CurrencyExchange;