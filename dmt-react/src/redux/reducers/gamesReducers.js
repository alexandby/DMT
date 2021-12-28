import { REMOVE_GAME, ADD_GAME, EDIT_GAME, UPDATE_GAME } from '../constants/action-types.js';

import { gamesData } from '../../db/games.js';

const initialState = {
  games: gamesData,
  newGame: {
    id: 'game0',
    name: '',
    logo: '',
    rank: '',
    cardMap: '',
    signPlayers: 0,
    maxPlayers: 0,
    editing: 'true',
  },
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_GAME:
      return {
        ...state,
        games: state.games.filter((g, i) => i !== action.payload),
      };
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case EDIT_GAME:
      return {
        ...state,
        games: state.games.map((game, i) =>
          i === action.payload ? { ...game, editing: true } : { ...game, editing: false },
        ),
      };
    case UPDATE_GAME:
      return {
        ...state,
        games: state.games.map((game, i) =>
          i === action.index ? { ...(game = action.game), editing: false } : game,
        ),
      };
    default:
      return state;
  }
};
