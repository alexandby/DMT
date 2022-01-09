import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import GameCard from './components/GameCard';
import AdminGameCard from './components/AdminGameCard';
import ConfirmDialog from '../../components/ConfirmDialog';

import { styled } from '@mui/system';
import { Grid, IconButton, Stack } from '@mui/material';
import { AppPagination } from './StyledComponents';
import AddIcon from '@mui/icons-material/Add';

import { editGame, addGame } from '../../redux/actions/gamesActions';
import { showConfirm } from '../../redux/actions/confirmActions';

const MyAddIcon = styled(AddIcon)({
  width: '100px',
  height: '100px',
  color: 'orange',
});

class Games extends Component {
  state = {
    page: 1,
    itemsPerPage: 3,
  };

  handleChange = (event, value) => {
    this.setPage(value);
  };

  setPage(page) {
    this.setState({ page });
  }

  confirmRemove(id) {
    this.props.showConfirm(id, this.props.isAskedAboutConfirm);
  }

  edit(game) {
    this.props.editGame(game);
  }
  add(game) {
    this.props.addGame(game, uuidv4());
  }

  render() {
    return (
      <>
        <Grid container spacing={8} direction="row" wrap="wrap">
          {this.props.games
            .slice(
              (this.state.page - 1) * this.state.itemsPerPage,
              this.state.page * this.state.itemsPerPage,
            )
            .map((game) => {
              return (
                <Grid key={game.id} item xs={12} md={6} lg={4} align="center">
                  {!game.editing ? (
                    <GameCard
                      details={game}
                      onDelete={() => this.confirmRemove(game.id)}
                      onEdit={() => this.edit(game.id, game)}
                    />
                  ) : (
                    <AdminGameCard gameEdit={game} id={game.id} />
                  )}
                </Grid>
              );
            })}
          {/* <Grid item xs={12} md={6} lg={4} align="center">
            <IconButton onClick={() => this.add(this.props.newGame)}>
              <MyAddIcon />
            </IconButton>
          </Grid> */}
        </Grid>
        <Stack spacing={2}>
          <AppPagination
            count={Math.ceil(this.props.games.length / this.state.itemsPerPage)}
            page={this.state.page}
            onChange={this.handleChange}
            defaultPage={1}
            shape="rounded"
            size="large"
          />
        </Stack>
        {this.props.isAskedAboutConfirm ? <ConfirmDialog /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.games.games,
  newGame: state.games.newGame,
  isAskedAboutConfirm: state.confirm.isAskedAboutConfirm,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editGame: (game) => dispatch(editGame(game)),
    addGame: (game, id) => dispatch(addGame(game, id)),
    showConfirm: (id, isAskedAboutConfirm) => dispatch(showConfirm(id, isAskedAboutConfirm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
