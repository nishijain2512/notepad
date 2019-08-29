import React from 'react';
import classes from './Note.css';

const note = (props) => {
    return (
        <div className={classes.Note}>
            <form>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="This is textarea"></textarea>
                <input type="button" value="Save" onClick={props.clicked} />
            </form>
        </div>
    );

};

export default note;
