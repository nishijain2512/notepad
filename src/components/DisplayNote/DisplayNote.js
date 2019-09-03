import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './DisplayNote.css';

class DisplayNote extends Component {

    editButtonClicked = () => {
        console.log('Edit button clicked');
        this.props.history.push({
            pathname : '/EditNote',
            state : {noteData : this.props.location.state.noteData}
        });
    }

    doneButtonClicked =()=> {
        this.props.history.goBack();
    }
    
    render() {
        return(
            <div className={classes.DisplayNote}>
                <form>
                    <label for='title'>{this.props.location.state.noteData.title}</label>
                    <input 
                        type="button"
                        value='Edit'
                        onClick={this.editButtonClicked} />
                    <input 
                        type="button"
                        value='Done'
                        onClick={this.doneButtonClicked} />
                    <br />
                    <label for='details'>{this.props.location.state.noteData.details}</label>
                </form>
            </div>
        );
    }
}    

export default withRouter(DisplayNote);