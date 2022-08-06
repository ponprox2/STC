import React from 'react';
import PropTypes from 'prop-types';
import useAuth from 'src/hooks/useAuth';
import { MAvatar } from 'src/theme';
import createAvatar from 'src/utils/createAvatar';

// ----------------------------------------------------------------------

MyAvatar.propTypes = {
  className: PropTypes.string
};

function MyAvatar({ className, ...other }) {
  const { user } = useAuth();

  return (
    <MAvatar
      src={user?.photoURL || ''}
      alt={user?.full_name || 'avatar'}
      color={
        user?.photoURL ? 'default' : createAvatar(user?.full_name || 'F').color
      }
      className={className}
      {...other}
    >
      {createAvatar(user?.full_name || 'F').name}
    </MAvatar>
  );
}

export default MyAvatar;
