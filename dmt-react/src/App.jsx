import React from 'react';

import Header from './components/Header/Header';
import Games from './pages/Games/Games';
//import Auth from './pages/Auth/Auth';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <Container component="main">
        <Games />
        {/* <Auth /> */}
      </Container>
    </>
  );
};
export default App;
