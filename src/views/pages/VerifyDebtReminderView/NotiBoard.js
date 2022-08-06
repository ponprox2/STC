import React, { useState, useMemo } from 'react';
import {
  Grid,
  Box,
  Typography,
  // Button,
  styled,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import formatMoney from 'src/utils/formatMoney';
import zalo from 'src/assets/Images/zalo.png';
import viettel_pay from 'src/assets/Images/viettel_pay.png';
import vn_pay from 'src/assets/Images/vn_pay.png';
import momo from 'src/assets/Images/momo.png';
import bank from 'src/assets/Images/bank.png';
import StringHandler from 'src/utils/stringHandler';
import clsx from 'clsx';
import PaymentInfo from 'src/components/PaymentInfo';
import useBreakpoints from 'src/hooks/useBreakpoints';
import { COLORS } from 'src/constants';

const PAYMENT_LINKS = [
  { key: 'momo', image: momo },
  { key: 'viettel_pay', image: viettel_pay },
  { key: 'zalo', image: zalo },
  { key: 'vn_pay', image: vn_pay },
  { key: 'banking', image: bank }
];

function NotiBoard({ data }) {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useBreakpoints('down', 'sm');
  const { enqueueSnackbar } = useSnackbar();
  const [selectedPayment, setSelectedPayment] = useState('');
  const transactionType = data?.transaction_info?.transaction_type;

  const paymentBanking = useMemo(() => {
    if (!Object.keys(data).length) return [];
    return data?.payment_info.filter(
      (payment) => payment.payment_method === 'banking'
    );
  }, [data]);

  const handleClickPayment = (payment) => {
    const chosePayment = data.payment_info.find(
      (item) => item.payment_method === payment
    );
    if (payment === 'banking') {
      if (!chosePayment) {
        enqueueSnackbar(
          `${data?.business_info?.name} chưa cung cấp phương thức chuyển khoản ngân hàng`,
          {
            variant: 'error'
          }
        );
      }
      if (selectedPayment) setSelectedPayment('');
      return;
    }

    if (payment === 'momo') {
      if (chosePayment) {
        window.open(
          `https://nhantien.momo.vn/${chosePayment?.information.phone_number}/${data?.transaction_info?.amount}`
        );
      } else {
        let phone = '';
        if (data?.user_info?.phone_number.indexOf('+84') === 0) {
          phone = data?.user_info?.phone_number.slice(3);
          phone = '0'.concat(phone);
        }
        window.open(
          `https://nhantien.momo.vn/${phone}/${data?.transaction_info?.amount}`
        );
      }
      return;
    }

    if (chosePayment) {
      // window.open(chosePayment.link_payment);
      setSelectedPayment(payment);
    } else {
      if (selectedPayment) setSelectedPayment('');
      enqueueSnackbar(
        `${
          data?.business_info?.name
        } chưa cung cấp phương thức thanh toán qua ${StringHandler.capitalizeFirstLetter(
          payment.replace(/_/g, ' ')
        )}`,
        {
          variant: 'error'
        }
      );
    }
  };

  const checkExistPayment = (payment) => {
    if (payment === 'momo') return true;
    if (data?.payment_info && data?.payment_info.length > 0) {
      const existPayment = data?.payment_info.find(
        (item) => item.payment_method === payment
      );
      if (existPayment) return true;
      return false;
    }
    return false;
  };

  // const handleClickPayNow = () => {};

  const mobileStyle = {
    display: 'flex',
    width: '100%',
    overflowX: 'overlay',
    overflowY: 'hidden'
  };

  return (
    <Grid
      // className={classes.root}
      container
      sx={{
        margin: '24px 0px',
        display: 'flex',
        justifyContent: 'center',
        '&.MuiGrid-root': {
          padding: '0px'
        }
      }}
    >
      <Grid item lg={6} md={12} xs={12}>
        <Box textAlign="center" mb="16px">
          <Typography variant="h6">Xác nhận giao dịch</Typography>
        </Box>
        <Box
          // className={classes.content}
          sx={{
            border: '1px solid #D7D7D7',
            borderRadius: '8px',
            padding: '16px 12px',
            marginBottom: '16px'
          }}
        >
          <Box textAlign="center">
            <NotiBalanceBigText>
              {transactionType === 'in' ? 'Bạn đã nhận' : 'Bạn đã đưa'}
            </NotiBalanceBigText>
            <NotiBalanceText
              sx={{
                color:
                  transactionType === 'in'
                    ? theme.palette.common.outcome
                    : theme.palette.common.income
              }}
            >
              {formatMoney(data?.transaction_info?.amount)}
            </NotiBalanceText>
          </Box>
          <Divider sx={{ margin: '10px 0px' }} />
          <Box className={`flex-evenly-center`}>
            <Box textAlign="center">
              <NotiShopName>
                {transactionType === 'in' ? 'Từ' : 'Cho'}{' '}
                {data?.business_info?.name || ''}
              </NotiShopName>
              {/* <Typography className={classes.notiBigText}>
                0964 123 123
              </Typography> */}
            </Box>
          </Box>
        </Box>
        {data?.transaction_info?.amount > 0 && (
          <>
            <NotiBigText>Thanh toán qua:</NotiBigText>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box display="flex">
                {PAYMENT_LINKS.map((paymentMethod) => (
                  <PaymentBox
                    key={paymentMethod.key}
                    sx={{
                      opacity: checkExistPayment(paymentMethod.key) ? 1 : 0.4
                    }}
                    onClick={() => handleClickPayment(paymentMethod.key)}
                  >
                    <img
                      style={{ width: '28px' }}
                      src={paymentMethod.image}
                      alt={paymentMethod.key}
                    />
                  </PaymentBox>
                ))}
              </Box>
              {/* <Button
                disabled
                className={classes.button}
                onClick={handleClickPayNow}
              >
                Thanh toán ngay
              </Button> */}
            </Box>
            {paymentBanking.length > 0 && (
              <PaymentWrapper sx={isMobile ? mobileStyle : {}}>
                {paymentBanking.map((payment) => (
                  <PaymentInfo key={payment.id} payment={payment.information} />
                ))}
              </PaymentWrapper>
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
}

const NotiBalanceBigText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  color: theme.palette.grey[777]
}));

const NotiBalanceText = styled(Typography)(({ theme }) => ({
  fontSize: '19px',
  fontWeight: 'bold'
}));

const NotiBigText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
  fontWeight: '500',
  color: theme.palette.grey[777]
}));

const NotiShopName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
  fontWeight: '500',
  color: COLORS.primaryDark
  // color:"red"
}));

const PaymentBox = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const PaymentWrapper = styled(Box)(({ theme }) => ({
  marginBottom: '130px'
}));

// ----------------------------------------------------------------------
const useStyles = styled((theme) => ({
 
  button: {
    backgroundColor: theme.palette.common.income,
    color: theme.color.white,
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px !important'
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.action.disabled,
      color: theme.color.white
    },
    '&:hover': {
      backgroundColor: '#ca1a41'
    }
  },
  incomeText: {
    color: theme.palette.common.outcome
  },
  outcomeText: {
    color: theme.palette.common.income
  },

  paymentWrapper: {},
  mobile: {}
}));
// ----------------------------------------------------------------------

export default NotiBoard;
