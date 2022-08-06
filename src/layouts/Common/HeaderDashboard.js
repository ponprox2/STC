import clsx from 'clsx';
import React from 'react';
import { isString } from 'lodash';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import { MBreadcrumbs } from 'src/theme';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

HeaderDashboard.propTypes = {
  links: PropTypes.array,
  action: PropTypes.node,
  heading: PropTypes.string.isRequired,
  moreLink: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string
};

function HeaderDashboard({
  links,
  action,
  heading,
  moreLink = '' || [],
  className,
  ...other
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={clsx(classes.root, className)}
      sx={{ marginBottom: theme.spacing(5) }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <MBreadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {isString(moreLink) ? (
          <Link href={moreLink} target="_blank" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </div>
  );
}

export default HeaderDashboard;
