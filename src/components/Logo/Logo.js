import React from 'react';
import classes from './Logo.css';
import appLogo from '../../assests/logo.png';

const logo = props => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={appLogo} alt="NotePad" />
        </div>
    );
};

export default logo;