// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import {ReducerState as ShowFlagState} from '@Reducers/showFlag/customTypes';
import {ReducerState as AppInfoState} from '@Reducers/appInfo/customTypes';
// ---Reducers
import showFlagReducer from '@Reducers/showFlag';
import appInfoReducer from '@Reducers/appInfo';
// import homeReducer from '@Reducers/home';

// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  showFlagReducer: ShowFlagState;
  appInfoReducer: AppInfoState
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  showFlagReducer,
  appInfoReducer
});

export default  rootReducer