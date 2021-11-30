import React from 'react';

import GamesNavbar from '../components/GamesNavbar';
import CardsList from '../components/CardsList';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

const Games = (props) => {
  return (
    <>
      <GamesNavbar />
      <Grid container spacing={8} direction="row" wrap="wrap">
        <CardsList />
      </Grid>
      <Link to="/players">
        <Button variant="outlined" color="warning">
          Players
        </Button>
      </Link>
    </>
  );
};

export default Games;
