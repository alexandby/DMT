import React, { Component } from 'react';

import { Grid } from '@mui/material';

import GamesNavbar from './components/GamesNavbar';
import GameCard from './components/GameCard';
import AddGameCard from './components/GameCard/AddGameCard';
// import CardsList from '../../components/CardsList';

import { gamesData } from '../../db/games';
import EditGameCard from './components/GameCard/EditGameCard';

localStorage.setItem('gamesData', JSON.stringify(gamesData));

export default class Games extends Component {
  state = {
    games: gamesData,
  };

  componentDidMount() {
    const gamesDataLS = JSON.parse(localStorage.getItem('gamesData'));
    this.setState((oldState) => ({
      games: (oldState.games = gamesDataLS),
    }));
  }

  componentDidUpdate() {
    localStorage.setItem('gamesData', JSON.stringify(this.state.games));
  }

  addGame = (game) => {
    this.setState({ games: [...this.state.games, game] });
  };

  editGame = (key, editedGame) => {
    const games = { ...this.state.games };
    games[key] = editedGame;
    this.setState({ games });
  };

  deleteGame = (id) => {
    console.log(id);
    // this.setState((oldState) => ({
    //   games: oldState.games.filter((el) => el.id !== id),
    // }));
  };

  render() {
    return (
      <>
        <GamesNavbar />
        <Grid container spacing={8} direction="row" wrap="wrap">
          {Object.keys(this.state.games).map((key) => {
            return (
              <Grid key={key + 1} item xs={12} md={6} lg={4} align="center">
                <GameCard
                  key={key}
                  index={key}
                  details={this.state.games[key]}
                  onDelete={() => this.deleteGame}
                />
              </Grid>
            );
          })}
        </Grid>
        {Object.keys(this.state.games).map((key) => {
          return (
            <EditGameCard
              key={key}
              index={key}
              editGame={this.editGame}
              game={this.state.games[key]}
            />
          );
        })}
        <AddGameCard addGame={this.addGame} />
      </>
    );
  }
}
