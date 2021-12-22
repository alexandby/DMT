import React, { Component } from 'react';

import GameCard from './components/GameCard';
import AdminGameCard from './components/AdminGameCard';

import { gamesData } from '../../db/games';

import { styled } from '@mui/system';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MyAddIcon = styled(AddIcon)({
  width: '100px',
  height: '100px',
  color: 'orange',
});

export default class Games extends Component {
  state = {
    games: gamesData,
    openModal: false,
  };

  componentDidMount() {
    const gamesDataLS = JSON.parse(localStorage.getItem('gamesData'));
    gamesDataLS !== null
      ? this.setState((oldState) => ({
          games: (oldState.games = gamesDataLS),
        }))
      : localStorage.setItem('gamesData', JSON.stringify(gamesData));
  }

  componentDidUpdate() {
    localStorage.setItem('gamesData', JSON.stringify(this.state.games));
  }

  closeModal = () => {
    this.setState({ openModal: false });
  };

  addGame = (game) => {
    const games = { ...this.state.games };
    const key = Object.values(games).length;
    games[key] = game;
    this.setState({ games });
  };

  updateGame = (game, key) => {
    const games = { ...this.state.games };
    games[key] = game;
    this.setState({ games });
  };

  editIndex = (key) => {
    this.state.games[key] !== undefined
      ? this.setState({ gameEdit: this.state.games[key], openModal: true, gameEditIndex: key })
      : this.setState({
          gameEdit: {
            id: 'game7',
            name: '',
            details: '',
            logo: '',
            rank: '',
            cardMap: '',
            signPlayers: 0,
            maxPlayers: 0,
          },
          gameEditIndex: undefined,
          openModal: true,
        });
  };

  deleteGame = (id) => {
    const games = { ...this.state.games };
    const gamesValues = Object.values(games);
    this.setState({ games: gamesValues.filter((el) => el.id !== id) });
  };

  render() {
    return (
      <>
        {Object.keys(this.state.games).map((key) => {
          return (
            <Grid key={key} item xs={12} md={6} lg={4} align="center">
              <GameCard
                details={this.state.games[key]}
                onDelete={this.deleteGame}
                onEdit={this.editIndex.bind(null, key)}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} md={6} lg={4} align="center">
          <IconButton onClick={this.editIndex}>
            <MyAddIcon />
          </IconButton>
        </Grid>

        {this.state.openModal ? (
          <AdminGameCard
            //Add new game to list
            addGame={this.addGame}
            //Update game with current index
            updateGame={this.updateGame}
            //Game card data
            gameEdit={this.state.gameEdit}
            //Index of pressed game card
            index={this.state.gameEditIndex}
            //Open modal
            modal={this.closeModal}
          />
        ) : null}
      </>
    );
  }
}
