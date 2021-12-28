import { REMOVE_GAME, ADD_GAME, EDIT_GAME, UPDATE_GAME } from '../constants/action-types';

export const removeGame = (index) => {
  return {
    type: REMOVE_GAME,
    payload: index,
  };
};

export const addGame = (game) => {
  return {
    type: ADD_GAME,
    payload: game,
  };
};

export const editGame = (index) => {
  return {
    type: EDIT_GAME,
    payload: index,
  };
};

export const updateGame = (game, index) => {
  return {
    type: UPDATE_GAME,
    game,
    index,
  };
};
