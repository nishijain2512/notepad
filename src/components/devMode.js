import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

//IMP NOTE: right now the dialog does not close. The variable (isDialogOpen) needs to be in state 
//          so that when its value changes, it renders the app and closes the dialog.

const devMode = () => {
    let isDialogOpen = true;

    const handleClose = () => {
        isDialogOpen = false;
    }
    return(
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle id="alert-dialog-title">
                    To access development mode, login with your facebook id.
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Login with Facebook
                    </Button>
                </DialogActions>
            </Dialog>
    </div>
    );
};

export default devMode;

