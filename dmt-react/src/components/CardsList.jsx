import React, { Component } from 'react';
import { gamesData } from '../db/games';
import Card from './Card';

localStorage.setItem('gamesData', JSON.stringify(gamesData));
const gamesDataState = JSON.parse(localStorage.getItem('gamesData'));

class CardsList extends Component {
  state = {
    games: gamesDataState,
  };
  render() {
    return this.state.games.map((obj) => (
      <Card
        id={obj.id}
        cardName={obj.name}
        cardLogo={obj.logo}
        cardDetails={obj.details}
        cardMaxPlayers={obj.maxPlayers}
        cardRank={obj.rank}
        key={`${obj.id}_${obj.name}`}
      />
    ));
  }
}

export default CardsList;
