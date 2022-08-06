import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Box, Typography, styled } from '@mui/material';
import { useSnackbar } from 'notistack';
import StringHandler from 'src/utils/stringHandler';
import { getDateDiffSecond } from 'src/utils/DateUtils';

// ----------------------------------------------------------------------
const useStyles = styled((theme) => ({
  step2ContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px'
  },
  step2Title: {
    color: '#333333',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '16px'
  },
  step2Text: {
    fontSize: '15px',
    color: '#666666'
  },
  blueText: {
    color: theme.color.secondary
  },
  inputContainer: {
    display: 'flex'
  },
  textField: {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    border: '1px solid #BFBFBF',
    borderRadius: '5px',
    fontSize: '16px',
    '&:not(:last-of-type)': {
      marginRight: '20px'
    },
    '&:focus': {
      outline: 'none',
      border: '2px solid #00B45D'
    }
  },
  sendAgain: {
    color: theme.color.secondary,
    fontSize: '14px !important',
    display: 'block',
    '&:hover': {
      backgroundColor: 'rgba(111, 184, 212, 0.08)'
    }
  },
  resendOtp: {
    marginTop: '32px'
  },
  errorTextContainer: {
    marginTop: '16px',
    '& > *': {
      color: theme.color.red,
      fontSize: '15px'
    }
  },
  errorText: {
    fontSize: '15px',
    fontWeight: '500',
    color: theme.color.red
  },
  blockErrorContainer: {
    padding: '16px 32px',
    backgroundColor: '#e938001c',
    borderRadius: '6px',
    textAlign: 'center',
    marginBottom: '22px'
  },
  greyText: {
    color: '#999999'
  }
}));
// ----------------------------------------------------------------------

const ERROR_TEXT = {
  wrong: 'Mã xác thực không đúng. Vui lòng thử lại!',
  wrongs: 'Bạn đã nhập sai 4 lần. Còn 1 lần thử duy nhất',
  allWrongs: 'Bạn đã nhập sai OTP 5 lần liên tiếp.',
  allWrongsPlus: 'Tài khoản của bạn bị vô hiệu hóa, hãy thử lại sau '
};

const MAX_FAIL_TIMES = 5;

