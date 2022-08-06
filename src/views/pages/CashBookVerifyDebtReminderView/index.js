import Page from 'src/components/Page';
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, styled } from '@mui/material';
import { Icon } from '@iconify/react';
import phoneCallOutline from '@iconify-icons/eva/phone-call-outline';
import NotiBoard from './NotiBoard';
import DrawerDownload from './DrawerDownload';
import { useParams } from 'react-router';
import ecomService from 'src/services/ecomService';
import { fPhoneNumber } from 'src/utils/formatNumber';
import LogoCashBook from 'src/components/LogoCashBook';

function CashbookDebtReminderView() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDebtReminder();
  }, []);

  async function getDebtReminder() {
    const response = await ecomService.confirmTransaction({
      contact_transaction_key: id
    });
    if (response.status === 200 && response.data) {
      setData(response.data);
    }
  }

  return (
    <Page
      title="Nhắc nợ | SoThuChi"
      style={{
        paddingBottom: '40px'
      }}
    >
      <Header
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 'bold' }}>
            {data?.user_info?.full_name || ''}
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
        <LogoCashBook full isWhite />
      </Header>
      <Container sx={{ marginTop: '90px', padding: '0px 12px' }}>
        <NotiBoard data={data} />
        <DrawerDownload />
      </Container>
    </Page>
  );
}

const Header = styled(Box)(({ theme }) => ({
  height: '66px',
  width: '100%',
  padding: '14px 16px',
  color: theme.color.white,
  backgroundImage: `linear-gradient(89.98deg, #BC4D0B 100%, #005249 0%)`,
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: 1000
}));

const Phone = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.color.white
}));

export default CashbookDebtReminderView;
