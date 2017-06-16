//Game Reducer actions
export const LOST_GAME = 'LOST_GAME';
export const NEW_GAME = 'NEW_GAME';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

//Tile Reducer actions
export const SET_TILE = 'SET_TILE';
export const GET_TILE = 'GET_TILE';

export const setActiveTile = () => {
  return {
    type: SET_TILE
  }
}

export const getActiveTile = () => {
  return {
    type: GET_TILE
  }
}

export const newGame = () => {
  return {
    type: NEW_GAME
  }
}

export const gameOver = () => {
  return {
    type: LOST_GAME
  }
}

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE
  }
}
