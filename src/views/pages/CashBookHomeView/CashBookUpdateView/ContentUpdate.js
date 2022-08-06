import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { fontSize, width } from '@mui/system';
import Mask from 'src/assets/Images/mask';
import Person from 'src/assets/Images/iconPerson';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialogPerson from './DialogPerson';
import PersonDrawer from './PersonDrawer';
import { useLocation, useNavigate } from 'react-router';
import AvatarPerson from 'src/assets/Images/avatarPerson';
import CloseCircle from 'src/assets/Images/closeCircle';
import PaymentSouceDrawer from './PaymentSource/PaymentSouceDrawer';
import TypeSourceDrawer from './TypeSource/TypeSourceDrawer';
import { COLORS } from 'src/constants';

const TypographyReport = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '500',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  textTransform: 'none'
});
const ButtonChoose = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  backgroundColor: '#ECECEC',
  border: '1px solid rgba(145, 158, 171, 0.32)',
  borderRadius: '6px',
  marginRight: '8px',
  fontSize: '13px',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#F3F9FF',
    border: '1px solid #0C85F2'
  },
  '&.MuiButton-root': {
    fontSize: '13px !important',
    fontWeight: '400',
    fontFamily: 'SFProText',
    fontStyle: 'normal',
    lineHeight: '160%',
    color: COLORS.darkLighter
  }
});

const ExText = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%',
  color: COLORS.darkGrey
});

const TitleText = styled(Typography)({
  color: COLORS.darkLighter,
  fontFamily: 'SF Pro Text',
  fontWeight: '500',
  fontStyle: 'normal',
  fontSize: '15px',
  lineHeight: '160%'
});

