import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Lists</NavigationItem>
                <NavigationItem link="/NewNote">New Note</NavigationItem>
                <NavigationItem link="/user">User</NavigationItem>
            </ul>
    );
};

export default navigationItems;