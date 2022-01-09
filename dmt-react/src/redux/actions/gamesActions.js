import { REMOVE_GAME, ADD_GAME, EDIT_GAME, UPDATE_GAME } from '../constants/action-types';

export const removeGame = (id) => {
  return {
    type: REMOVE_GAME,
    payload: id,
  };
};

export const addGame = (game, id) => {
  return {
    type: ADD_GAME,
    game,
    id,
  };
};

export const editGame = (game) => {
  return {
    type: EDIT_GAME,
    payload: game,
  };
};

export const updateGame = (game) => {
  return {
    type: UPDATE_GAME,
    payload: game,
  };
};
