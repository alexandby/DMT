import React from 'react';

import GamesNavbar from '../components/GamesNavbar';
import CardsList from '../components/CardsList';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Games = () => {
  return (
    <>
      <GamesNavbar />
      <section className="games-list">
        <div className="cards cards-list_content">
          <CardsList />
        </div>
      </section>
      <Link to="/players">
        <Button color="warning">Players</Button>
      </Link>
    </>
  );
};

export default Games;
