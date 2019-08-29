import React, {Component} from 'react';
import classes from './Notes.css';

class Notes extends Component {
    constructor (props) {
        super (props);
        this.state = {
            notes : [
                { title:'1', details:'11'},
                { title:'2', details:'22'}
            ],
            tempNote : {
                title : 'Title',
                details : 'Write your thoughts'
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

    doneButtonClicked = () => {
        //Done button will save note, exit from note page and take the user to listview.
        console.log('Done button clicked');
    }

    cancelButtonClicked = () => {
        //will exit the notepage without saving tempnote to notes array.
        let resetTempNote = {
            title : 'Title',
            details : 'Write your thoughts'
        };
        this.setState({tempNote: resetTempNote});
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
        console.log('state title : ' + this.state.tempNote.title);
        console.log('state details : ' + this.state.tempNote.details);
        this.state.notes.map(el => console.log('saveButtonClicked' + el.title + ' , ' + el.details));

        return(
            <div className={classes.Notes}>
                <form>
                    <input 
                        type="text" 
                        value={this.state.tempNote.title} 
                        onChange={this.inputTextHandler.bind(this)} />
                    <input 
                        type="button" 
                        value="Save" 
                        onClick={this.saveButtonClicked} />
                    <input type="button" value="Done" onClick={this.doneButtonClicked}/>
                    <input type="button" value="Cancel" onClick={this.cancelButtonClicked}/>
                    <textarea 
                        value={this.state.tempNote.details} 
                        onChange={this.textareaHandler.bind(this)} />>
                </form>
            </div>
        )
    }
}

export default Notes;

