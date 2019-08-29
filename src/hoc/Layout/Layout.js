import React from 'react';
import NavigationBar from '../../containers/NavigationBar/NavigationBar';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <div>
            <NavigationBar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
};

export default layout;