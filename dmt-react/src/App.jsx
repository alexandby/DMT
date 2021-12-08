import React from 'react';

import Header from './components/Header';
import Games from './pages/Games/Games';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <Container component="main">
        <Games />
      </Container>
    </>
  );
};
export default App;
