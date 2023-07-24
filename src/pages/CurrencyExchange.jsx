import React from 'react';

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
            </div>
        </div>
    );
};

export default CurrencyExchange;