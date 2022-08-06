import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
const useStyles = styled((theme) => ({
  root: {}
}));

function CheckBox({
  label,
  name,
  className,
  disabled = false,
  formik,
  ...props
}) {
  const { values, getFieldProps } = formik;
  const classes = useStyles();

  return (
    <FormControlLabel
      className={clsx(classes.root, className)}
      control={<Checkbox {...getFieldProps(name)} checked={values[name]} />}
      label={label}
      disabled={disabled}
      {...props}
    />
  );
}

CheckBox.propTypes = {
  formik: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool
};

export default CheckBox;
