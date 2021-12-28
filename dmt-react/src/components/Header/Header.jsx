import React from 'react';
import { Toolbar, IconButton } from '@mui/material';
import { HeaderAppBar, LogoTyp } from './StyledComponents';

const Header = () => {
  return (
    <HeaderAppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logoIcon">
          <img src="/img/death.png" alt="" />
        </IconButton>
        <LogoTyp variant="h3">DeathMatch Tournaments</LogoTyp>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
