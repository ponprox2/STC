import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Img from 'src/assets/Images/img';
import { color, display } from '@mui/system';
import BackSpace from 'src/assets/Images/blackBack';
import useBreakpoints from 'src/hooks/useBreakpoints';
import { ClickAwayListener } from '@mui/material';
import { sign } from 'jsonwebtoken';
import { COLORS } from 'src/constants';

const ButtonCal = styled(Button)({
  backgroundColor: COLORS.green,
  color: COLORS.white,
  width: '269px',
  height: '48px',
  borderRadius: '8px',
  flex: 'none',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#00A84D'
  }
});
const BoxImg = styled(Box)({
  width: '62px',
  height: '48px',
  backgroundColor: COLORS.white,
  borderRadius: '6px',
  border: '1px solid #00A84D',
  cursor: 'pointer'
});

const BoxButton = styled(Box)({
  height: '72px',
  width: '100%',
  backgroundColor: COLORS.white,
  boxShadow: '0px -2px 4px rgba(46, 46, 46, 0.04)',
  gap: '12px'
});

const BoxNumber = styled(Box)({
  width: '100%',
  height: '260px',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
});

const ButtonIcon = styled(Button)({
  width: '23%',
  height: '44px',
  backgroundColor: '#E5E5E5',
  fontSize: '20px',
  fontWeight: '400',
  textAlign: 'center',
  lineHeight: '23px',
  color: COLORS.primaryDark,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#E5E5E5'
  }
});

const ButtonChar = styled(Button)({
  width: '24%',
  height: '44px',
  backgroundColor: '#1877F2',
  fontSize: '20px',
  fontWeight: '400',
  textAlign: 'center',
  lineHeight: '23px',
  color: COLORS.white,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#1877F2'
  }
});

function Calculator({
  openCalculator,
  setOpen,
  setTarget,
  target,
  inputMoneyRef,
  costMoneyRef,
  input,
  setInput,
  cost,
  setCost,
  currentFocus,
  setInput1,
  input1,
  setCost1,
  cost1,
  hide,
  setHide
}) {
  const [totalInput, setTotalInput] = useState('');
  const handleClickAway = () => {
    setTarget(false);
    if (target === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const isMobile = useBreakpoints('down', 'sm');

  const arr = [
    { value: 'C', color: 'grey', cal: 'deleteAll', symbol: 'C' },
    { value: '/', color: 'grey', cal: 'calculate', symbol: '÷' },
    { value: '*', color: 'grey', cal: 'calculate', symbol: 'X' },
    {
      value: <BackSpace />,
      color: 'grey',
      cal: 'delete',
      symbol: <BackSpace />
    },
    { value: 1, color: 'white', cal: 'calculate', symbol: 1 },
    { value: 2, color: 'white', cal: 'calculate', symbol: 2 },
    { value: 3, color: 'white', cal: 'calculate', symbol: 3 },
    { value: '+', color: 'grey', cal: 'calculate', symbol: '+' },
    { value: 4, color: 'white', cal: 'calculate', symbol: 4 },
    { value: 5, color: 'white', cal: 'calculate', symbol: 5 },
    { value: 6, color: 'white', cal: 'calculate', symbol: 6 },
    { value: '-', color: 'grey', cal: 'calculate', symbol: '-' },
    { value: 7, color: 'white', cal: 'calculate', symbol: 7 },
    { value: 8, color: 'white', cal: 'calculate', symbol: 8 },
    { value: 9, color: 'white', cal: 'calculate', symbol: 9 },
    { value: '=', color: 'grey', cal: 'close', symbol: '=' },
    { value: 0, color: 'white', cal: 'calculate', symbol: 0 },
    { value: '00', color: 'white', cal: 'calculate', symbol: '00' },
    { value: '000', color: 'white', cal: 'calculate', symbol: '000' }
  ];
  const desktopStyleButton = {
    height: '72px',
    maxWidth: '375px',
    backgroundColor: COLORS.white,
    boxShadow: '0px -2px 4px rgba(46, 46, 46, 0.04)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '12px 16px',
    gap: '12px'
  };

  const color = {
    backgroundColor: COLORS.white,
    '&.MuiButtonBase-root.MuiButton-root:hover': {
      backgroundColor: ' !important'
    }
  };

  const desktopStyleNumber = {
    width: '375px',
    height: '276px',
    backgroundColor: '#F5F5F5'
  };

  const handleDelete = () => {
    if (input) {
      setInput('');
      inputMoneyRef.current.focus();
    } else if (cost) {
      setCost('');
      costMoneyRef.current.focus();
    }
  };
  const handleClick = (value) => {
    if (currentFocus === 'money') {
      if (value.cal === 'delete') {
        input1 = input1.substring(0, input1.length - 1);
        const ArrInput1String = `${input1}`.split('')[input1.length - 1];

        if (input1 === '') {
          setInput(0);
          setInput1('');
        } else if (
          ArrInput1String === '+' ||
          ArrInput1String === '*' ||
          ArrInput1String === '/' ||
          ArrInput1String === '-'
        ) {
          setInput(eval(input1.substring(0, input1.length - 1)));
          setInput1(input1);
        } else {
          setInput1(input1);
          setInput(eval(input1));
        }
      } else if (value.cal === 'calculate') {
        if (
          input1 === '' &&
          (value.value === '+' ||
            value.value === '*' ||
            value.value === '/' ||
            value.value === '-')
        ) {
        } else {
          const ArrInputString = `${input1}`.split('')[input1.length - 1];

          if (
            typeof value.value === 'string' &&
            (ArrInputString === '+' ||
              ArrInputString === '*' ||
              ArrInputString === '/' ||
              ArrInputString === '-')
          ) {
          } else {
            input1 += value.value;
            setInput1(input1);
            if (typeof value.value === 'number') {
              setInput(eval(input1));
            }
          }
        }
      } else if (value.cal === 'deleteAll') {
        setInput1('');
        setInput('');
      } else {
        setOpen(false);
      }

      inputMoneyRef.current.focus();
    } else {
      cost += value.value;
      setCost(cost);
      setCost1(input - cost);
      costMoneyRef.current.focus();
    }
  };

  return (
    <ClickAwayListener target={target} onClickAway={handleClickAway}>
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '1000000000'
        }}
      >
        {hide && (
          <BoxButton className='flex-center-center-row' sx={isMobile ? {} : desktopStyleButton}>
            <BoxImg className="flex-center">
              <Img />
            </BoxImg>
            <ButtonCal>Tạo</ButtonCal>
          </BoxButton>
        )}

        {openCalculator && (
          <BoxNumber sx={isMobile ? {} : desktopStyleNumber}>
            {arr.map((value) => (
              <ButtonIcon
                sx={value.color === 'white' ? color : {}}
                onClick={() => handleClick(value)}
              >
                {value.symbol}
              </ButtonIcon>
            ))}
            <ButtonChar onClick={() => setOpen(false)}>OK</ButtonChar>
          </BoxNumber>
        )}
      </Box>
    </ClickAwayListener>
  );
}

export default Calculator;
