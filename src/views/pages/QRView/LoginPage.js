import { Box, Typography, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Dot from 'src/assets/Images/dot';
import QrCode from 'src/assets/Images/qrCodeScan';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import Reload from 'src/assets/Images/reload';
import { useNavigate } from 'react-router-dom';
import loginQRService from '../CashBookHomeView/services/loginQRService';
import { getOperatingSystem, getDeviceName } from './getDeviceUSer';
import './LoginPage.css';
import { set } from 'lodash';
import { PATH_PAGE } from 'src/routes/paths';
import { COLORS } from 'src/constants';
import DrawerDownload from '../CashBookDebtReminderView/DrawerDownload';
import useBreakpoints from 'src/hooks/useBreakpoints';

function LoginPage() {
  const [buttonType, setButtonType] = useState(true);
  const [resultQR, setResultQR] = useState({});
  const [resultQRError, setResultQRError] = useState({});
  const [QRCodeImg, setQRCodeImg] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [linkCode, setLinkCode] = useState('');
  const isMobile = useBreakpoints('down', 'sm');
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const BoxContent = styled(Box)({});
  const ButtonOpenApp = styled(Button)({});
  const TypographyLogin = styled(Typography)({
    fontFamily: 'BeVietnamMedium',
    fontStyle: 'normal',

    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: '15px'
  });
  const TypographyContent = styled(Typography)({
    fontFamily: 'BeVietnamRegular',
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '16px',
    color: '#637381',
    marginBottom: '22px'
  });
  const ButtonIntrucstion = styled(Button)({
    color: 'rgb(24, 144, 255)'
  });
  const TypographyAllIntrucstion = styled(Typography)({
    fontFamily: 'BeVietnamRegular',
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '16px',
    color: '#637381',
    marginLeft: '16px'
  });
  const AvatarUSer = styled(Avatar)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '70px',
    height: '70px'
  });
  const BoxReloadQR = styled(Box)({
    width: '200px',
    height: '200px',
    marginBottom: '8px',
    zIndex: '2',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'rgba(22, 28, 36, 0.72)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });
  const ButtonReloadQR = styled(Button)({
    color: 'white',
    display: 'block',

    textAlign: 'center',
    height: '100%',
    width: '100%'
  });
  const BoxOpenApp = styled(Button)({
    backgroundColor: COLORS.orange,
    display: 'block',
    height: '50px',
    width: '70%',
    marginBottom: '15px',
    '&:hover': {
      backgroundColor: COLORS.orange
    }
  });

  const TypographyText = styled(Typography)({
    fontFamily: 'BeVietnamRegular',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '17px',
    lineHeight: '20px',
    color: COLORS.white,
    textAlign: 'center'
  });

  function Intrucstion({ setOpen }) {
    return (
      <Box style={{ marginTop: '15px' }}>
        <Box style={{ display: 'flex' }}>
          <Dot style={{ marginTop: '5px' }} />
          <TypographyAllIntrucstion>
            B?????c 1: ????ng nh???p ???ng d???ng S??? B??n H??ng tr??n ??i???n tho???i.
          </TypographyAllIntrucstion>
        </Box>
        <Box
          style={{
            minHeight: '24px',
            borderLeft: '1px solid rgba(145, 158, 171, 0.24)',
            marginLeft: '5px'
          }}
        />
        <Box style={{ display: 'flex' }}>
          <Dot style={{ marginTop: '5px' }} />
          <TypographyAllIntrucstion>
            B?????c 2: T???i??????ng???d???ng???ch???n bi???u t?????ng{' '}
            <QrCode style={{ margin: '0 5px' }} /> ??? thanh ti??u ?????.
          </TypographyAllIntrucstion>
        </Box>
        <Box
          style={{
            minHeight: '24px',
            borderLeft: '1px solid rgba(145, 158, 171, 0.24)',
            marginLeft: '5px'
          }}
        />
        <Box style={{ display: 'flex' }}>
          <Dot style={{ marginTop: '5px' }} />
          <TypographyAllIntrucstion>
            B?????c 3: Di chuy???n m??y ???nh ?????n m?? QR tr??n m??n h??nh m??y t??nh v?? scan.
          </TypographyAllIntrucstion>
        </Box>
        <Box style={{ textAlign: 'center' }}>
          <ButtonIntrucstion
            onClick={() => {
              setButtonType(true);
              setOpen(true);
            }}
          >
            Thu g???n
          </ButtonIntrucstion>
        </Box>
      </Box>
    );
  }

  const handleClick = () => {
    setOpen(false);
    setButtonType(false);
  };
  useEffect(() => {
    const data = { device_id: uuidv4() };

    async function QR() {
      const res = await loginQRService.loginQR(data);
      if (res.status === 200) {
        setLinkCode(res.data.data.link);
        QRCode.toDataURL(res.data.data.link).then((url) => {
          setQRCodeImg(url);
        });
        const dataQRInfo = { code: res.data.data.code };

        const response = await loginQRService.loginQRInfo(dataQRInfo);

        if (response.status === 200) {
          const dataConfirmation = {
            app_version: '1.1.1',
            ...dataQRInfo,
            ...data,
            device_name: getDeviceName(),
            location: '10.800665,106.7066339',
            operating_system: getOperatingSystem(),
            platform_key: 'pro_web'
          };
          setResultQR(response.data);
          const responseComfirmation = await loginQRService.loginQRConfirmation(
            dataConfirmation
          );
          if (responseComfirmation.status === 200) {
            localStorage.setItem(
              'BUSINESS',
              responseComfirmation.data.data.business_info.current_business.id
            );
            localStorage.setItem('TOKEN', responseComfirmation.data.data.token);
            localStorage.setItem(
              'REFRESHTOKEN',
              responseComfirmation.data.data.refresh_token
            );
            navigate(PATH_PAGE.cashBookHomePage);
          } else {
            setResultQRError(responseComfirmation);
          }
        } else {
          setResultQRError(response);
        }
      }
    }

    QR();
  }, [isSuccess]);
  const handleClickUuid = () => {
    setResultQR({});
    setResultQRError({});

    if (isSuccess) {
      setIsSuccess(!isSuccess);
    } else {
      setIsSuccess(!isSuccess);
    }
  };
  const handleOpenAppLogin = () => {
    const linkOpenAppLogin = `me.finan.app://screen=QRCode&code=${
      linkCode.split(':')[3]
    }`;
    window.location = linkOpenAppLogin;
  };
  return (
    <>
      <Box
        sx={
          isMobile
            ? open
              ? {
                  position: 'absolute',
                  top: '3%',
                  height: '100vh',
                  padding: '0px 5px'
                }
              : // Check drawer download
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  padding: '0px 5px'
                }
            : // Check mobile
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '0px 5px'
              }
        }
      >
        <BoxContent>
          <TypographyLogin>????ng nh???p</TypographyLogin>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <BoxOpenApp
              onClick={handleOpenAppLogin}
              style={{ textAlign: 'center' }}
            >
              {' '}
              <TypographyText>M??? App ????? ????ng nh???p</TypographyText>
            </BoxOpenApp>
          </Box>
          <TypographyContent
            sx={{ textAlign: 'center', color: COLORS.green, fontSize: '16px' }}
          >
            Ho???c
          </TypographyContent>
          <TypographyContent>
            D??ng ???ng d???ng S??? B??n H??ng ????? qu??t m?? QR v?? ????ng nh???p
          </TypographyContent>
          <Box
            style={{
              textAlign: 'center',
              position: 'relative',
              minHeight: '200px'
            }}
          >
            <img
              style={{
                width: '200px',
                height: '200px',
                marginBottom: '8px',
                zIndex: '1',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
              src={QRCodeImg}
            />

            {/* <AvatarUSer src="https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg" /> */}
            {resultQRError?.response && (
              <BoxReloadQR>
                <ButtonReloadQR onClick={handleClickUuid}>
                  <Reload />
                  <Typography style={{ display: 'block' }}>
                    B???m ????? t???i l???i m?? QR
                  </Typography>
                </ButtonReloadQR>
              </BoxReloadQR>
            )}
          </Box>

          {resultQR?.data && (
            <Box textAlign="center">
              <Typography
                style={{
                  display: 'block',
                  fontFamily: 'BeVietnamSemiBold',
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#212B36'
                }}
              >
                {resultQR?.data?.full_name}
              </Typography>
              <Typography
                style={{
                  display: 'block',
                  fontFamily: 'BeVietnamSemiBold',
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#229A16',
                  marginTop: '10px'
                }}
              >
                Vui l??ng nh???n ??? ????ng nh???p" tr??n thi???t b??? ??i???n tho???i c???a b???n.
              </Typography>
            </Box>
          )}

          {(buttonType && (
            <Box style={{ textAlign: 'center' }}>
              <ButtonIntrucstion onClick={handleClick}>
                H?????ng d???n qu??t m?? QR
              </ButtonIntrucstion>
            </Box>
          )) || <Intrucstion setOpen={setOpen} />}

          <DrawerDownload open={open} setOpen={setOpen} />
          <Box
            style={{
              textAlign: 'center',
              fontFamily: 'BeVietnamRegular',
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '22px',
              color: '#FF4842'
            }}
          >
            {resultQRError?.response?.data?.error?.detail}
          </Box>
        </BoxContent>
      </Box>
    </>
  );
}

export default LoginPage;
