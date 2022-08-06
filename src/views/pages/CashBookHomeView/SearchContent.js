import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from 'src/assets/Images/search';
import PieChart from 'src/assets/Images/pieChart';
import Options from 'src/assets/Images/options';
import BillContent from './BillContent';
import ListBill from './ListBill';
import axios from 'axios';
import { COLORS } from 'src/constants';
import getLishCashBook from './services/listCashBook';
import EmptyCashbook from 'src/assets/Images/emptyCashbook';

const BoxContent = styled(Box)(({ theme }) => ({
  background: COLORS.white,
  width: '375px',
  height: '66px',
  marginTop: '12px',
  [theme.breakpoints.down('mb')]: {
    height: '62px'
  },
  [theme.breakpoints.down('ss')]: {
    height: '58px'
  }
}));

const BoxInput = styled(Box)(({ theme }) => ({
  margin: '13px 0px 13px 0',
  borderRadius: '10px',
  width: '229px',

  [theme.breakpoints.down('mb')]: {
    width: '180px'
  },
  [theme.breakpoints.down('ss')]: {
    width: '150px'
  }
}));
const InputContent = styled(TextField)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  borderRadius: '10px',
  height: '16px',
  '& .MuiOutlinedInput-root': {
    background: '#F6F6F6',
    borderRadius: '8px',
    borderColor: 'none'
  },
  '& input': {
    padding: '10px 0px'
  },

  [theme.breakpoints.down('mb')]: {
    '& input': {
      padding: '7px 0px',
      fontSize: '13px'
    }
  }
}));
const TypographyReport = styled(Typography)(({ theme }) => ({
  fontFamily: 'SFProTextRegular',
  ontStyle: 'normal',
  fontWeight: '300',
  fontSize: '13px',
  lineHeight: '15px',
  color: COLORS.darkLighter,
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('mb')]: {
    fontSize: '12px',
    lineHeight: '12px'
  },
  [theme.breakpoints.down('ss')]: {
    fontSize: '10px',
    lineHeight: '10px'
  }
}));
const AccordionSummarys = styled(AccordionSummary)({
  padding: '0 !important',
  margin: '0 ',
  height: '64px'
});

const TypographyText = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  color: COLORS.darkLighter,
  textAlign: 'center'
});

function SearchContent({
  setIsSuccess,
  isSuccess,
  endTime,
  startTime,
  open,
  setOpen
}) {
  const [cashBookData, setCashBookData] = useState([]);
  const [date, setDate] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState('');
  // const [vertical ,setvertical] = useState({

  // })
  const vertical = 'top';
  const horizontal = 'center';

  const handlePieChart = () => {
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };
  const groupBy = (array) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue.day.split('T')[0]] =
        result[currentValue.day.split('T')[0]] || []).push({
        ...currentValue
      });
      setDate(result);
      return result;
    }, {});
  };

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    const business_id = localStorage.getItem('BUSINESS');

    async function getListCashbook() {
      const data = {
        business_id: business_id,
        token: token,
        start_time: startTime,
        end_time: endTime,
        transaction_type: '',
        page: 0,
        page_size: 1000000,
        sort: 'day desc',
        search: '',
        status: ''
      };

      const res = await getLishCashBook.getLishCashBookDetail(data);

      if (res.status === 200) {
        const json = await res.data.data;
        if (json.length == 0) {
          setDate([]);
        } else {
          const cashBookGroupedByDate = groupBy(json);
          setCashBookData(json);
        }
      }
    }

    if (startTime) {
      getListCashbook();
    }
  }, [isSuccess, startTime, endTime]);

  let result = [];
  if (date && Object.keys(date).length > 0) {
    Object.keys(date).map(function (key, index) {
      result.push(
        <div>
          <Accordion defaultExpanded={index === 0 ? true : false}>
            <AccordionSummarys>
              <BillContent data={key} current={date[key]} />
            </AccordionSummarys>
            <AccordionDetails style={{ padding: '0' }}>
              <ListBill
                data={date[key]}
                setIsSuccess={setIsSuccess}
                isSuccess={isSuccess}
                open={open}
                setOpen={setOpen}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      );
    });
  }

  return (
    <Box style={{ zIndex: '1' }}>
      <BoxContent className="flex-start-evenly" style={{ width: '100%' }}>
        <BoxInput zIndex="1">
          <InputContent
            onClick={handlePieChart}
            fullWidth
            disabled
            placeholder="Tìm giao dịch"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }}
          ></InputContent>
        </BoxInput>
        <Box style={{ display: 'flex' }}>
          <Box style={{ margin: '13px 12px 13px 0' }} onClick={handlePieChart}>
            <PieChart style={{ display: 'block', margin: '0 auto' }} />
            <TypographyReport>Báo cáo</TypographyReport>
          </Box>
          <Box style={{ margin: '13px 12px 13px 0' }} onClick={handlePieChart}>
            <Options style={{ display: 'block', margin: '0 auto' }} />
            <TypographyReport style={{}}>Bộ lọc</TypographyReport>
          </Box>
        </Box>
        <Snackbar
          style={{ position: 'absolute', top: '10%' }}
          open={openSnackbar}
          onClose={closeSnackbar}
          autoHideDuration={800}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert severity="warning" sx={{ width: '100%' }}>
            Tính năng này đang được phát triển !
          </Alert>
        </Snackbar>
      </BoxContent>
      {result.length === 0 ? (
        <Box className="flex-center-center-column" sx={{ height: '300px' }}>
          <EmptyCashbook />
          <TypographyText>
            Sổ thu chi sẽ giúp bạn tiết kiệm 2 tiếng
          </TypographyText>
          <TypographyText>
            mỗi ngày, dễ dàng kiểm soát lãi lỗ, không
          </TypographyText>
          <TypographyText>
            lo thất thoát. Tạo khoản thu chi đầu tiên
          </TypographyText>
          <TypographyText>tại đây ngay nhé!</TypographyText>
        </Box>
      ) : (
        result
      )}
    </Box>
  );
}

export default SearchContent;
