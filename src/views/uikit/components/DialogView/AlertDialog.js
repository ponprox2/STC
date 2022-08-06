import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  styled
} from '@mui/material';

const useStyles = styled((theme) => ({
  root: {
    '& .MuiDialogContent-root': {
      textAlign: 'center',
      padding: '34px 34px 0px'
    },
    '& .MuiDialogTitle-root': {
      textAlign: 'center',
      padding: '16px 0px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  }
}));

// ----------------------------------------------------------------------

function AlertDialog({ open, title, content, handleConfirm, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      maxWidth="xs"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>Có</Button>
        <Button onClick={handleClose} autoFocus variant="contained">
          Không
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
