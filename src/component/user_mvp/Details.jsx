import React from 'react';
import { Stack } from '@mui/material';
import Home from './Home';
import Fundhub from './Fundhub'; 
import Profile from './Profile';
import PaymentDispute from './PaymentDispute'; 
import History from './History';
import Team from './Team';

// Extra
import Fundhub2 from './Fundhub2';

import WithdrawForm from './WithdrawForm';
import WithdrawalRequest from './WithdrawRequest';
import PaymentSent from './PaymentSent'

import Cpt from './Cpt';
import TaskList from './TaskList';
import KYCForm from './KYCForm';

const Details = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        <Home />
        {/* <Incubator /> */}
        <Team />
        <Fundhub />
        <Profile />
        {/* <Leaders /> */}
        {/* <Upgrade /> */}
        <PaymentDispute />
        <History />
        {/* <Support /> */}
        {/* <Settings /> */}
        {/* <Log /> */}

        <Fundhub2 />
        <WithdrawForm />
        <WithdrawalRequest />
        <PaymentSent />

        <Cpt />
        <TaskList />
        <KYCForm />
    </Stack>
  )
}

export default Details