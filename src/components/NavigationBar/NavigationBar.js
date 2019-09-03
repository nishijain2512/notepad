import React from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const navigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <Logo />
            <NavigationItems />
        </div>
    )
}

export default navigationBar;