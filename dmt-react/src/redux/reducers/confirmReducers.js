import { SHOW_CONFIRM, HIDE_CONFIRM } from '../constants/action-types';

const initialState = {
  isAskedAboutConfirm: false,
  gameId: null,
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM:
      return { isAskedAboutConfirm: true, gameId: action.id };
    case HIDE_CONFIRM:
      return initialState;
    default:
      return state;
  }
};
