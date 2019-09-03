import React, {Component} from 'react';
import classes from './Lists.css';

class Lists extends Component {
    state = {   
        notes : [
            { title:'1st note', details:'11', lastModified : '9999999999'},
            { title:'2nd note', details:'22', lastModified : ''},
            { title:'3rd note', details:'33333', lastModified : '3333'},
            { title:'4th note', details:'44444', lastModified : '9999994444449999'}]
    };

    noteSelected = (noteTitle) => {
        let selectedNote = 'Random';
        this.state.notes.map(item => {
            if (item.title === noteTitle){
                 selectedNote = item;
            }
            return selectedNote;
        })
        console.log('Selected note title: ' + selectedNote.title);
        this.props.history.push({
            pathname: '/DisplayNote',
            state: {noteData : selectedNote}
        });
    }

    render () {
        let notesItems = this.state.notes.map(item => {
            return(
                <tr key={item.title} onClick={() => this.noteSelected(item.title)}>
                    <td>{item.title}</td>
                    <td align="right">{item.lastModified}</td>
                </tr>   
            )
        })
        return (
            <div className={classes.Lists}>
                <table>
                    <tbody>
                        <tr>
                            <th>NOTES</th>
                        </tr>
                        {notesItems}
                    </tbody>
                </table>
            </div>
            
        );
    }
};

export default Lists;