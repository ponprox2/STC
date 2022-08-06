import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@material-ui/lab';
import Input from 'src/components/form/input';
import Checkbox from 'src/components/form/checkbox';
// ----------------------------------------------------------------------

function LoginForm({ setStep, formik }) {
  const handleClick = () => {
    setStep(2);
  };

  return (
    <>
      {/* <FormikProvider value={formik}>
       <Form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            Sign in to Finan.me
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Enter your phone number below.
          </Typography>
        </Box>
      </Box>
      <Input label="Phone number" name="phone_number" formik={formik} />
      <Checkbox label="Ghi nhớ tài khoản" name="remember_me" formik={formik} />
      <Box sx={{ mb: 3 }} />
      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
      {/* </Form>
    </FormikProvider> */}
    </>
  );
}

LoginForm.propTypes = {
  formik: PropTypes.object.isRequired,
  setStep: PropTypes.func,
  setPhone: PropTypes.func
};

export default LoginForm;
