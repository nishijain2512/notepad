import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/Lists">Lists</NavigationItem>
                <NavigationItem link="/" exact>Note</NavigationItem>
                <NavigationItem link="/user">User</NavigationItem>
            </ul>
    );
};

export default navigationItems;