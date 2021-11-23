import React from 'react';
import './App.css';

import Header from '../../components/Header';
import Auth from '../../pages/Auth';
import Games from '../../pages/Games';
import Players from '../../pages/Players';
import { Route, Routes } from 'react-router';
//import { AppBar } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route exact path="/games" element={<Games />} />
            <Route exact path="/players" element={<Players />} />
          </Routes>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
export default App;
