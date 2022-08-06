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

const BoxNewPayment = styled(Box)({
  width: '343px',
  height: '220px',
  backgroundColor: COLORS.white
});

const BoxDelete = styled(Box)({
  width: '343px',
  height: '172px',
  backgroundColor: COLORS.white
});
const ButtonDrawer = styled(Button)({
  backgroundColor: COLORS.green,
  color: COLORS.white,
  width: '141px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none'
});

function DialogPaymentSource({
  openDialogNewPayment,
  setOpenDialogNewPayment,
  openDialogDelete,
  setOpenDialogDelete,
  setOpenDialogEditPayment,
  openDialogEditPayment,
  setHide
}) {
  const handleClickAwayNewPayment = () => {
    setOpenDialogNewPayment(false);
    setHide(true);
  };
  const handleClickAwayDelete = () => {
    setOpenDialogDelete(false);
    setHide(true);
  };

  const handleClickAwayEditPayment = () => {
    setOpenDialogEditPayment(false);
    setHide(true);
  };

  const handleRefuseNewPayment = () => {
    setOpenDialogNewPayment(false);
    setHide(true);
  };

  const handleConfirmNewPayment = () => {
    setOpenDialogNewPayment(false);
    setHide(true);
  };

  const handleConfirmDelete = () => {
    setOpenDialogDelete(false);
    setHide(true);
  };
  const handleRefuseDelete = () => {
    setOpenDialogDelete(false);
    setHide(true);
  };

  const handleConfirmEditPayment = () => {
    setOpenDialogEditPayment(false);
    setHide(true);
  };
  const handleRefuseEditPayment = () => {
    setOpenDialogEditPayment(false);
    setHide(true);
  };
  return (
    <Box>
      {openDialogNewPayment === true && (
        <Dialog
          open={openDialogNewPayment}
          onClose={handleClickAwayNewPayment}
          sx={{
            '& .MuiDialog-paper.MuiPaper-rounded': {
              borderRadius: '8px !important',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <BoxNewPayment className="flex-center-center-column">
            <TypographyTitle>Ghi lại số dư mới</TypographyTitle>
            <TypographyText>
              Đã phát sinh số dư mới từ nguồn tiền vừa{' '}
            </TypographyText>
            <TypographyText>
              {' '}
              được tạo. Bạn có muốn ghi lại giao dịch
            </TypographyText>
            <TypographyText> này vào Thu/ Chi?</TypographyText>

            <Box
              className="flex-evenly-center-row"
              sx={{
                gap: '13px',
                marginTop: '24px'
              }}
            >
              <ButtonDrawer
                sx={{
                  color: COLORS.darkLighter,
                  backgroundColor: COLORS.white,
                  border: ` 1px solid ${COLORS.darkLighter}`,
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.white
                  }
                }}
                onClick={handleRefuseNewPayment}
              >
                Từ chối
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirmNewPayment}
              >
                Xác nhận
              </ButtonDrawer>
            </Box>
          </BoxNewPayment>
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
          <BoxDelete className="flex-center-center-column">
            <TypographyTitle>Xóa nguồn tiền</TypographyTitle>
            <TypographyText>Bạn chắc rằng muốn thực hiện </TypographyText>
            <Box
              className="flex-evenly-center-row"
              sx={{
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
                Từ chối
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
                Xác nhận
              </ButtonDrawer>
            </Box>
          </BoxDelete>
        </Dialog>
      )}
      {openDialogEditPayment === true && (
        <Dialog
          open={openDialogEditPayment}
          onClose={handleClickAwayEditPayment}
          sx={{
            '& .MuiDialog-paper.MuiPaper-rounded': {
              borderRadius: '8px !important',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <BoxNewPayment className="flex-center-center-column">
            <TypographyTitle>Ghi lại số dư mới</TypographyTitle>
            <TypographyText>
              Đã phát sinh số dư mới từ nguồn tiền vừa{' '}
            </TypographyText>
            <TypographyText>
              {' '}
              được tạo. Bạn có muốn ghi lại giao dịch
            </TypographyText>
            <TypographyText> này vào Thu/ Chi?</TypographyText>

            <Box
              className="flex-evenly-center-row"
              sx={{
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
                onClick={handleRefuseEditPayment}
              >
                Từ chối
              </ButtonDrawer>
              <ButtonDrawer
                sx={{
                  '&.MuiButtonBase-root.MuiButton-root:hover': {
                    backgroundColor: COLORS.orange
                  },
                  backgroundColor: COLORS.orange
                }}
                onClick={handleConfirmEditPayment}
              >
                Xác nhận
              </ButtonDrawer>
            </Box>
          </BoxNewPayment>
        </Dialog>
      )}
    </Box>
  );
}

export default DialogPaymentSource;
