import React, { useState } from 'react';
import { Box, Input, InputAdornment, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseCircle from 'src/assets/Images/closeCircle';
import { styled } from '@mui/material/styles';
import Plus from 'src/assets/plus';
import { COLORS } from 'src/constants';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { display } from '@mui/system';
import useBreakpoints from 'src/hooks/useBreakpoints';
const TypographyReport = styled(Typography)({
  fontFamily: 'SFProText',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '19px',
  color: COLORS.orange,
  marginLeft: '14px'
});
const ImageChld = styled('img')({
  width: 'auto',
  maxHeight: '100%',
  objectFit: 'cover'
});
const SlideShow = styled(Slide)({
  maxHeight: '70%',
  overflow: 'hidden',
  '& .react-slideshow-wrapper .images-wrap': {
    alignItems: 'center'
  }
});

function DialogImage({ openDialogImage, setOpenDialogImage, image, index }) {
  const isMobile = useBreakpoints('down', 'sm');
  const properties = isMobile && {
    canSwipe: true,
    prevArrow: <div style={{ display: 'none' }}></div>,
    nextArrow: <div style={{ display: 'none' }}></div>
  };
  const handleClickAway = () => {
    setOpenDialogImage(false);
  };
  // console.log(image);
  return (
    <Box>
      <Dialog
        open={openDialogImage}
        onClose={handleClickAway}
        sx={{
          '& .MuiDialog-paper.MuiPaper-rounded': {
            borderRadius: '8px !important',
            backgroundColor: 'black',
            boxShadow: 'none',
            maxHeight: '90%',
            position: 'relative'
          }
        }}
      >
        {' '}
        <CloseCircle
          fill={COLORS.darkGrey}
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            position: 'absolute',
            right: 0,
            zIndex: '10'
          }}
          onClick={handleClickAway}
        />
        <SlideShow
          defaultIndex={index}
          transitionDuration={200}
          autoplay={false}
          canSwipe={false}
          {...properties}
        >
          {image.map((value) => (
            <>
              <ImageChld src={value} />
            </>
          ))}
        </SlideShow>
      </Dialog>
    </Box>
  );
}

export default DialogImage;
