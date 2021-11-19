import React, { Component } from 'react';
import { gamesData } from '../db/games';
import Card from './Card';

localStorage.setItem('gamesData', JSON.stringify(gamesData));
const gamesDataState = JSON.parse(localStorage.getItem('gamesData'));

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: gamesDataState,
    };
  }
  render() {
    return this.state.games.map((obj) => (
      <Card
        key={obj.id}
        cardName={obj.name}
        cardLogo={obj.logo}
        cardMaxPlayers={obj.maxPlayers}
        cardRank={obj.rank}
        onClickDetail={() => console.log('Clicked DETAIL Button')}
        //onClickJoin={() => console.log('Clicked JOIN Button')}
      />
    ));
  }
}

export default CardsList;
