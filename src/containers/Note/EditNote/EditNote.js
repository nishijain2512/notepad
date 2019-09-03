import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './EditNote.css';

class Notes extends Component {
    // constructor (props) {
    //     super (props);
    //     this.state = {
    //         notes : [
    //             { title:'1', details:'11'},
    //             { title:'2', details:'22'}
    //         ],
    //         tempNote : {
    //             title : 'Title',
    //             details : 'Write your thoughts'
    //         }
    //     }
    // }

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

    doneButtonClicked = () => {
        //Done button will save note, exit from note page and take the user to listview.
        console.log('Done button clicked');
    }

    cancelButtonClicked = () => {
        //will exit the notepage without saving tempnote to notes array.
        this.props.history.goBack();
    }

    saveButtonClicked = () => {
        //Save button saves the tempNote data in notes array.
        console.log('Save button clicked');
        let newNotes = [...this.state.notes];
        newNotes.push({
            title: this.state.tempNote.title,
            details: this.state.tempNote.details}
        );
        this.setState({notes: newNotes});
    }

    render () {

        return(
            <div className={classes.Notes}>
                <form>
                    <input 
                        type="text" 
                        value={this.props.location.state.noteData.title} 
                        onChange={this.inputTextHandler} />
                    <input 
                        type="button" 
                        value="Save" 
                        onClick={this.saveButtonClicked} />
                    <input type="button" value="Done" onClick={this.doneButtonClicked}/>
                    <input type="button" value="Cancel" onClick={this.cancelButtonClicked}/>
                    <textarea 
                        value={this.props.location.state.noteData.details} 
                        onChange={this.textareaHandler} />>
                </form>
            </div>
        )
    }
}

export default withRouter(Notes);

// NOTE:
// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will re-render its component every time the route changes with the same props as <Route> render props: { match, location, history }.