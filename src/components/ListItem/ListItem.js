import React from 'react';
import classes from './ListItem';

const listItem = props => {
    return (
        <div className={classes.ListItem}>
            <tr>
                <td>{props.item}</td>
            </tr>
        </div>
    );
};

export default listItem;