import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './DisplayNote.css';
import axios from '../../axios-notes'

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

    deleteButtonClicked = () => {
        axios.delete('/notes/' + this.props.location.state.noteData.id + '.json')
                .then (response => {
                    console.log('Data deleted successfully');
                    this.props.history.goBack();
                })
                .catch (error => {
                    console.log('Data cant be saved beccause of error : ' + error );
                });
    }
    
    render() {
        return(
            <div className={classes.DisplayNote}>
                <form>
                    <label htmlFor='title'>{this.props.location.state.noteData.title}</label>
                    <input 
                        type="button"
                        value='Edit'
                        onClick={this.editButtonClicked} />
                    <input 
                        type="button"
                        value='Done'
                        onClick={this.doneButtonClicked} />
                    <input 
                        type="button"
                        value='Delete'
                        onClick={this.deleteButtonClicked} />
                    <br />
                    <label htmlFor='details'>{this.props.location.state.noteData.details}</label>
                </form>
            </div>
        );
    }
}    

export default withRouter(DisplayNote);