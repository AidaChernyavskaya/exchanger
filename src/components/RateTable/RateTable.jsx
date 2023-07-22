import React, {useState} from 'react';
import styles from './RateTable.module.css';
import cn from 'classnames';

const RateTable = ({exchangeRate}) => {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', e => {
        setWidth(window.innerWidth);
    })

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
                <div className={styles.exchange_rate}>
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
                <div className={styles.exchange_rate}>
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
                <p className={styles.text}>Название валюты</p>
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