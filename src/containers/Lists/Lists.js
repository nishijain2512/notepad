import React, {Component} from 'react';
import classes from './Lists.css';
import axios from '../../axios-notes';

class Lists extends Component {
    state = {   
        notes : [],
        temp: false
    };

    componentDidMount () {
        axios.get('https://notepad-bacc6.firebaseio.com/notes.json')
            .then(response => {
                const fetchedNotes = [];
                for (let key in response.data) { //while fetching data from firebase, we dont get data in the form of array.
                    fetchedNotes.push({    //Instead we get data in js object. so we  transform that object in array.
                        ...response.data[key],   //As we want to keep the unique key assigned by firebase to each order,
                        id: key     //we spread each data property using spread operator and add another property id which is unique key.
                    })
                }
                this.setState({
                    ...this.state,
                    notes: fetchedNotes
                });
            console.log('Inside componentDidMount');
            console.log(this.state);
            })
            .catch(error => console.log('Error while fetching notes' + error));
    }

    noteSelected = (noteID) => {
        let selectedNote = 'Random';
        this.state.notes.map(item => {
            if (item.id === noteID){
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

    // newNoteButtonClicked = () => {
    //     console.log('New Note button clicked');
    //     let newNote = {
    //         title: 'Title',
    //         details: 'write your thoughts'
    //     };
    //     this.props.history.push({
    //         pathname: '/NewNote',
    //         state: {noteData : newNote}
    //     });
    // }

    render () {
        console.log('inside render');
        let notesItems = this.state.notes.map(item => {
            console.log('inside render -> notesItems');
            return(
                <tr key={item.id} onClick={() => this.noteSelected(item.id)}>
                    <td>{item.title}</td>
                    <td align="left">{item.details}</td>
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