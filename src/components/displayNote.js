import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../axios-notes';
import { Typography, Box, Divider, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        bottom: 0,
    },
    bottomNav: {//to fix the positon of BottomNavigation to the bottom of the page
        width: '100%',
        position: 'fixed',
        bottom: 0,
      },
})

class DisplayNote extends Component {
    state = {
        selectedBottomNavAction : null
    };

    bottomNavigationClickHandler = (event, value) => {
        switch (value) {
            case 0: 
                const path = '/EditNote/' + this.props.location.state.noteData.id;
                this.props.history.push({
                    pathname : '/EditNote/' + this.props.location.state.noteData.id,
                    state : {noteData : this.props.location.state.noteData}
                });
                break;
            case 1: 
                this.props.history.goBack();
                break;
            case 2: 
                //axiox.delete does support a request body. It accepts two parameters: url and optional 
                //config. You can use config.data to set the response body as follows:
                //axios.delete(url, { data: { foo: "bar" } });
                //On backend, req.body will be data here n so req.body.foo -> "bar"
                axios.delete('http://localhost:5000/notes', {data: {id: this.props.location.state.noteData.id}})
                    .then (response => {
                    this.props.history.goBack();
                    })
                    .catch (error => {
                    console.log('Data cant be saved beccause of error : ' + error );
                    });
                break;
            default:
                break;
        }
    };
    
    render () {
        const { classes } = this.props;

        return(
            <Box bgcolor="#90caf9" className={classes.root}>
                <Typography align="left" variant="h4">{this.props.location.state.noteData.title}</Typography>
                <Divider />
                <Box >
                    <Typography align="left" paragraph>{this.props.location.state.noteData.details}</Typography>
                </Box>
                <BottomNavigation 
                    className={classes.bottomNav} 
                    showLabels
                    value={this.state.selectedBottomNavAction}
                    onChange={this.bottomNavigationClickHandler}>
                    <BottomNavigationAction label="Edit" icon={<EditIcon />} />
                    <BottomNavigationAction label="Done" icon={<DoneIcon />} />
                    <BottomNavigationAction label="Delete" icon={<DeleteIcon />} />
                </BottomNavigation>
            </Box>
        );
    }
};

DisplayNote.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(withRouter(DisplayNote));