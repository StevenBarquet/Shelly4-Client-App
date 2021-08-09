import { INVERT_FLAG } from 'Types';
import { Action, ReducerState } from './customTypes'

const INITIAL_STATE = {
  showImg: false
};

export default (state = INITIAL_STATE, action: Action): ReducerState => {
  switch (action.type) {
    case INVERT_FLAG:
      return {
        ...state,
        showImg: action.payload
      };

    default:
      return state;
  }
};
