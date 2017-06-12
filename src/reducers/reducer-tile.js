import { SET_TILE, NEW_GAME } from '../actions';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_TILE:
      return action.tile;

    case NEW_GAME:
      return INITIAL_STATE;

    default:
      return INITIAL_STATE;
  }
  return state;
}
