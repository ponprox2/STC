import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Trash from 'src/assets/Images/trash';
import deleteCashbookDetail from './services/deleteCashBook';
import { useNavigate } from 'react-router';
import { COLORS } from 'src/constants';
import DialogDelete from './Dialog/DialogDelete';
import Edit from 'src/assets/Images/edit';
const ButtonStyle = styled(Button)({
  height: '48px',
  margin: 'auto 0',
  borderRadius: '10px',
  textTransform: 'none',
  width: '165px'
});
const BoxConented = styled(Box)({
  position: 'fixed',
  bottom: '0px',
  left: 0,
  background: COLORS.white,
  height: '72px',
  width: '100%'
});
const TypographyInOut = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextSemibold',
  fontWeight: '600',
  fontSize: '17px',
  lineHeight: '20px',
  [theme.breakpoints.down('ss')]: {
    fontSize: '15px',
    lineHeight: '18px'
  }
}));
function BottomDetail({ data, setOpen, setIsSuccess, isSuccess, setIndexArr }) {
  const navigate = useNavigate();
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const id = data.id;
  const handleDelete = () => {
    const token = localStorage.getItem('TOKEN');
    async function deleteCashbook() {
      const res = await deleteCashbookDetail.deleteCashbookDetailByID(data.id);
      if (res.status === 200) {
        setTimeout(() => {
          setIsSuccess(!isSuccess);
        }, 50);
      }
    }
    deleteCashbook();
    setIndexArr('');
    setOpen(false);
  };
  // const handleUpdate = () => {
  //   navigate('/cashbook/update', { state: { data } });
  // };

  const handleOpenDialogDelete = () => {
    setOpenDialogDelete(true);
  };

  return (
    <BoxConented className="flex-center">
      <ButtonStyle
        onClick={handleOpenDialogDelete}
        sx={{
          backgroundColor: COLORS.white,
          border: `1px solid ${COLORS.orange}`,
          borderRadius: '8px',
          '&.MuiButton-root:hover': {
            backgroundColor: `${COLORS.white} !important`
          }
        }}
        startIcon={<Trash />}
      >
        <TypographyInOut style={{ color: COLORS.orange }}> Xoá</TypographyInOut>
      </ButtonStyle>
      <DialogDelete
        setOpenDialogDelete={setOpenDialogDelete}
        openDialogDelete={openDialogDelete}
        id={id}
        setIndexArr={setIndexArr}
        setOpen={setOpen}
        setIsSuccess={setIsSuccess}
        isSuccess={isSuccess}
      />
      {/* <ButtonStyle
        sx={{
          backgroundColor: '#FFFFFF',
          border: '1px solidCOLORS.white ,
          borderRadius: '8px',
          '&.MuiButton-root:hover': {
            backgroundColor: '#FFFFFF !important'
          }
        }}
        startIcon={<Edit />}
        // onClick={handleUpdate}
      >
        <TypographyInOut style={{ color: COLORS.white  }}>Sửa</TypographyInOut> */}
      {/* </ButtonStyle> */}
    </BoxConented>
  );
}

export default BottomDetail;
