import React from 'react';
import { Grid } from '@mui/material';
import Block from 'src/components/Block';
import { MCircularProgress } from 'src/theme';

// ----------------------------------------------------------------------

function Circular({ progress }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <Block title="Circular Indeterminate">
          <MCircularProgress color="inherit" />
          <MCircularProgress />
          <MCircularProgress color="info" />
          <MCircularProgress color="success" />
          <MCircularProgress color="warning" />
          <MCircularProgress color="error" />
        </Block>
      </Grid>

      <Grid item xs={12} md={4}>
        <Block title="Circular determinate">
          <MCircularProgress color="info" />
          <MCircularProgress color="info" variant="determinate" value={25} />
          <MCircularProgress color="info" variant="determinate" value={50} />
          <MCircularProgress color="info" variant="determinate" value={75} />
          <MCircularProgress color="info" variant="determinate" value={100} />
          <MCircularProgress
            color="info"
            variant="determinate"
            value={progress}
          />
        </Block>
      </Grid>

      <Grid item xs={12} md={4}>
        <Block title="Circular Size">
          <MCircularProgress size={48} color="info" />
          <MCircularProgress color="info" />
          <MCircularProgress size={32} color="info" />
          <MCircularProgress size={24} color="info" />
        </Block>
      </Grid>
    </Grid>
  );
}

export default Circular;
