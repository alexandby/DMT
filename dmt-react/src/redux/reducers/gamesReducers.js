import { REMOVE_GAME, ADD_GAME, EDIT_GAME, UPDATE_GAME } from '../constants/action-types.js';

import { gamesData } from '../../db/games.js';

const initialState = {
  games: gamesData,
  newGame: {
    name: '',
    logo: '',
    rank: '',
    cardMap: '',
    signPlayers: 0,
    maxPlayers: 0,
    editing: true,
  },
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game.id !== action.payload),
      };
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, { id: action.id, ...state.newGame }],
      };
    case EDIT_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload ? { ...game, editing: true } : { ...game, editing: false },
        ),
      };
    case UPDATE_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? { ...(game = action.payload), editing: false } : game,
        ),
      };
    default:
      return state;
  }
};
