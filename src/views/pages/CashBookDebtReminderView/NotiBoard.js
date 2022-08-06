import React, { useState, useMemo } from 'react';
import {
  Grid,
  Box,
  Typography,
  // Button,
  styled,
  Divider
} from '@mui/material';
import { useSnackbar } from 'notistack';
import formatMoney from 'src/utils/formatMoney';
import zalo from 'src/assets/Images/zalo.png';
import viettel_pay from 'src/assets/Images/viettel_pay.png';
import vn_pay from 'src/assets/Images/vn_pay.png';
import momo from 'src/assets/Images/momo.png';
import bank from 'src/assets/Images/cb-bank.png';
import StringHandler from 'src/utils/stringHandler';
import useBreakpoints from 'src/hooks/useBreakpoints';
import { useTheme } from '@mui/material/styles';
import PaymentInfoCashBook from 'src/components/PaymenntInfoCashBook';
import { COLORS } from 'src/constants';

const PAYMENT_LINKS = [
  { key: 'momo', image: momo },
  { key: 'viettel_pay', image: viettel_pay },
  { key: 'zalo', image: zalo },
  { key: 'vn_pay', image: vn_pay },
  { key: 'banking', image: bank }
];

function NotiBoard({ data }) {
  const classes = useStyles();
  const isMobile = useBreakpoints('down', 'sm');
  const { enqueueSnackbar } = useSnackbar();
  const [selectedPayment, setSelectedPayment] = useState('');
  const theme = useTheme();
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
          `${data?.business_name} chưa cung cấp phương thức chuyển khoản ngân hàng`,
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
          `https://nhantien.momo.vn/${chosePayment?.information.phone_number}/${data.total_cash}`
        );
      } else {
        let phone = '';
        if (data?.user_info?.phone_number.indexOf('+84') === 0) {
          phone = data?.user_info?.phone_number.slice(3);
          phone = '0'.concat(phone);
        }
        window.open(`https://nhantien.momo.vn/${phone}/${data.total_cash}`);
      }
      return;
    }

    if (chosePayment) {
      setSelectedPayment(payment);
      // window.open(chosePayment.link_payment);
    } else {
      if (selectedPayment) setSelectedPayment('');
      enqueueSnackbar(
        `${
          data?.business_name
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
        {/* <Box textAlign="center">
          <Typography variant="h6">Lịch sử giao dịch</Typography>
          <Typography className={classes.totalTransactionText}>
            {data?.total_trans || 0} giao dịch, từ {data?.start_time} đến{' '}
            {data?.end_time}
          </Typography>
        </Box> */}
        <Box
          sx={{
            border: '1px solid #D7D7D7',
            borderRadius: '8px',
            padding: '16px 12px',
            marginBottom: '16px'
          }}
        >
          <Box textAlign="center">
            <Typography
              sx={{
                fontSize: '19px',
                fontWeight: '600',
                color: theme.palette.grey[777]
              }}
            >
              {data?.total_cash > 0 ? 'Số tiền cần trả' : 'Số tiền bạn sẽ nhận'}
            </Typography>
            <Typography
              sx={{
                fontSize: '19px',
                fontWeight: 'bold',
                color: data?.total_cash > 0 ? COLORS.orange : COLORS.green
              }}
            >
              {formatMoney(data?.total_cash)}
            </Typography>
          </Box>
          <Divider sx={{ margin: '10px 0px' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Box textAlign="center">
              <Typography
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '16px'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '14px'
                  },
                  fontWeight: '500',
                  color: theme.palette.grey[777]
                }}
              >
                Bạn đã nhận (-)
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: COLORS.orange
                }}
              >
                {formatMoney(data?.total_cash_in)}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box textAlign="center">
              <Typography
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '16px'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '14px'
                  },
                  fontWeight: '500',
                  color: theme.palette.grey[777]
                }}
              >
                Bạn đã đưa (+)
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: COLORS.green
                }}
              >
                {formatMoney(data?.total_cash_out)}
              </Typography>
            </Box>
          </Box>
        </Box>
        {data?.total_cash > 0 && (
          <>
            <Typography
              sx={{
                [theme.breakpoints.up('sm')]: {
                  fontSize: '16px'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '14px'
                },
                fontWeight: '500',
                color: theme.palette.grey[777]
              }}
            >
              Thanh toán qua:
            </Typography>
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
              <Box sx={isMobile ? mobileStyle : {}}>
                {paymentBanking.map((payment) => (
                  <PaymentInfoCashBook
                    key={payment.id}
                    payment={payment.information}
                  />
                ))}
              </Box>
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
}

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
  root: {},
  totalTransactionText: {
    marginTop: '8px',
    marginBottom: '16px',
    color: '#545454',
    fontSize: '14px'
  },
  content: {},
  image: {},
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
  notiBalanceText: {
    fontSize: '19px',
    fontWeight: 'bold'
  },
  notiText: {},
  incomeText: {
    color: theme.palette.common.outcome
  },
  outcomeText: {
    color: theme.palette.common.income
  },
  paymentBox: {
    width: '48px',
    height: '48px',
    cursor: 'pointer'
  },

  mobile: {
    display: 'flex',
    width: '100%',
    overflowX: 'overlay',
    overflowY: 'hidden'
  }
}));
// ----------------------------------------------------------------------

export default NotiBoard;
