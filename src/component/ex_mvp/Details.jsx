import React from 'react';
import { Stack } from '@mui/material';
import Home from '../user_mvp/Home';
import TradeCenter from './TradeCenter';
import Fundhub from '../user_mvp/Fundhub';

const Details = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        <Home />
        <TradeCenter />
        <Fundhub />
        {/* <Leader /> */}
        {/* <Payment /> */}
        {/* <History /> */}
        {/* <Support /> */}
        {/* <Settings /> */}
        {/* <Log /> */}
    </Stack>
  )
}

export default Details