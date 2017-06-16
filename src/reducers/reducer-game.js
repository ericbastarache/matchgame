import { LOST_GAME, NEW_GAME, INCREMENT_SCORE } from '../actions';

const INITIAL_STATE = {
  lost: false,
  score: 0,
  highScore: 0
}

const updateHighScore = ({score, highScore}) => {
  return score > highScore ? score: highScore;
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOST_GAME:
      return {
        ...state,
        lost: true,
        highScore: updateHighScore(state)
      }
    case NEW_GAME:
      return {
        ...state,
        lost: false,
        score: 0
      }

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1
      }

    default:
      return {
        ...state
      }
  }
}
