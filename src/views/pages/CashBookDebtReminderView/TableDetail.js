import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Card,
  Box,
  Typography,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  DEEP_LINK_APP,
  LINK_DOWNLOAD_ANDROID,
  LINK_DOWNLOAD_IOS
} from 'src/config';
import Scrollbars from 'src/components/Scrollbars';
import formatMoney from 'src/utils/formatMoney';
import { fDate } from 'src/utils/formatTime';
import { getMobileOperatingSystem } from 'src/utils/getPlatform';
import { useTheme } from '@mui/material/styles';
import { COLORS } from 'src/constants';

function TableDetail({ data }) {
  const classes = useStyles();
  const platform = getMobileOperatingSystem();
  const theme = useTheme();

  const handleClick = () => {
    window.location = DEEP_LINK_APP;
    setTimeout(() => {
      if (platform.toLowerCase() === 'ios') {
        window.location.replace(LINK_DOWNLOAD_IOS);
      } else {
        window.location.replace(LINK_DOWNLOAD_ANDROID);
      }
    }, 10000);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTableCell-root': {
          padding: '10px'
        }
      }}
    >
      <Grid item lg={8} md={12} xs={12}>
        <Card>
          <Box textAlign="center" my="10px">
            <Typography variant="h6">Lịch sử giao dịch</Typography>
            <Typography
              sx={{ marginTop: '8px', color: '#545454', fontSize: '14px' }}
            >
              {data?.total_trans || 0} giao dịch, từ {data?.start_time} đến{' '}
              {data?.end_time}
            </Typography>
          </Box>
          {/* <Box textAlign="center" my="16px">
          <Typography>
            Chi tiết 10 giao dịch gần nhất{' '}
            {data?.contact_info?.name ? `với ${data?.contact_info?.name}` : ''}
          </Typography>
        </Box> */}
          <Scrollbars>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                      },
                      fontWeight: 500
                    }}
                  >
                    Nội dung
                  </TableCell>
                  <TableCell
                    sx={{
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                      },
                      fontWeight: 500
                    }}
                  >
                    Bạn đã nhận
                  </TableCell>
                  <TableCell
                    sx={{
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                      },
                      fontWeight: 500
                    }}
                  >
                    Bạn đã đưa
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data?.list_transaction &&
                  data?.list_transaction.slice(0, 3).map((item, index) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        backgroundColor:
                          index % 2 !== 0 ? 'grey.666' : 'common.white'
                      }}
                    >
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: 'normal',
                            color: theme.palette.grey[777]
                          }}
                        >
                          {fDate(item.created_at, '/')}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: 'normal',
                            color: theme.palette.grey[600]
                          }}
                        >
                          {item.description}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: COLORS.orange, 
                          [theme.breakpoints.down('sm')]: {
                            textAlign: 'right'
                          }
                        }}
                      >
                        {item.transaction_type === 'in' &&
                          formatMoney(item.amount, '')}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: COLORS.green,
                          [theme.breakpoints.down('sm')]: {
                            textAlign: 'right'
                          }
                        }}
                      >
                        {item.transaction_type !== 'in' &&
                          formatMoney(item.amount, '')}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Scrollbars>
        </Card>
        {data?.total_trans > 3 && (
          <Box
            className={classes.recommendWrapper}
            sx={{
              textAlign: 'center',
              marginTop: '12px'
            }}
          >
            <Typography>
              Bạn cần sử dụng{' '}
              <Typography
                className={classes.textLink}
                sx ={{
                  color: '#2c2cff',
                  cursor: 'pointer'}}
                component="span"
                onClick={handleClick}
              >
                App SoBanHang
              </Typography>{' '}
              để xem tất cả {data?.total_trans || 0} giao dịch
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------
const useStyles = styled((theme) => ({
  root: {},
  totalTransactionText: {},
  headText: {},
  infoCellText: {
    fontSize: '13px',
    fontWeight: 'normal'
  },
  amountText: {},
  dateText: {
    color: theme.palette.grey[777]
  },
  descriptionText: {
    color: theme.palette.grey[600]
  },
  incomeText: {
    color: theme.palette.common.income
  },
  outcomeText: {
    color: theme.palette.common.outcome
  },
  recommendWrapper: {
    textAlign: 'center',
    marginTop: '12px'
  },
  textLink: {
    color: '#2c2cff',
    cursor: 'pointer'
  }
}));
// ----------------------------------------------------------------------

export default TableDetail;
