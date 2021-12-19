import React from 'react';

import Header from './components/Header/Header';
import Games from './pages/Games/Games';
import { Container, Grid } from '@mui/material';

const App = () => {
  return (
    <>
      {/*Header of app*/}
      <Header />
      <Container component="main">
        {/*Page with table of games*/}
        <Grid container spacing={8} direction="row" wrap="wrap">
          <Games />
        </Grid>
      </Container>
    </>
  );
};
export default App;