function ConfirmOTP({
  setStep,
  lockedDueToRetry,
  setLockedDueToRetry,
  OTPFails,
  setOTPFails,
  failTimes,
  setVerificationId,
  FIREBASE_ERRORS,
  formik
}) {
  const { values, setFieldValue, handleSubmit } = formik;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [otpDurationCounter, setOtpDurationCounter] = useState(null);
  const [otpBlockCounter, setOtpBlockCounter] = useState(null);
  const [errorText, setErrorText] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  useEffect(() => {
    generateRecaptcha();
    setOtpDurationCounter(getDateDiffSecond(Date.now() + 90000));
  }, []);

  useEffect(() => {
    if (!recaptchaVerifier) return;
    sendOTP();
    inputRef1.current.focus();
  }, [recaptchaVerifier]);

  useEffect(() => {
    if (input1 && input2 && input3 && input4 && input5 && input6) {
      if (failTimes === MAX_FAIL_TIMES) {
        setIsBlocked(true);
        return;
      }
      const code = input1 + input2 + input3 + input4 + input5 + input6;
      setFieldValue('code', code);
      handleSubmit();
    }
  }, [input1, input2, input3, input4, input5, input6]);

  useEffect(() => {
    if (input1 && !input2 && !input3 && !input4 && !input5 && !input6) {
      setErrorText('');
    }
  }, [input1]);

  useEffect(() => {
    if (otpDurationCounter) {
      let interval;
      if (
        otpDurationCounter < 1 ||
        failTimes === MAX_FAIL_TIMES ||
        OTPFails === 3
      ) {
        clearInterval(interval);
        setOtpDurationCounter(0);
      } else {
        interval = setInterval(() => {
          setOtpDurationCounter((counter) => counter - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }
  }, [otpDurationCounter]);

  useEffect(() => {
    if (otpBlockCounter) {
      let interval;
      if (otpBlockCounter < 1) {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setOtpBlockCounter((counter) => counter - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }
  }, [otpBlockCounter]);

  useEffect(() => {
    if (failTimes === MAX_FAIL_TIMES) {
      setErrorText(ERROR_TEXT.allWrongs);
      setOtpDurationCounter(0);
      setIsBlocked(true);
      handleSubmit();
    }
  }, [failTimes]);

  function generateRecaptcha() {
    const provider = new firebase.auth.PhoneAuthProvider();
    const captcha = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible'
    });
    setRecaptchaVerifier(captcha);
  }

  function sendOTP() {
    try {
      firebase
        .auth()
        .signInWithPhoneNumber(`+84${values.phone_number}`, recaptchaVerifier)
        .then((confirmResult) => {
          setVerificationId(confirmResult?.verificationId);
        })
        .catch((error) => {
          console.log(error);
          const errorType = FIREBASE_ERRORS.find((e) => e.label === error.code);
          enqueueSnackbar(
            StringHandler.capitalizeFirstLetter(
              errorType?.message || 'Có lỗi xảy ra'
            ),
            {
              variant: 'error'
            }
          );
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleFocus = (event) => event.target.select();

  const handleChange = (value, type) => {
    const reg = /^\d+$/;
    const valid = reg.test(value);
    if (valid || value === '') {
      switch (type) {
        case 'input1':
          setInput1(value.substr(0, 1));
          if (value) {
            inputRef2.current.focus();
          }
          break;
        case 'input2':
          setInput2(value.substr(0, 1));
          if (value === '') {
            if (input3 === '') {
              inputRef1.current.focus();
            }
          } else {
            inputRef3.current.focus();
          }
          break;
        case 'input3':
          setInput3(value.substr(0, 1));
          if (value === '') {
            if (input4 === '') {
              inputRef2.current.focus();
            }
          } else {
            inputRef4.current.focus();
          }
          break;
        case 'input4':
          setInput4(value.substr(0, 1));
          if (value === '') {
            if (input5 === '') {
              inputRef3.current.focus();
            }
          } else {
            inputRef5.current.focus();
          }
          break;
        case 'input5':
          setInput5(value.substr(0, 1));
          if (value === '') {
            if (input6 === '') {
              inputRef4.current.focus();
            }
          } else {
            inputRef6.current.focus();
          }
          break;
        case 'input6':
          setInput6(value.substr(0, 1));
          if (value === '') {
            inputRef5.current.focus();
          }
          break;
        default:
          break;
      }
    }
  };

  const handleResendOTP = () => {
    sendOTP();
    setOtpDurationCounter(getDateDiffSecond(Date.now() + 90000));
    setOTPFails(0);
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    setInput5('');
    setInput6('');
    inputRef1.current.focus();
  };

  const handleBackToEnterPhone = () => {
    setStep(1);
    setErrorText('');
    setLockedDueToRetry(false);
    setOTPFails(0);
  };

  return (
    <Box>
      {lockedDueToRetry && (
        <Box className={classes.blockErrorContainer}>
          <Typography className={classes.errorText}>
            {`Bạn đã yêu cầu gửi lại mã xác thực 5 lần, bạn chỉ được gửi yêu
                cầu lại sau: ${parseInt(otpBlockCounter / 60)} phút ${
              otpBlockCounter % 60
            } giây`}
          </Typography>
        </Box>
      )}
      <Box className={classes.step2ContentContainer}>
        <Typography className={classes.step2Title}>Xác nhận OTP</Typography>
        <Typography className={classes.step2Text}>
          Mã xác thực được gửi đến{' '}
          {StringHandler.showEcomPhoneNumber(values.phone_number)}
        </Typography>
        <Typography className={classes.step2Text}>
          {`Và sẽ hết hiệu lực trong `}
          <Typography
            className={classes.blueText}
            component="span"
            id="counter"
          >
            {otpDurationCounter || 0}s
          </Typography>
        </Typography>
      </Box>
      <Box className={classes.inputContainer}>
        <input
          className={classes.textField}
          ref={inputRef1}
          autoFocus
          onChange={(e) => handleChange(e.target.value, 'input1')}
          value={input1}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
        <input
          className={classes.textField}
          ref={inputRef2}
          onChange={(e) => handleChange(e.target.value, 'input2')}
          value={input2}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
        <input
          className={classes.textField}
          ref={inputRef3}
          onChange={(e) => handleChange(e.target.value, 'input3')}
          value={input3}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
        <input
          className={classes.textField}
          ref={inputRef4}
          onChange={(e) => handleChange(e.target.value, 'input4')}
          value={input4}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
        <input
          className={classes.textField}
          ref={inputRef5}
          onChange={(e) => handleChange(e.target.value, 'input5')}
          value={input5}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
        <input
          className={classes.textField}
          ref={inputRef6}
          onChange={(e) => handleChange(e.target.value, 'input6')}
          value={input6}
          onFocus={handleFocus}
          type="number"
          disabled={
            OTPFails === 3 ||
            isBlocked ||
            lockedDueToRetry ||
            otpDurationCounter === 0
          }
        />
      </Box>
      <Box className={classes.errorTextContainer}>
        <Typography>{errorText}</Typography>
        {errorText && (
          <Typography>{`${ERROR_TEXT.allWrongsPlus}${parseInt(
            otpBlockCounter / 60
          )} phút ${otpBlockCounter % 60} giây`}</Typography>
        )}
      </Box>
      <Box>
        <Button
          id="sign-in-button"
          className={`${classes.sendAgain} ${classes.resendOtp}`}
          onClick={() => handleResendOTP()}
          disabled={isBlocked || parseInt(otpDurationCounter) > 75}
        >
          Gửi lại mã xác thực
        </Button>
        <Button
          className={classes.sendAgain}
          onClick={() => handleBackToEnterPhone()}
        >
          Nhập lại số điện thoại
        </Button>
      </Box>
    </Box>
  );
}

export default ConfirmOTP;
