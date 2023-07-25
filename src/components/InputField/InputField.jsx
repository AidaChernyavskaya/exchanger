import React from 'react';
import styles from './InputField.module.css';

const InputField = ({onChange, onClick, onKeyDown, placeholder, value, children}) => {
    return (
        <div className={styles.input}>
            <input
                className={styles.input__field}
                type={'text'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button className={styles.input__button} onClick={onClick}>{children}</button>
        </div>
    );
};

export default InputField;