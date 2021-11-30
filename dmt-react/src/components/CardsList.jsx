import { Button, Grid } from '@mui/material';
import React, { Component } from 'react';
import { gamesData } from '../db/games';
import GameCard from './GameCard/GameCard';

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: gamesData,
      newGame: {
        id: 'game7',
        name: 'New',
        details: 'Your own details',
        logo: '/img/games-img/newgamecard.jpg',
        rank: '/img/players-img/amateur.png',
        signPlayers: 0,
        maxPlayers: 10,
      },
    };
  }
  componentDidMount() {
    //localStorage.setItem('gamesData', JSON.stringify(this.state.games));
    const gamesDataLS = JSON.parse(localStorage.getItem('gamesData'));
  }
  handleDeleteGame = (id) => {
    this.setState((oldState) => ({
      games: oldState.games.filter((el) => el.id !== id),
    }));
  };
  handleAddNewGame = (el) => {
    this.setState({ games: [...this.state.games, { ...this.state.newGame }] });
  };
  render() {
    return [
      this.state.games.map((obj) => (
        <Grid item xs={4} align="center">
          <GameCard obj={obj} onDelete={() => this.handleDeleteGame(obj.id)} />
        </Grid>
      )),
      <Grid item xs={4}>
        <Button variant="outlined" onClick={this.handleAddNewGame}>
          {' '}
          +{' '}
        </Button>
      </Grid>,
    ];
  }
}

export default CardsList;
