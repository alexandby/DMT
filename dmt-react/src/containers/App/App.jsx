import React from 'react';
import './App.css';

import Header from '../../components/Header';
import Auth from '../../pages/Auth';
import Games from '../../pages/Games';
import Players from '../../pages/Players';
import { Route, Routes } from 'react-router';
import { Container } from '@mui/material';
//import { AppBar } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <Container component="main">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/players" element={<Players />} />
        </Routes>
      </Container>
    </>
  );
};
export default App;
