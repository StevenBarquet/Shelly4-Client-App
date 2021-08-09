// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING
} from 'Types';
import {Action, ReducerState} from './customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  isMovil: false,
  isLoading: false,
  currentPath: '',
  currentParams: ''
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_RESPONSIVE:
      return {
        ...state,
        isMovil: <boolean>payload
      };

    case UPDATE_PATH:
      return {
        ...state,
        currentPath: <string>payload
      };

    case UPDATE_PARAMS:
      return {
        ...state,
        currentParams: <string>payload
      };

    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: <boolean>payload
      };

    default:
      return state;
  }
};
