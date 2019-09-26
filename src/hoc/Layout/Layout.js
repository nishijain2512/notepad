import React from 'react';
//import NavigationBar from '../../components/NavigationBar/NavigationBar';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <div>
            
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
};

export default layout;