import TopBar from './TopBar';
import InputNumber from './InputNumber';
import Calculator from './Calculator';
import ContentUpdate from './ContentUpdate';
import React, { useState } from 'react';

function CashBookUpdate() {
  const [openCalculator, setOpenCalculator] = useState(false);
  const [hide, setHide] = useState(true);
  return (
    <div
      style={{
        height: '100vh',
       
        backgroundColor: '#F6F6F6'
  
      }}
    >
      <TopBar />
      <InputNumber
        openCalculator={openCalculator}
        setOpenCalculator={setOpenCalculator}
        hide={hide}
        setHide={setHide}
      />
      <ContentUpdate hide={hide} setHide={setHide} />
    </div>
  );
}
export default CashBookUpdate;
