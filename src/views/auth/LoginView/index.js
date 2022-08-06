import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import firebase from 'firebase/app';
import 'firebase/auth';
import Section from './Section';
import { useFormik } from 'formik';
import LoginForm from './LoginForm';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import { PATH_HOME } from 'src/routes/paths';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { styled } from '@mui/material/styles';
import { Hidden, Container } from '@mui/material';
import StringHandler from 'src/utils/stringHandler';
import ConfirmOTP from './ConfirmOTP';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { getBalancesSuccess } from 'src/redux/slices/balance';

// ----------------------------------------------------------------------

const useStyles = styled((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  header: {
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7)
    }
  },
  content: {
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  }
}));

// ----------------------------------------------------------------------

const FIREBASE_ERRORS = [
  {
    label: 'auth/too-many-requests',
    message:
      'Bạn đã gửi yêu cầu quá nhiều từ số điện thoại này. Vui lòng thử lại sau'
  },
  {
    label: 'auth/invalid-verification-code',
    message: 'Mã xác thực không đúng. Vui lòng thử lại'
  },
  {
    label: 'auth/code-expired',
    message:
      'Bạn đã nhập mã xác thực quá số lần cho phép. Vui lòng gửi lại mã xác thực'
  }
];

function LoginView() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const [verificationId, setVerificationId] = useState(null);
  const [step, setStep] = useState(1);
  const [OTPFails, setOTPFails] = useState(0);
  const [failTimes, setFailTimes] = useState(0);
  const [deviceId, setDeviceId] = useState('');

  const LoginSchema = Yup.object().shape({
    phone_number: Yup.string()
      .matches(/^[0-9]*$/g, 'Phone number must be only digits')
      .min(10, 'Phone number must larger than 10 digits')
      .max(15, 'Phone number must shorter than 15 digits')
      .required('Phone number required')
  });

  useEffect(() => {
    getDeviceId();
  }, []);

  async function getDeviceId() {
    // We recommend to call `load` at application startup.
    const fp = await FingerprintJS.load();

    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();

    // This is the visitor identifier:
    setDeviceId(result.visitorId);
  }

  const getCredential = async (code) => {
    try {
      const credential = await firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      return true;
    } catch (error) {
      console.log(error);
      setOTPFails(() => OTPFails + 1);
      let errorType = FIREBASE_ERRORS.find((e) => e.label === error?.code);
      if (OTPFails === 1) {
        errorType.message = 'Bạn đã nhập sai 2 lần. Còn 1 lần thử duy nhất';
      }
      if (OTPFails === 2) {
        errorType.message = 'Bạn đã hết lần thử. Vui lòng gửi lại mã xác thực';
        setFailTimes(() => failTimes + 1);
      }
      enqueueSnackbar(
        StringHandler.capitalizeFirstLetter(
          errorType?.message || 'Có lỗi xảy ra. Vui lòng thử lại sau'
        ),
        {
          variant: 'error'
        }
      );
      return false;
    }
  };

  const formik = useFormik({
    initialValues: {
      phone_number: '',
      remember_me: false,
      code: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        if (step === 2 && values.code) {
          const valid = await getCredential(values.code);
          if (valid) {
            const token = await firebase.auth().currentUser.getIdToken(true);
            const data = {
              phone_number: values.phone_number,
              token_firebase: token,
              platform: 'ecom_web',
              device_id: deviceId,
              remember_me: values.remember_me,
              otp: values.code
            };
            const response = await login(data);
            enqueueSnackbar(
              StringHandler.capitalizeFirstLetter(response.message),
              {
                variant: response.status ? 'success' : 'error'
              }
            );
            if (response.status) {
              dispatch(getBalancesSuccess(response.data.list_business));
              history.push(PATH_HOME.dashboard);
            }
          }
        }
      } catch (error) {
        console.error(error);
        resetForm();
        if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.code || error.message });
        }
      }
    }
  });

  return (
    <Page title="Login | Finan" className={classes.root}>
      <header className={classes.header}>
        <RouterLink to="/">
          <Logo full={true} />
        </RouterLink>
      </header>

      <Hidden mdDown>
        <Section />
      </Hidden>
      <Container maxWidth="sm">
        <div className={classes.content}>
          {step === 1 && <LoginForm setStep={setStep} formik={formik} />}
          {step === 2 && (
            <ConfirmOTP
              formik={formik}
              setStep={setStep}
              OTPFails={OTPFails}
              setOTPFails={setOTPFails}
              failTimes={failTimes}
              setVerificationId={setVerificationId}
              FIREBASE_ERRORS={FIREBASE_ERRORS}
            />
          )}
        </div>
      </Container>
    </Page>
  );
}

export default LoginView;
