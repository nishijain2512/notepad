import React from 'react';
import {withRouter} from 'react-router-dom';
import logoImage from '../assests/Images/Notepad_icon.png';
import { 
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
}));


function TopNav (props) {

  const classes = useStyles();

  const newNoteButtonHandler = () => {
    console.log('TopNav New Note button clicked')
    props.history.push('/NewNote');
    };

  const imageClickHandler = () => {
    props.history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img edge="start" src={logoImage} alt="logo" onClick={imageClickHandler}/>
          <Typography variant="h6" align="center" className={classes.title} noWrap>
            Notepad
          </Typography>
          <Button color="inherit" onClick={()=> console.log('TopNav List button clicked')}>Lists</Button>
          <Button color="inherit" onClick={newNoteButtonHandler}>New Note</Button>
          <Button color="inherit" onClick={()=> console.log('TopNav User button clicked')}>User</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(TopNav);