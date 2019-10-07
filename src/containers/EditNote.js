import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../axios-notes';
import SaveIcon from '@material-ui/icons/Save';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import { 
    withStyles, 
    Box, 
    BottomNavigation, 
    BottomNavigationAction,
    Input, 
    Divider} from '@material-ui/core';

const styles = theme => ({
    root: {
        height:'100%',
        width: '100%',
        backgroundColor: '#90caf9'
    },
    inputField: {
        width: '100%',
        border: 'none',
    },
    bottomNav: {//to fix the positon of BottomNavigation to the bottom of the page
        width: '100%',
        position: 'fixed',
        bottom: 0,
      },
})

class EditNote extends Component {
    constructor (props) {
        super (props);
        if (this.props.location.pathname === '/NewNote') {
            this.state = {
                tempNote : {
                    title : '',
                    details : '',
                    created : '',
                    modified : ''
                },
                selectedBottomNavAction: null
            }
        } else {
            this.state = {
                tempNote : {
                    title : this.props.location.state.noteData.title,
                    details : this.props.location.state.noteData.details,
                    id : this.props.location.state.noteData.id,
                    created : '',
                    modified : ''
                },
                savedInDatabase: false,
                selectedBottomNavAction: null
            }
        }
        
    }

    titleFieldHandler = (event) => {
        event.preventDefault();
        let updatedTempNoteTitle = {
            ...this.state.tempNote,
            title : event.target.value
        };
        this.setState({tempNote: updatedTempNoteTitle});
    }

    detailsFieldHandler = (event) => {
        event.preventDefault();
        let updatedTempNoteDetails = {
            ...this.state.tempNote,
            details : event.target.value
        };
        this.setState({tempNote: updatedTempNoteDetails});
    }

    updateDatabase = () => {
        if(this.props.location.pathname === '/NewNote') {
            axios.post('http://localhost:5000/notes', this.state.tempNote)
                .then (response => {
                    this.setState({
                        ...this.state,
                        savedInDatabase: true
                    })
                })
                .catch (error => {
                    console.log('New data cant be saved beccause of error : ' + error );
                });
        } else {
            axios.put('http://localhost:5000/notes', this.state.tempNote)
                .then (response => {
                    this.setState({
                        ...this.state,
                        savedInDatabase: true
                    })
                })
                .catch (error => {
                    console.log('Existing data cant be modified beccause of error : ' + error );
                });
        }
    }

    doneButtonClicked = () => {
        //Done button will save note, exit from note page and take the user to listview.
        if (this.state.savedInDatabase) {
            this.props.history.goBack();
        }else {
            if(this.props.location.pathname === '/NewNote') {
                axios.post('http://localhost:5000/notes', this.state.tempNote)
                    .then (response => {
                        this.props.history.goBack();
                    })
                    .catch (error => {
                        console.log('New data cant be saved beccause of error : ' + error );
                    });
            } else {
                axios.put('http://localhost:5000/notes', this.state.tempNote)
                    .then (response => {
                        this.props.history.push('/');
                    })
                    .catch (error => {
                        console.log('done Existing data cant be modified beccause of error : ' + error );
                    });
            }
        }
        
    }

    bottomNavigationClickHandler = (event, value) => {
        switch (value) {
            case 0: 
                //Save button saves the tempNote data in database.
                this.updateDatabase();
                break;
            case 1: 
                this.doneButtonClicked();
                break;
            case 2: 
                //will exit the notepage without saving tempnote to notes array.
                this.props.history.goBack();
                break;
            default:
                break;
        }
    }

    render () {
        const { classes } = this.props;
        return(
            <Box className={classes.root}>
                <Input 
                    className={classes.inputField}
                    autoFocus
                    disableUnderline
                    fullWidth
                    placeholder="Enter Title"
                    value={this.state.tempNote.title}
                    onChange={this.titleFieldHandler} />
                <br />
                <Divider />
                <Input 
                    className={classes.inputField}
                    disableUnderline
                    fullWidth
                    multiline
                    placeholder="Details"
                    value={this.state.tempNote.details}
                    onChange={this.detailsFieldHandler} />

                <BottomNavigation 
                    className={classes.bottomNav} 
                    showLabels
                    value={this.state.selectedBottomNavAction}
                    onChange={this.bottomNavigationClickHandler}>
                    <BottomNavigationAction label="Save" icon={<SaveIcon />} />
                    <BottomNavigationAction label="Done" icon={<DoneIcon />} />
                    <BottomNavigationAction label="Cancel" icon={<CancelIcon />} />
                </BottomNavigation>
            </Box>
        )
    }
}

EditNote.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(withRouter(EditNote));

// NOTE:
// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter 
//higher-order component. withRouter will re-render its component every time the route changes with the same 
//props as <Route> render props: { match, location, history }.