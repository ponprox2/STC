import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Box, TextField, Typography } from '@mui/material';
import { padding } from '@mui/system';
import CloseCircle from 'src/assets/Images/closeCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Calculator from './Calculator';
import { useLocation } from 'react-router';
import { COLORS } from 'src/constants';

const ValidationTextField = styled(TextField)({
  height: '50px',
  width: '100%',
  position: 'relative',
  max: '10',
  // borderRadius: '8px',
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#00AD4F !important'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00AD4F !important'
  },
  '& .css-z55xvs-MuiInputBase-root-MuiInput-root': {
    color: COLORS.darkGrey,
    fontSize: '18px',
    display: 'block'
  },
  '& .MuiInputBase-input': {
    borderBottom: `1px solid ${COLORS.darkGrey}`
  },
  '& .Mui-focused .MuiInputBase-input': {
    color: '#545454',
    borderBottom: '1px solid #00AD4F',
    fontWeight: '700',
    fontSize: '18px'
  }
});

const TypographyReport = styled(Typography)({
  fontFamily: 'SFProTextRegular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: COLORS.darkLighter,
  marginTop: '10px'
});

const InputContent = styled(Box)({
  width: '45%'
});

function InputNumber({ openCalculator, setOpenCalculator, hide, setHide }) {
  const location = useLocation();
  const data = location.state.data;

  const inputMoneyRef = useRef();
  const costMoneyRef = useRef();

  const [isTarget, setIsTarget] = useState(false);
  const [input, setInput] = useState(`${data.amount}`);
  const [cost, setCost] = useState('');
  const [currentFocus, setCurrentFocus] = useState('');
  const [input1, setInput1] = useState(`${data.amount}`);
  const [cost1, setCost1] = useState('0');

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  const handleCloseInput = () => {
    setInput('');
    setInput1('');
    setIsTarget(true);
    inputMoneyRef.current.focus();
  };
  const handleCloseCost = () => {
    setCost('');
    setIsTarget(true);
    costMoneyRef.current.focus();
  };

  const handleClickInput = (type) => {
    setCurrentFocus(type);

    setOpenCalculator(true);
    setIsTarget(true);
  };

  return (
    <Box
      className="flex-evenly-center"
      style={{
        backgroundColor: COLORS.white,
        height: '108px'
      }}
    >
      <InputContent>
        <ValidationTextField
          label="Nhập số tiền"
          id="standard-start-adornment"
          placeholder="0"
          // .replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          value={`${input}`}
          inputRef={inputMoneyRef}
          onClick={() => handleClickInput('money')}
          onChange={handleChangeInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {' '}
                {input !== '' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: 0,
                      bottom: 2,
                      backgroundColor: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    <CloseCircle onClick={handleCloseInput} />
                  </Box>
                )}
              </InputAdornment>
            ),
            inputProps: { min: 0, maxLength: 15 }
          }}
          variant="standard"
        />

        {input1 ? (
          <TypographyReport>{input1}</TypographyReport>
        ) : (
          <TypographyReport>0</TypographyReport>
        )}
      </InputContent>
      <InputContent>
        <ValidationTextField
          label="Giá vốn"
          id="standard"
          value={cost.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          placeholder="0"
          inputRef={costMoneyRef}
          onClick={() => handleClickInput('cost')}
          onChange={handleChangeCost}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {' '}
                {cost !== '' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: 0,
                      bottom: 2,
                      backgroundColor: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    <CloseCircle onClick={handleCloseCost} />
                  </Box>
                )}
              </InputAdornment>
            ),
            inputProps: { min: 0, maxLength: 15 }
          }}
          variant="standard"
        />

        <TypographyReport sx={{ textAlign: 'right' }}>{cost1}</TypographyReport>
      </InputContent>
      <Calculator
        openCalculator={openCalculator}
        setOpen={setOpenCalculator}
        setTarget={setIsTarget}
        target={isTarget}
        inputMoneyRef={inputMoneyRef}
        costMoneyRef={costMoneyRef}
        input={input}
        setInput={setInput}
        cost={cost}
        setCost={setCost}
        currentFocus={currentFocus}
        input1={input1}
        setInput1={setInput1}
        cost1={cost1}
        setCost1={setCost1}
        // cost1={cost1}
        hide={hide}
        setHide={setHide}
      />
    </Box>
  );
}

export default InputNumber;
