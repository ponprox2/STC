import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
const useStyles = styled((theme) => ({
  root: {}
}));

function Input({
  label,
  name,
  fullWidth = true,
  className,
  disabled = false,
  formik,
  ...props
}) {
  const { errors, touched, getFieldProps } = formik;
  const classes = useStyles();

  return (
    <TextField
      className={clsx(classes.root, className)}
      fullWidth={fullWidth}
      label={label}
      {...getFieldProps(name)}
      error={Boolean(touched.name && errors.name)}
      helperText={touched.name && errors.name}
      disabled={disabled}
      inputProps={{
        form: {
          autoComplete: 'off'
        }
      }}
      {...props}
    />
  );
}

Input.propTypes = {
  formik: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Input;
