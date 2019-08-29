import React from 'react';
import classes from './NavigationBar.css';
import Logo from '../../components/Logo/Logo';

const navigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <Logo />
            <button onClick={props.clicked}>LogIN</button>
        </div>
    )
}

export default navigationBar;