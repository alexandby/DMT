import React from 'react';

import Header from './components/Header';
import Games from './pages/Games/Games';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
      {/*Header of app*/}
      <Header />
      <Container component="main">
        {/*Page with table of games*/}
        <Games />
      </Container>
    </>
  );
};
export default App;
