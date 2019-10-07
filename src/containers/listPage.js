import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios-notes';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableHearder: {
    font: 'bold',
  },
}));

class ListPage extends Component {
    state = {   
        notes : [],
        temp: false
    };

    componentDidMount () {
        axios.get('http://localhost:5000/Lists')
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
        this.props.history.push({
            pathname: '/DisplayNote',
            state: {noteData : selectedNote}
        });
    }

    render () {
        const {classes} = this.props;

        let notesItems = this.state.notes.map(item => {
            return(
                <TableRow key={item.id} onClick={() => this.noteSelected(item.id)}>
                    <TableCell component="th" scope="row" width="20%">
                      {item.title}
                    </TableCell>
                    <TableCell align="left">{item.details}</TableCell>
                  </TableRow>   
            )
        })

        return (
            <Paper className={classes.root}>
                <Table className={classes.table} size="small">
                    <TableHead className={classes.tableHearder}>
                        <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notesItems}
                    </TableBody>
                </Table>
          </Paper>
        );
    }
}

ListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ListPage);