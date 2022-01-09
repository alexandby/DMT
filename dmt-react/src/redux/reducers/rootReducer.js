import { combineReducers } from 'redux';
import { confirmReducer } from './confirmReducers';

import { gamesReducer } from './gamesReducers';

const rootReducer = combineReducers({
  games: gamesReducer,
  confirm: confirmReducer,
});

export default rootReducer;
