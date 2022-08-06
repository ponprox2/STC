import React from 'react';
import PropTypes from 'prop-types';

LandingPageLayout.propTypes = {
  children: PropTypes.node
};

function LandingPageLayout({ children }) {
  return (
    <div style={{ height: '100%' }}>
      <div style={{ height: '100%' }}>{children}</div>
    </div>
  );
}

export default LandingPageLayout;