function ContentUpdate({ hide, setHide }) {
  const [pick, setPick] = useState('out');
  const [paymentSource, setPaymentSource] = useState('');
  const [typeSource, setTypeSource] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openTypeDrawer, setOpenTypeDrawer] = useState(false);
  const [openPaymentDrawer, setOpenPaymentDrawer] = useState(false);

  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const type = data.transaction_type;

  const ButtonSwitch = styled(ToggleButton)({
    height: '40px',
    color: COLORS.darkLighter,
    backgroundColor: '#ECECEC',
    width: '100%',
    cursor: 'pointer',
    padding: '8px',
    gap: '4px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    '&.MuiToggleButton-root.Mui-selected': {
      color: type === 'out' ? COLORS.orange : COLORS.green,
      backgroundColor: '#FEFEFE',
      borderRadius: '6px'
    },
    '&:focus': {
      backgroundColor: 'white'
    }
  });

  const colorChange = {
    '&.MuiButton-root': {
      backgroundColor: '#F3F9FF',
      border: '1px solid #0C85F2',
      color: '#1877F2'
    }
  };

  const handleChange = (event, newpick) => {
    if (newpick !== null) {
      setPick(newpick);
    }
  };

  const handleOpenPop = () => {
    setOpenDialog(true);
    setHide(false);
  };

  const handleDelPerson = () => {
    setPerson('');
    setPhone('');
    setConfirm(false);
  };

  const handleOpenPaymentDrawer = () => {
    setOpenPaymentDrawer(true);
    setHide(false);
  };

  const handleOpenTypeDrawer = () => {
    setOpenTypeDrawer(true);
    // setHide(false);
  };

  return (
    <Box
      sx={{
        height: pick === 'out' ? '484px' : '396px',
        width: '100%',
        margin: '0 auto',
        marginTop: '8px',
        backgroundColor: '#FEFEFE',
        padding: '12px 16px 12px 16px',
        gap: '16px'
      }}
    >
      <ToggleButtonGroup
        className="flex-row"
        sx={{
          backgroundColor: ' #ECECEC',
          borderRadius: '6px',
          border: '2px solid #ECECEC'
        }}
        onChange={handleChange}
        value={pick}
        exclusive
      >
        <ButtonSwitch className="flex-center" value="in">
          <TypographyReport>Đã nhận</TypographyReport>
        </ButtonSwitch>
        <ButtonSwitch className="flex-center" value="out">
          <TypographyReport>Chưa nhận</TypographyReport>
        </ButtonSwitch>
      </ToggleButtonGroup>
      {pick === 'out' && (
        <Box sx={{ marginTop: '16px', height: '70px' }}>
          <TitleText>Khách hàng*</TitleText>
          <Box
            className="flex-between-center-row"
            sx={{
              borderBottom:
                confirm === false
                  ? '1px solid rgba(145, 158, 171, 0.32)'
                  : 'none',
              height: '80%'
            }}
          >
            {confirm ? (
              <>
                {' '}
                <Box className="flex-row">
                  {' '}
                  <AvatarPerson />
                  <Box sx={{ marginLeft: '12px' }}>
                    <ExText sx={{ color: '#545454', fontSize: '15px' }}>
                      {person}
                    </ExText>
                    <Box className="flex-evenly-row">
                      <ExText sx={{ fontSize: '14px', marginRight: '5px' }}>
                        {phone}
                      </ExText>
                      <ExText sx={{ fontSize: '14px' }}>. Phải thu:</ExText>
                      <ExText
                        sx={{
                          fontSize: '14px',
                          marginLeft: '5px',
                          color: COLORS.orange
                        }}
                      >
                        1.529.000
                      </ExText>
                    </Box>
                  </Box>
                </Box>
                <CloseCircle
                  style={{ marginRight: '10px' }}
                  onClick={handleDelPerson}
                />
              </>
            ) : (
              <>
                <ExText>Chọn khách hàng</ExText>
                <Box onClick={handleOpenPop}>
                  <Person style={{ marginRight: '10px' }} />
                </Box>
              </>
            )}
          </Box>
        </Box>
      )}

      <Box sx={{ marginTop: '16px', height: '106px' }}>
        <TitleText>Phân loại</TitleText>
        <Box
          className="flex-between-center-row"
          sx={{
            borderBottom: '1px solid rgba(145, 158, 171, 0.32)',
            height: '40%'
          }}
        >
          <ExText sx={{ color: typeSource ? '#3C454F' : {} }}>
            {typeSource ? `${typeSource}` : 'Chưa phân loại'}
          </ExText>
          <Mask
            onClick={handleOpenTypeDrawer}
            style={{ marginRight: '15px', cursor: 'pointer' }}
            fill="#7F7F7F"
          />
        </Box>
        <Box
          sx={{
            height: '40%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <ButtonChoose
            sx={typeSource === 'sell' ? colorChange : {}}
            onClick={() => setTypeSource('sell')}
          >
            Bán hàng
          </ButtonChoose>
          <ButtonChoose
            sx={typeSource === 'interest' ? colorChange : {}}
            onClick={() => setTypeSource('interest')}
          >
            Tiền lãi
          </ButtonChoose>
          <ButtonChoose
            sx={typeSource === 'salary' ? colorChange : {}}
            onClick={() => setTypeSource('salary')}
          >
            Lương thưởng
          </ButtonChoose>
        </Box>
      </Box>
      <Box sx={{ marginTop: '16px', height: '106px' }}>
        <TitleText>Nguồn tiền</TitleText>
        <Box
          className="flex-between-center-row"
          sx={{
            borderBottom: '1px solid rgba(145, 158, 171, 0.32)',
            height: '40%'
          }}
        >
          <ExText sx={{ color: paymentSource ? '#3C454F' : {} }}>
            {paymentSource
              ? `${paymentSource}`
              : 'Chọn để phân loại nguồn tiền'}
          </ExText>
          <Mask
            style={{ marginRight: '15px', cursor: 'pointer' }}
            fill="#7F7F7F"
            onClick={handleOpenPaymentDrawer}
          />
        </Box>
        <Box
          className="flex-center-row"
          sx={{
            height: '40%'
          }}
        >
          <ButtonChoose
            sx={paymentSource === 'cash' ? colorChange : {}}
            onClick={() => setPaymentSource('cash')}
          >
            Tiền mặt
          </ButtonChoose>
          <ButtonChoose
            sx={paymentSource === 'bank' ? colorChange : {}}
            onClick={() => setPaymentSource('bank')}
          >
            Ngân hàng
          </ButtonChoose>
          <ButtonChoose
            sx={paymentSource === 'wallet' ? colorChange : {}}
            onClick={() => setPaymentSource('wallet')}
          >
            Ví điện tử
          </ButtonChoose>
        </Box>
      </Box>
      <Box sx={{ marginTop: '16px', height: '70px' }}>
        <TitleText>Ghi chú</TitleText>
        <Box
          className="flex-center-row"
          sx={{
            borderBottom: '1px solid rgba(145, 158, 171, 0.32)',
            height: '60%'
          }}
        >
          <Input
            style={{
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '15px',
              lineHeight: '160%',
              color: '#3C454F',
              width: '100%',
              fontFamily: 'SEProtext'
            }}
            placeholder="Ví dụ: Hóa đơn điện, nước"
          />
        </Box>
      </Box>
      <DialogPerson
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setOpenDrawer={setOpenDrawer}
        person={person}
        setPerson={setPerson}
        phone={phone}
        setPhone={setPhone}
        setHide={setHide}
      />
      <PersonDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        person={person}
        setPerson={setPerson}
        phone={phone}
        setPhone={setPhone}
        setConfirm={setConfirm}
        setHide={setHide}
      />
      <PaymentSouceDrawer
        openPaymentDrawer={openPaymentDrawer}
        setOpenPaymentDrawer={setOpenPaymentDrawer}
        setHide={setHide}
      />

      <TypeSourceDrawer
        openTypeDrawer={openTypeDrawer}
        setOpenTypeDrawer={setOpenTypeDrawer}
        setHide={setHide}
      />
    </Box>
  );
}

export default ContentUpdate;
