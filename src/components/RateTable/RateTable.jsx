import React, {useState} from 'react';
import styles from './RateTable.module.css';
import cn from 'classnames';
import currencies from 'cldr-numbers-modern/main/ru/currencies.json';

const PATH = currencies.main.ru.numbers.currencies;
const ELEM_KEY_1 = 600;
const ELEM_KEY_2 = 601;

const RateTable = ({exchangeRate}) => {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', e => {
        setWidth(window.innerWidth);
    })

    //Create array with exchange rates from object in props
    const createRatesArray = (exchangeRate) => {
        let rates = [];
        for (let rate in exchangeRate) {
            let obj ={};
            obj[rate.slice(3,6)] = exchangeRate[rate];
            rates.push(obj);
        }
        return rates;
    }

    const ratesArray = createRatesArray(exchangeRate);

    const drawExchangeRateTable = (ratesArray) => {
        if (width > 700){
            return [
                <div className={styles.exchange_rate} key={ELEM_KEY_1}>
                    <div className={styles.exchange_rate__column}>
                        {drawExchangeRateColumn(ratesArray.slice(0, ratesArray.length/2))}
                    </div>
                    <div className={styles.hr__vertical}></div>
                    <div className={styles.exchange_rate__column}>
                        {drawExchangeRateColumn(ratesArray.slice(ratesArray.length/2, ratesArray.length-1))}
                    </div>
                </div>
            ]
        } else {
            return [
                <div className={styles.exchange_rate} key={ELEM_KEY_2}>
                    <div className={styles.exchange_rate__column}>
                        {drawExchangeRateColumn(ratesArray)}
                    </div>
                </div>
            ]
        }
    }

    const drawExchangeRateColumn = (ratesArray) => {
        let rates = [
            <div className={styles.exchange_rate__row} key={0}>
                <p className={cn(styles.text, styles.text__bold)}>Букв. код</p>
                <p className={cn(styles.text, styles.text__bold)}>Валюта</p>
                <p className={cn(styles.text, styles.text__bold)}>Курс</p>
            </div>
        ];
        ratesArray.map((rate, index) => rates.push(
            <div className={styles.exchange_rate__row} key={index+1}>
                <p className={cn(styles.text, styles.text__bold)}>{Object.keys(rate)}</p>
                {PATH[Object.keys(rate)[0]] === undefined
                    ? <p className={styles.text}>Название валюты</p>
                    : <p className={styles.text}>{PATH[Object.keys(rate)[0]].displayName}</p>
                }
                <p className={styles.text}>{Object.values(rate)}</p>
            </div>
        ))
        return rates;
    }

    return (
        <div>
            {drawExchangeRateTable(ratesArray)}
        </div>
    );
};

export default RateTable;