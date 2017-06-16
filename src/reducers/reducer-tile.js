import { GET_TILE, SET_TILE, NEW_GAME } from '../actions';

const INITIAL_STATE = {
  tile: 0
}

const updateClickable = ({tile}) => {
  return Math.floor(Math.random() * 9) + 1;
}

const getTile = ({tile}) => tile;

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_TILE:
      return {
        ...state,
        tile: updateClickable(state)
      }

    case GET_TILE:
      return {
        ...state,
        tile: getTile(state)
      }

    case NEW_GAME:
      return INITIAL_STATE;

    default:
      return INITIAL_STATE;
  }
}
