import React from 'react';
import styles from './Navbar.module.css';
import cn from 'classnames';

const Navbar = () => {
    return (
        <div>
            <header className={styles.navbar}>
                <h2 className={styles.logo}>Exchanger</h2>
                <div className={styles.links}>
                    <a href={'#'} className={cn(styles.link, styles.link__active)}>Курс валют</a>
                    <a href={'#'} className={styles.link}>Обмен валюты</a>
                </div>
            </header>
            <hr className={styles.hr}/>
        </div>
    );
};

export default Navbar;