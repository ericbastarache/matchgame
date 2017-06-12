import { combineReducers } from 'redux';
import gameReducer from './reducer-game';
import tileReducer from './reducer-tile';

const rootReducer = combineReducers({
  tile: tileReducer,
  game: gameReducer
});

export default rootReducer;
