import React from 'react';
import Arrows from "../../icons/arrows.svg";
import styles from "./ExchangeCards.module.css";
import cn from "classnames";

const ExchangeCards = ({amount, from, to, result}) => {
    return (
        <div>
            <div className={styles.card}>
                <p className={styles.text__italic}>У меня есть</p>
                <h4 className={styles.h4}>{amount}</h4>
                <h2 className={cn(styles.h2, styles.h2__bold)}>{from.toUpperCase()}</h2>
            </div>
            <button className={styles.change__button}>
                <input type={"image"} src={Arrows} className={styles.arrows__icon}/>
            </button>
            <div className={styles.card}>
                <p className={styles.text__italic}>У меня будет</p>
                <h4 className={styles.h4}>{result}</h4>
                <h2 className={cn(styles.h2, styles.h2__bold)}>{to.toUpperCase()}</h2>
            </div>
        </div>
    );
};

export default ExchangeCards;