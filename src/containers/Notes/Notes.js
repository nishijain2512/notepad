import React, {Component} from 'react';
import classes from './Notes.css';

class Notes extends Component {
    render () {
        return(
            <div className={classes.Notes}>
                <form>
                    <textarea placeholder="This is textarea"></textarea>
                </form>
            </div>
        )
    }
}

export default Notes;

