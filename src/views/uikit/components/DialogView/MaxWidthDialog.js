import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  Switch,
  MenuItem,
  InputLabel,
  DialogTitle,
  FormControl,
  DialogActions,
  DialogContent,
  FormControlLabel,
  DialogContentText
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  form: {
    margin: 'auto',
    display: 'flex',
    width: 'fit-content',
    flexDirection: 'column'
  }
}));

// ----------------------------------------------------------------------

function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Max Width Dialog
      </Button>

      <Dialog
        open={open}
        maxWidth={maxWidth}
        onClose={handleClose}
        fullWidth={fullWidth}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl
              sx={{
                mt: 2,
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            </FormControl>
            <FormControlLabel
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
              sx={{ mt: 1 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MaxWidthDialog;
