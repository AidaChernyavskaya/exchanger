import React from 'react';
import styles from './Navbar.module.css';
import cn from 'classnames';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header className={styles.navbar}>
                <h2 className={styles.logo}>Exchanger</h2>
                <div className={styles.links}>
                    <NavLink
                        to="/rate"
                        className={({isActive}) => isActive ? cn(styles.link, styles.link__active) : styles.link}
                    >
                        Курс валют
                    </NavLink>
                    <NavLink
                        to="/exchange"
                        className={({isActive}) => isActive ? cn(styles.link, styles.link__active) : styles.link}
                    >
                        Обмен валюты
                    </NavLink>
                </div>
            </header>
            <hr className={styles.hr}/>
        </div>
    );
};

export default Navbar;