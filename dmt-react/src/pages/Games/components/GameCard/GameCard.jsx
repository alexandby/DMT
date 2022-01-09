import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  GameCardActions,
  ExpandMap,
  PlayersTyp,
  PlayersBox,
  RankTyp,
  NameTyp,
  MapTyp,
  GameCardCollapse,
  MapMedia,
  LogoMedia,
  RankMedia,
  GridCard,
} from './StyledComponents';
import { IconButton, Grid } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';

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
      <Wrapper>
        <GridCard container direction="row" wrap="wrap">
          <PlayersTyp variant="subtitle2">Logo:</PlayersTyp>
          <LogoMedia component="img" image={logo} alt="cardHeaderImg" />
          <Grid item xs={12}>
            <PlayersTyp variant="subtitle2">Name: </PlayersTyp>
            <NameTyp variant="subtitle2">{name}</NameTyp>
          </Grid>
          <Grid item xs={6}>
            <PlayersTyp variant="subtitle2">Current players:</PlayersTyp>
            <PlayersBox>{signPlayers}</PlayersBox>
            <PlayersTyp variant="subtitle2">Max players:</PlayersTyp>
            <PlayersBox>{maxPlayers}</PlayersBox>
          </Grid>
          <Grid item xs={6}>
            <RankTyp variant="h5">Required rank:</RankTyp>
            <RankMedia component="img" image={rank} alt="cardRankImg" />
          </Grid>
        </GridCard>
        <GameCardActions>
          <ExpandMap
            expand={this.state.expanded}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="showMap"
          >
            <MapIcon />
          </ExpandMap>
          <IconButton aria-label="playCurGame" onClick={() => console.log('Joined!')}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton aria-label="editCurGame" onClick={() => this.props.onEdit({ id })}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delGameCard" onClick={() => this.props.onDelete({ id })}>
            <DeleteIcon />
          </IconButton>
        </GameCardActions>
        <GameCardCollapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <MapTyp variant="subtitle2">Map:</MapTyp>
          <MapMedia component="img" image={cardMap} alt="cardHeaderImg" />
        </GameCardCollapse>
      </Wrapper>
    );
  }
}

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

export default GameCard;
