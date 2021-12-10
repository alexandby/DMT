//Page view for code review!
import React, { Component } from 'react';

import { Grid } from '@mui/material';

import GamesNavbar from './components/GamesNavbar';
import GameCard from './components/GameCard';
import AddGameCard from './components/GameCard/AddGameCard';

import { gamesData } from '../../db/games';
import EditGameCard from './components/GameCard/EditGameCard';

// localStorage.setItem('gamesData', JSON.stringify(gamesData));
export default class Games extends Component {
  state = {
    games: gamesData,
    editModal: false,
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

  editItem = (key) => {
    this.setState({ gameEdit: this.state.games[key], editModal: true, gameEditIndex: key });
  };
  closeEditModal = () => {
    this.setState({ editModal: false });
  };

  updateGame = (game, key) => {
    const games = { ...this.state.games };
    games[key] = game;
    this.setState({ games });
  };

  deleteGame = (id) => {
    const games = { ...this.state.games };
    this.setState({ games: Object.values(games).filter((el) => el.id !== id) });
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
                  onDelete={this.deleteGame}
                  //Get key of edit btn
                  onEdit={this.editItem.bind(null, key)}
                />
              </Grid>
            );
          })}
        </Grid>
        <AddGameCard addGame={this.addGame} />
        {/*If edit btn was pressed, editModal becomes true*/}
        {this.state.editModal ? (
          <EditGameCard
            //Current game card with data
            gameEdit={this.state.gameEdit}
            //Index of pressed game card
            index={this.state.gameEditIndex}
            //Update state with new data of pressed game card
            updateGame={this.updateGame}
            //Makes editModal false
            closeModal={this.closeEditModal}
          />
        ) : null}
      </>
    );
  }
}
