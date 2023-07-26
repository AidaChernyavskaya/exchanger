import React, {useState} from 'react';
import styles from "./Card.module.css";
import cn from "classnames";

const Card = ({amount, currency, text, request, setRequest, readonly}) => {
    const[value, setValue] = useState(amount.toString());

    const handleChange = (event) => {
        let key = event.target.value[event.target.value.length - 1];
        let regex = /\d|\./;
        if (regex.test(key)){
            setValue(event.target.value);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            setRequest({
                amount: Number(value),
                from: request.from,
                to: request.to
            })
        }
    }

    return (
        <div className={styles.card}>
            <p className={styles.text__italic}>{text}</p>
            <input
                className={styles.input__text}
                type={'text'}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                readOnly={readonly}
            />
            <h2 className={cn(styles.h2, styles.h2__bold)}>{currency}</h2>
        </div>
    );
};

export default Card;