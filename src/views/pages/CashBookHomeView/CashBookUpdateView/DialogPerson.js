import React, { useState } from 'react';
import { Box, Input, InputAdornment, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseCircle from 'src/assets/Images/closeCircle';
import { styled } from '@mui/material/styles';
import Plus from 'src/assets/plus';
import { COLORS } from 'src/constants';

const TypographyReport = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '19px',
  color: COLORS.orange,
  marginLeft: '14px'
});

function DialogPerson({
  openDialog,
  setOpenDialog,
  setOpenDrawer,
  person,
  setPerson,
  hide,
  setHide
}) {
  const handleClose = () => {
    setPerson('');
  };

  const handleClickAway = () => {
    setOpenDialog(false);
    setHide(true);
  };

  const openDrawer = () => {
    setOpenDrawer(true);
    setOpenDialog(false);
    setHide(false);
  };
  return (
    <Box>
      <Dialog
        open={openDialog}
        onClose={handleClickAway}
        sx={{
          '& .MuiDialog-paper.MuiPaper-rounded': {
            borderRadius: '8px !important',
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            marginBottom: '1px',
            borderRadius: '8px'
          }}
        >
          {' '}
          <Input
            autoFocus
            margin="dense"
            id="name"
            type="email"
            fullWidth
            variant="standard"
            sx={{
              width: '330px',
              height: '40px',
              marginLeft: '14px',
              borderRadius: '0px'
            }}
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            endAdornment={
              <InputAdornment
                position="end"
                sx={{ marginRight: '15px', cursor: 'pointer' }}
              >
                {person !== '' && <CloseCircle onClick={handleClose} />}
              </InputAdornment>
            }
          />{' '}
        </Box>
        {person !== '' && (
          <Box
            className="flex-between-center"
            sx={{
              backgroundColor: 'white',
              marginBottom: '1px',
              height: '40px',
              borderRadius: '6px',
              border: `1px solid ${COLORS.orange}`,
              width: '344px'
            }}
          >
            <TypographyReport
              sx={{
                textOverflow: 'ellipsis',
                width: '100%',
                overflow: 'hidden'
              }}
            >
              Tạo mới "{person}"
            </TypographyReport>
            <TypographyReport
              sx={{
                marginRight: '17px',
                position: 'sticky',
                backgroundColor: 'white'
              }}
            >
              <Plus onClick={openDrawer} />
            </TypographyReport>
          </Box>
        )}

        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '6px',
            marginTop: '1px',
            padding: '15px'
          }}
        >
          {' '}
          <Box sx={{ borderBottom: '1px solid black' }}>123</Box>
          <Box>312 </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

export default DialogPerson;
