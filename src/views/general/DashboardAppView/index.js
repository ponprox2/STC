import React from 'react';
import Welcome from './Welcome';
import NewInvoice from './NewInvoice';
import TopAuthors from './TopAuthors';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import TopInstalledCountries from './TopInstalledCountries';
import TopRelatedApplications from './TopRelatedApplications';
import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

function DashboardAppView() {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Page title="Dashboard App | Finan" className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Welcome displayName={user?.full_name || 'F'} />
          </Grid>

          <Grid item xs={12} lg={8}>
            <NewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TopRelatedApplications />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TopAuthors />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAppView;
