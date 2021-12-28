import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameCard from './components/GameCard';
import AdminGameCard from './components/AdminGameCard';

import { styled } from '@mui/system';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { removeGame, editGame, addGame } from '../../redux/actions/gamesActions';

const MyAddIcon = styled(AddIcon)({
  width: '100px',
  height: '100px',
  color: 'orange',
});

class Games extends Component {
  remove(i) {
    this.props.removeGame(i);
  }

  edit(i, game) {
    this.props.editGame(i, game);
  }
  add(game, i) {
    this.props.addGame(game, i);
  }

  render() {
    return (
      <>
        {this.props.games.map((game, i) => {
          return (
            <Grid key={i} item xs={12} md={6} lg={4} align="center">
              {!game.editing ? (
                <GameCard
                  details={game}
                  onDelete={() => this.remove(i)}
                  onEdit={() => this.edit(i, game)}
                />
              ) : (
                <AdminGameCard gameEdit={game} index={i} />
              )}
            </Grid>
          );
        })}
        <Grid item xs={12} md={6} lg={4} align="center">
          <IconButton onClick={() => this.add(this.props.newGame)}>
            <MyAddIcon />
          </IconButton>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.games.games,
  newGame: state.games.newGame,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeGame: (i) => dispatch(removeGame(i)),
    editGame: (i, game) => dispatch(editGame(i, game)),
    addGame: (game, i) => dispatch(addGame(game, i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
