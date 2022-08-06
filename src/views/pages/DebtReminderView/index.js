import Page from 'src/components/Page';
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import phoneCallOutline from '@iconify-icons/eva/phone-call-outline';
import NotiBoard from './NotiBoard';
import TableDetail from './TableDetail';
import DrawerDownload from './DrawerDownload';
import { useParams } from 'react-router';
import ecomService from 'src/services/ecomService';
import Logo from 'src/components/Logo';
import { fPhoneNumber } from 'src/utils/formatNumber';
import { useTheme } from '@mui/material/styles';
import CashbookDebtReminderView from '../CashBookDebtReminderView';
import StringHandler from 'src/utils/stringHandler';

function DebtReminderView() {
  const theme = useTheme();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const type = StringHandler.getParamFromUrl('env');

  useEffect(() => {
    getDebtReminder();
  }, []);

  async function getDebtReminder() {
    const response = await ecomService.debtReminder({ contact_key: id });
    if (response.status === 200) {
      setData(response.data);
    }
  }

  if (type && type === 'stc') {
    return <CashbookDebtReminderView />;
  }

  return (
    <Page title="Nhắc nợ | SoBanHang" sx={{ paddingBottom: '40px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '66px',
          width: '100%',
          padding: '14px 16px',
          color: theme.color.white,
          backgroundImage: `linear-gradient(89.98deg, #00994C 0.02%, #005249 99.98%)`,
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: 1000
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 'bold' }}>
            {data?.business_name || ''}
          </Typography>
          <Phone href={`tel:+${fPhoneNumber(data?.user_info?.phone_number)}`}>
            <Box display="flex" alignItems="center">
              <Icon icon={phoneCallOutline} width="18px" />
              <Typography
                component="span"
                sx={{ marginLeft: '10px', marginBottom: '2px' }}
              >
                {fPhoneNumber(data?.user_info?.phone_number)}
              </Typography>
            </Box>
          </Phone>
        </Box>
        <Logo
          sx={{
            [theme.breakpoints.down('sm')]: {
              height: '70%'
            }
          }}
          full
          isWhite
        />
      </Box>
      <Container sx={{ marginTop: '90px', padding: '0px 12px' }}>
        <NotiBoard data={data} />
        <TableDetail data={data} />
        <DrawerDownload open={open} setOpen={setOpen} />
      </Container>
    </Page>
  );
}

const Phone = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.color.white
}));

export default DebtReminderView;
