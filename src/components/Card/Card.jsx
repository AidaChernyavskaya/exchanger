import React from 'react';
import styles from "./Card.module.css";
import cn from "classnames";

const Card = ({amount, currency, text}) => {
    return (
        <div className={styles.card}>
            <p className={styles.text__italic}>{text}</p>
            <h4 className={styles.h4}>{amount.toString()}</h4>
            <h2 className={cn(styles.h2, styles.h2__bold)}>{currency}</h2>
        </div>
    );
};

export default Card;