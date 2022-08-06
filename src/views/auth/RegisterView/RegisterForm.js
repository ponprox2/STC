import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Form, FormikProvider } from 'formik';
import eyeFill from '@iconify-icons/eva/eye-fill';
import eyeOffFill from '@iconify-icons/eva/eye-off-fill';
import { emailError, passwordError } from 'src/utils/helpError';
import {
  Box,
  Grid,
  TextField,
  IconButton,
  InputAdornment
} from '@mui/material';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

RegisterForm.propTypes = {
  formik: PropTypes.object.isRequired
};

function RegisterForm({ formik }) {
  const [showPassword, setShowPassword] = useState(false);
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Full name"
              {...getFieldProps('fullName')}
              error={Boolean(touched.fullName && errors.fullName)}
              helperText={touched.fullName && errors.fullName}
              inputProps={{
                form: {
                  autoComplete: 'off'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone number"
              {...getFieldProps('phone_number')}
              error={Boolean(touched.phone_number && errors.phone_number)}
              helperText={touched.phone_number && errors.phone_number}
              inputProps={{
                form: {
                  autoComplete: 'off'
                }
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mb: 3 }} />
        <TextField
          fullWidth
          name="email"
          type="email"
          label="Email address"
          {...getFieldProps('email')}
          error={
            Boolean(touched.email && errors.email) ||
            emailError(errors.afterSubmit).error
          }
          helperText={
            (touched.email && errors.email) ||
            emailError(errors.afterSubmit).helperText
          }
          inputProps={{
            form: {
              autoComplete: 'off'
            }
          }}
        />
        <Box sx={{ mb: 3 }} />
        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="Password"
          {...getFieldProps('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                </IconButton>
              </InputAdornment>
            )
          }}
          error={
            Boolean(touched.password && errors.password) ||
            passwordError(errors.afterSubmit).error
          }
          helperText={
            (touched.password && errors.password) ||
            passwordError(errors.afterSubmit).helperText
          }
        />
        <Box sx={{ mb: 3 }} />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          {...getFieldProps('confirmPassword')}
          error={
            Boolean(touched.confirmPassword && errors.confirmPassword) ||
            passwordError(errors.afterSubmit).error
          }
          helperText={
            (touched.confirmPassword && errors.confirmPassword) ||
            passwordError(errors.afterSubmit).helperText
          }
        />
        <Box sx={{ mt: 3 }}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            pending={isSubmitting}
          >
            Register
          </LoadingButton>
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default RegisterForm;
