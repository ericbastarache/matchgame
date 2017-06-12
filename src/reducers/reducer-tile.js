const INITIAL_STATE = [];
const SET_TILE = 'SET_TILE';
const NEW_GAME = 'NEW_GAME';

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
