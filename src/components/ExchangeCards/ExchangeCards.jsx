import React from 'react';
import Arrows from "../../icons/arrows.svg";
import styles from "./ExchangeCards.module.css";
import Card from "../Card/Card";

const ExchangeCards = ({result, request, setRequest}) => {
    const handleChangeCurrency = () => {
        let query = {
            amount: request.amount,
            from: request.to,
            to: request.from
        }
        setRequest(query);
    }

    const drawExchangeCards = () => {
        return (
            <div>
                <Card
                    amount={request.amount}
                    currency={request.from?.toUpperCase()}
                    text={'У меня есть'}
                    request={request}
                    setRequest={setRequest}
                    readonly={false}
                />
                <button className={styles.change__button} onClick={handleChangeCurrency}>
                    <input type={"image"} src={Arrows} className={styles.arrows__icon}/>
                </button>
                <Card
                    amount={result}
                    currency={request.to?.toUpperCase()}
                    text={'У меня будет'}
                    request={request}
                    setRequest={setRequest}
                    readonly={true}
                />
            </div>
        );
    }

    return (
        <div>
            {result === undefined
                ? <h2 className={styles.h2}>Ошибка! Проверьте формат ввода данных</h2>
                : drawExchangeCards()
            }
        </div>
    );
};

export default ExchangeCards;