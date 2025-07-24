import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Home from './Home';
import Fundhub from './Fundhub';
import Profile from './Profile';
import PaymentDispute from './PaymentDispute';
import History from './History';
import Team from './Team';
import Incubator from './Incubator';
import UpgradeTiers from './UpgradeTiers';
import Leader from './Leader'; // Placeholder
import Support from './Support'; // Placeholder
import Settings from './Settings'; // Placeholder
import Log_out from './Log_out'; // Placeholder

const Details = ({ selectedMenu }) => {
  const renderContent = () => {
    switch (selectedMenu) {
      case "home": return <Home />;
      case "incubator": return <Incubator />;
      case "team": return <Team />;
      case "fundhub": return <Fundhub />;
      case "profile": return <Profile />;
      case "leader": return <Leader />;
      case "upgradeTiers": return <UpgradeTiers />;
      case "paymentDispute": return <PaymentDispute />;
      case "history": return <History />;
      case "support": return <Support />;
      case "settings": return <Settings />;
      case "log_out": return <Log_out />;
      default: return <Home />;
    }
  };

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      <Box>{renderContent()}</Box>
    </Stack>
  );
};

export default Details;