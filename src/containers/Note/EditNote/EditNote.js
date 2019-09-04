import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from '../../../axios-notes';
import classes from './EditNote.css';

class Notes extends Component {
    constructor (props) {
        super (props);
        if (this.props.location.pathname === '/EditNote') {
            this.state = {
                tempNote : {
                    title : this.props.location.state.noteData.title,
                    details : this.props.location.state.noteData.details,
                    id : this.props.location.state.noteData.id
                },
                savedInDatabase: false
            }
        } else {
            this.state = {
                tempNote : {
                    title : 'Enter Title',
                    details : 'Enter your notes details here'
                }
            }
        }
        
    }

    inputTextHandler = (event) => {
        event.preventDefault();
        let updatedTempNoteTitle = {
            ...this.state.tempNote,
            title : event.target.value
        };
        this.setState({tempNote: updatedTempNoteTitle});
    }

    textareaHandler = (event) => {
        event.preventDefault();
        let updatedTempNoteDetails = {
            ...this.state.tempNote,
            details : event.target.value
        };
        this.setState({tempNote: updatedTempNoteDetails});
    }

    updateDatabase = () => {
        if(this.props.location.pathname === '/NewNote') {
            axios.post('/notes.json', this.state.tempNote)
                .then (response => {
                    this.setState({
                        ...this.state,
                        savedInDatabase: true
                    })
                })
                .catch (error => {
                    console.log('Data cant be saved beccause of error : ' + error );
                });
        } else {
            axios.put('https://notepad-bacc6.firebaseio.com/notes/' + this.state.tempNote.id + '.json', this.state.tempNote)
                .then (response => {
                    this.setState({
                        ...this.state,
                        savedInDatabase: true
                    })
                })
                .catch (error => {
                    console.log('Data cant be saved beccause of error : ' + error );
                });
        }
    }

    doneButtonClicked = () => {
        //Done button will save note, exit from note page and take the user to listview.
        console.log('Done button clicked');
        if (this.state.savedInDatabase) {
            this.props.history.push('/');
        }else {
            if(this.props.location.pathname === '/NewNote') {
                axios.post('/notes.json', this.state.tempNote)
                    .then (response => {
                        this.props.history.push('/');
                    })
                    .catch (error => {
                        console.log('Data cant be saved beccause of error : ' + error );
                    });
            } else {
                axios.put('https://notepad-bacc6.firebaseio.com/notes/' + this.state.tempNote.id + '.json', this.state.tempNote)
                    .then (response => {
                        this.props.history.push('/');
                    })
                    .catch (error => {
                        console.log('Data cant be saved beccause of error : ' + error );
                    });
            }
        }
        
    }

    cancelButtonClicked = () => {
        //will exit the notepage without saving tempnote to notes array.
        this.props.history.goBack();
    }

    saveButtonClicked = () => {
        //Save button saves the tempNote data in database.
        this.updateDatabase();
    }

    render () {
        
        return(
            <div className={classes.Notes}>
                <form>
                    <input 
                        type="text" 
                        value={this.state.tempNote.title} 
                        onChange={this.inputTextHandler} />
                    <input 
                        type="button" 
                        value="Save" 
                        onClick={this.saveButtonClicked} />
                    <input type="button" value="Done" onClick={this.doneButtonClicked}/>
                    <input type="button" value="Cancel" onClick={this.cancelButtonClicked}/>
                    <textarea 
                        value={this.state.tempNote.details} 
                        onChange={this.textareaHandler} />>
                </form>
            </div>
        )
    }
}

export default withRouter(Notes);

// NOTE:
// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will re-render its component every time the route changes with the same props as <Route> render props: { match, location, history }.