import React from 'react';
import Tasks from './Tasks';
import NewUsers from './NewUsers';
import ItemOrders from './ItemOrders';
import BugReports from './BugReports';
import NewsUpdate from './NewsUpdate';
import Page from 'src/components/Page';
import WeeklySales from './WeeklySales';
import OrderTimeline from './OrderTimeline';
import TrafficBySite from './TrafficBySite';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

function DashboardAnalyticsView() {
  const classes = useStyles();

  return (
    <Page title="Dashboard Analytics | Finan" className={classes.root}>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Tasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAnalyticsView;
