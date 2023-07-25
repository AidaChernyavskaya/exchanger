import React from 'react';
import Arrows from "../../icons/arrows.svg";
import styles from "./ExchangeCards.module.css";
import Card from "../Card/Card";

const ExchangeCards = ({amount, from, to, result}) => {
    return (
        <div>
            <Card amount={amount} currency={from.toUpperCase()} text={'У меня есть'}/>

            <button className={styles.change__button}>
                <input type={"image"} src={Arrows} className={styles.arrows__icon}/>
            </button>

            <Card amount={result} currency={to.toUpperCase()} text={'У меня будет'}/>
        </div>
    );
};

export default ExchangeCards;