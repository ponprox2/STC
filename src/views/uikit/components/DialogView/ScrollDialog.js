import React, { forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  styled
} from '@mui/material';

const useStyles = styled(() => ({
  root: {
    '& .MuiDialogTitle-root': {
      textAlign: 'center'
    }
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ----------------------------------------------------------------------
// scroll = ['paper', 'body']
function ScrollDialog({
  className = '',
  title = 'Hộp thoại xác nhận',
  content,
  textOkButton = 'Xác nhận',
  open,
  scroll = 'paper',
  hideFooter = false,
  handleConfirm,
  handleClose
}) {
  const classes = useStyles();
  return (
    <Dialog
      className={`${className} ${classes.root}`}
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      scroll={scroll}
    >
      <DialogTitle sx={{ padding: '24px' }}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      {!hideFooter && (
        <DialogActions>
          <Button onClick={handleClose}>Hủy bỏ</Button>
          <Button variant="contained" onClick={handleConfirm}>
            {textOkButton}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default ScrollDialog;
