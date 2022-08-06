import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Date from 'src/assets/Images/date';
import Mask from 'src/assets/Images/mask';
import BackArrow from 'src/assets/Images/backArrow';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';
import 'moment/locale/vi';
import { COLORS } from 'src/constants';

const TypographyDate = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '160%',
  marginTop: '4px',
  height: '17px',
  color: '#1877F2'
});

const TypographyTitle = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '17px',
  lineHeight: '20px',
  color: COLORS.primaryDark
});

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const date = moment(data.created_at).format('dddd, L');
  const type = data.transaction_type;
  const handleBack = () => {
    navigate('/cashbook');
  };

  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Box>
      <Box
        className="flex-center"
        style={{
          height: '40px',
          backgroundColor: COLORS.white
        }}
      >
        <BackArrow
          style={{
            marginTop: '1px',
            position: 'absolute',
            left: 10,
            cursor: 'pointer'
          }}
          onClick={handleBack}
        />
        {type === 'out' ? (
          <TypographyTitle> Khoản chi</TypographyTitle>
        ) : (
          <TypographyTitle>Khoản thu</TypographyTitle>
        )}
      </Box>
      <Box
        className="flex-center-row"
        style={{
          paddingLeft: '16px',
          backgroundColor: '#F6F6F6'
        }}
      >
        <Date style={{ marginTop: '5px' }} fill="#1877F2" />
        <TypographyDate style={{ marginLeft: '6px' }}>
          {jsUcfirst(date)}
        </TypographyDate>
        <Mask style={{ margin: '7px 0 0 6px' }} fill="#1877F2" />
      </Box>
    </Box>
  );
}

export default TopBar;
