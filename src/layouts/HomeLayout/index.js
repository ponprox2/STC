import React, { useEffect } from 'react';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from 'src/routes/paths';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: { height: '100%' },
  content: { height: '100%' }
}));

// ----------------------------------------------------------------------

HomeLayout.propTypes = {
  children: PropTypes.node
};

function HomeLayout({ children }) {
  const classes = useStyles();

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
   
    if (!token) {
      navigate(PATH_PAGE.QRCodeScreen);
    }
  },[]);
  return (
    <div className={classes.root}>
      {/* <TopBar /> */}
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default HomeLayout;
