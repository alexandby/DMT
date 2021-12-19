import React from 'react';
import PropTypes from 'prop-types';
import {
  GameCardWrapper,
  GameCardTypography,
  GameCardActions,
  GameCardCollapse,
  BebasTypography,
  ExpandMore,
} from './StyledComponents';
import { CardContent, CardMedia, IconButton, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import { Component } from 'react';

class GameCard extends Component {
  state = {
    expanded: false,
  };
  handleExpandClick = () => {
    this.setState((oldState) => ({
      expanded: !oldState.expanded,
    }));
  };
  render() {
    const { id, logo, name, signPlayers, maxPlayers, rank, cardMap } = this.props.details || {};
    return (
      <GameCardWrapper>
        <CardMedia component="img" height="194" image={logo} alt="cardHeaderImg" />
        <CardContent>
          <Grid container direction="row" wrap="wrap">
            <Grid item xs={6}>
              <GameCardTypography variant="subtitle2" align="left">
                Current players: {signPlayers}
              </GameCardTypography>
              <GameCardTypography variant="subtitle2" align="left">
                Max players: {maxPlayers}
              </GameCardTypography>
            </Grid>
            <Grid item xs={6}>
              <BebasTypography variant="h5">Required rank:</BebasTypography>
              <CardMedia component="img" image={rank} alt="card rank img" />
            </Grid>
          </Grid>
        </CardContent>
        <GameCardActions disableSpacing>
          <ExpandMore
            expand={this.state.expanded}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <MoreHorizIcon />
          </ExpandMore>
          <IconButton aria-label="delete game card" onClick={() => this.props.onDelete(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="play current game" onClick={() => this.props.onEdit(id)}>
            <EditIcon />
          </IconButton>
        </GameCardActions>
        <GameCardCollapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <GameCardTypography variant="subtitle2" editable="true">
              Name: {name}
            </GameCardTypography>
            <Grid container>
              <Grid item xs={6}>
                <GameCardTypography variant="subtitle2">Map:</GameCardTypography>
                <CardMedia component="img" image={cardMap} alt="card map img" />
              </Grid>
              <Grid item xs={6}>
                <GameCardTypography variant="subtitle2">Created by:</GameCardTypography>
                <IconButton aria-label="play current game">
                  <CardMedia component="img" image="/img/death.png" />
                </IconButton>
              </Grid>
            </Grid>
            <GameCardTypography variant="subtitle2">Join</GameCardTypography>
            <IconButton aria-label="edit current game" onClick={() => console.log('Joined!')}>
              <PlayArrowIcon />
            </IconButton>
          </CardContent>
        </GameCardCollapse>
      </GameCardWrapper>
    );
  }
}
export default GameCard;

GameCard.propTypes = {
  details: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    rank: PropTypes.string,
    cardMap: PropTypes.string,
    signPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
  }),
  index: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
