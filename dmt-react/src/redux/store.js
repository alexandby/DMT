import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

function saveToLocalStorage(state) {
  try {
    const gamesDataLS = JSON.stringify(state);
    localStorage.setItem('gamesData', gamesDataLS);
  } catch (e) {
    console.warn(e);
  }
}
function loadFromLocalStorage() {
  try {
    const gamesDataLS = localStorage.getItem('gamesData');
    if (gamesDataLS === null) return undefined;
    return JSON.parse(gamesDataLS);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
