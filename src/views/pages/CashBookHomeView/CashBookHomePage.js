import React, { useState, useEffect } from 'react';
import SearchContent from './SearchContent';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from 'src/routes/paths';
import './index.css';

import TopBarCashBook from './TopbarCashBook';
import Label from './Label';
import Bottom from './Bottom';
import BottomNav from './BottomNav';

function cashBookHomePage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState(2);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');

    if (!token) {
      navigate(PATH_PAGE.QRCodeScreen);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);
  return (
    <div
      className="App"
      style={{
        maxHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      <TopBarCashBook></TopBarCashBook>
      <div
        style={{
          maxHeight: 'calc(100vh - 94px)',
          overflowX: 'hidden',
          overflowY: open ? 'hidden' : 'scroll'
        }}
      >
        <Label
          isSuccess={isSuccess}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          startTime={startTime}
          endTime={endTime}
        />
        <SearchContent
          setIsSuccess={setIsSuccess}
          isSuccess={isSuccess}
          startTime={startTime}
          endTime={endTime}
          setOpen={setOpen}
          open={open}
        />
      </div>
      {!open && <Bottom />}
    </div>
  );
}

export default cashBookHomePage;
