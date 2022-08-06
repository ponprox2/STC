import React from 'react';
import Page from 'src/components/Page';
import { PATH_APP } from 'src/routes/paths';
import CopyClipboard from 'src/components/CopyClipboard';
import { HeaderDashboard } from 'src/layouts/Common';
import { styled } from '@material-ui/core/styles';
import { Card, Container, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

function CopyToClipboardView() {
  const classes = useStyles();

  return (
    <Page title="Copy To Clipboard-Components | Finan" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Copy To Clipboard"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Copy To Clipboard' }
          ]}
          moreLink="https://www.npmjs.com/package/react-copy-to-clipboard"
        />

        <Card>
          <CardContent>
            <CopyClipboard value="https://www.npmjs.com/package/react-copy-to-clipboard" />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default CopyToClipboardView;
