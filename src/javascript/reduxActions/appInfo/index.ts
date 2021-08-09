// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING,
} from 'Types';
import { Dispatch } from 'redux'

// -------------------------------------------ACTIONS------------------------------------
export const changeResponsiveFlag = (newFlag: boolean) => (dispatch: Dispatch) : void => {
  dispatch({
    type: CHANGE_RESPONSIVE,
    payload: newFlag
  });
};

export const updatePath = (newPath: string) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PATH,
    payload: newPath
  });
};

export const updateParams = (newParam: string) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PARAMS,
    payload: newParam
  });
};

export const updateLoading = (flag: boolean) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_LOADING,
    payload: flag
  });
};
