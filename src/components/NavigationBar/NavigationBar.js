import React from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
//import NavigationItem from './NavigationItem/NavigationItem';


const navigationBar = () => {
    return (
        <div className={classes.NavigationBar}>
            <Logo />
            <input type="text" placeholder="Listname" />
            <nav>
                <ul>
                    <button>Save</button>
                </ul>
            </nav>
        </div>
    )
}

export default navigationBar;