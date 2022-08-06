import React from 'react';
import ChipFilled from './ChipFilled';
import Page from 'src/components/Page';
import ChipOutlined from './ChipOutlined';
import { PATH_APP } from 'src/routes/paths';
import { HeaderDashboard } from 'src/layouts/Common';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Card,
  Container,
  CardHeader,
  CardContent
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

function ChipsView() {
  const classes = useStyles();

  return (
    <Page title="Chip-Components | Finan" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Chip"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Chip' }
          ]}
          moreLink="https://next.material-ui.com/components/chips"
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Filled" />
              <CardContent>
                <ChipFilled />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Outlined" />
              <CardContent>
                <ChipOutlined />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default ChipsView;
