import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseCircle from 'src/assets/Images/closeCircle';
import { styled } from '@mui/material/styles';
import Plus from 'src/assets/plus';
import { COLORS } from 'src/constants';

const TypographyTitle = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '500',
  fontStyle: 'normal',
  fontSize: '17px',
  lineHeight: '20px',
  color: COLORS.primaryDark
});

const TypographyText = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  color: '#545454',
  textAlign: 'center'
});

const BoxNewType = styled(Box)({
  width: '343px',
  height: '220px',
  backgroundColor: COLORS.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const BoxDelete = styled(Box)({
  width: '343px',
  height: '172px',
  backgroundColor: COLORS.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});
const ButtonDrawer = styled(Button)({
  backgroundColor: '#00AD4F',
  color: COLORS.white,
  width: '141px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none'
});

function DialogTypeSource({
  openDialogNewType,
  setOpenDialogNewType,
  openDialogDelete,
  setOpenDialogDelete,
  setOpenDialogEditType,
  openDialogEditType
}) {
  const handleClickAwayNewType = () => {
    setOpenDialogNewType(false);
  };
  const handleClickAwayDelete = () => {
    setOpenDialogDelete(false);
  };

  const handleClickAwayEditType = () => {
    setOpenDialogEditType(false);
  };

  const handleRefuseNewType = () => {
    setOpenDialogNewType(false);
  };

  const handleConfirmNewType = () => {
    setOpenDialogNewType(false);
  };

  const handleConfirmDelete = () => {
    setOpenDialogDelete(false);
  };
  const handleRefuseDelete = () => {
    setOpenDialogDelete(false);
  };

  const handleConfirmEditType = () => {
    setOpenDialogEditType(false);
  };
  const handleRefuseEditType = () => {
    setOpenDialogEditType(false);
  };
  return (
    <Box>
      {openDialogNewType === true && (
        <Dialog
          open={openDialogNewType}
          onClose={handleClickAwayNewType}
          sx={{
            '& .MuiDialog-paper.MuiPaper-rounded': {
              borderRadius: '8px !important',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <BoxNewType>
            <TypographyTitle>Ghi l???i s??? d?? m???i</TypographyTitle>
            <TypographyText>
              ???? ph??t sinh s??? d?? m???i t??? ngu???n ti???n v???a{' '}
            </TypographyText>
            <TypographyText>
              {' '}
              ???????c t???o. B???n c?? mu???n ghi l???i giao d???ch
            </TypographyText>
            <TypographyText> n??y v??o Thu/ Chi?</TypographyText>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '13px',
                marginTop: '24px'
              }}
            >
              <ButtonDrawer
                sx={{
                  color: COLORS.darkLighter,
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.darkLighter}`,
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.white
                  }
                }}
                onClick={handleRefuseNewType}
              >
                T??? ch???i
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirmNewType}
              >
                X??c nh???n
              </ButtonDrawer>
            </Box>
          </BoxNewType>
        </Dialog>
      )}
      {openDialogDelete === true && (
        <Dialog
          open={openDialogDelete}
          onClose={handleClickAwayDelete}
          sx={{
            '& .MuiDialog-paper.MuiPaper-rounded': {
              borderRadius: '8px !important',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <BoxDelete>
            <TypographyTitle>X??a ph??n lo???i</TypographyTitle>
            <TypographyText>B???n ch???c r???ng mu???n th???c hi???n </TypographyText>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '13px',
                marginTop: '24px'
              }}
            >
              <ButtonDrawer
                sx={{
                  color: COLORS.darkLighter,
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.darkLighter}`,
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.white
                  }
                }}
                onClick={handleRefuseDelete}
              >
                T??? ch???i
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirmDelete}
              >
                X??c nh???n
              </ButtonDrawer>
            </Box>
          </BoxDelete>
        </Dialog>
      )}
      {openDialogEditType === true && (
        <Dialog
          open={openDialogEditType}
          onClose={handleClickAwayEditType}
          sx={{
            '& .MuiDialog-paper.MuiPaper-rounded': {
              borderRadius: '8px !important',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <BoxNewType>
            <TypographyTitle>Ghi l???i s??? d?? m???i</TypographyTitle>
            <TypographyText>
              ???? ph??t sinh s??? d?? m???i t??? ngu???n ti???n v???a{' '}
            </TypographyText>
            <TypographyText>
              {' '}
              ???????c t???o. B???n c?? mu???n ghi l???i giao d???ch
            </TypographyText>
            <TypographyText> n??y v??o Thu/ Chi?</TypographyText>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '13px',
                marginTop: '24px'
              }}
            >
              <ButtonDrawer
                sx={{
                  color: COLORS.darkLighter,
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.darkLighter}`,
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.white
                  }
                }}
                onClick={handleRefuseEditType}
              >
                T??? ch???i
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirmEditType}
              >
                X??c nh???n
              </ButtonDrawer>
            </Box>
          </BoxNewType>
        </Dialog>
      )}
    </Box>
  );
}

export default DialogTypeSource;
