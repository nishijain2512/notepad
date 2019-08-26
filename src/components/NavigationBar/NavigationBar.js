import React from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationBar = () => {
    return (
        <div className={classes.NavigationBar}>
            <Logo />
            <p>List Name</p>
            <nav>
                <ul>
                    <a>User</a>
                </ul>
            </nav>
        
        </div>
    )
}

export default navigationBar;