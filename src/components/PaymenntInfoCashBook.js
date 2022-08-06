import React from 'react';
import { Grid, Box, Typography, styled } from '@mui/material';
import { useSnackbar } from 'notistack';
import { COLORS } from 'src/constants';

function PaymentInfoCashBook({ payment }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = () => {
    navigator.clipboard.writeText(payment.account_number);
    enqueueSnackbar('Sao chép thành công', { variant: 'success' });
  };

  return (
    <Root container>
      <Container item lg={7} md={5} sm={6} xs={12}>
        <Box>
          <BankName>{payment.bank_name}</BankName>
          <AccountName>{payment.account_owner}</AccountName>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <AccountNumber>{payment.account_number}</AccountNumber>
            <Copy onClick={handleCopy}>Sao chép</Copy>
          </Box>
        </Box>
      </Container>
    </Root>
  );
}

const Root = styled(Grid)(({ theme }) => ({
  margin: '12px 0px',
  display: 'flex',
  fontSize: '14px',
  lineHeight: '17px',
  fontWeight: '500',
  justifyContent: 'center',
  minWidth: '84%',
  '&.MuiGrid-root': {
    padding: '0px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '84%',
    margin: '12px'
  }
}));

const Container = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[666],
  borderRadius: '12px',
  padding: '16px'
}));

const BankName = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  color: COLORS.primaryDark
}));

const AccountName = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[777],
  margin: '8px 0px'
}));

const AccountNumber = styled(Typography)(({ theme }) => ({
  color: '#545454',
  margin: '8px 0px'
}));

const Copy = styled(Typography)(({ theme }) => ({
  color: '#EB610E',
  cursor: 'pointer',
  marginLeft: '10px'
}));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default PaymentInfoCashBook;
