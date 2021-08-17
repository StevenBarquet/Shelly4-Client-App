// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import {ReducerState as ShowFlagState} from '@Reducers/showFlag/customTypes';
import {ReducerState as AppInfoState} from '@Reducers/appInfo/customTypes';
import {ReducerState as HomeState} from '@Reducers/home/customTypes';
// ---Reducers
import showFlagReducer from '@Reducers/showFlag';
import appInfoReducer from '@Reducers/appInfo';
import homeReducer from '@Reducers/home';

// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  showFlagReducer: ShowFlagState;
  appInfoReducer: AppInfoState;
  homeReducer: HomeState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  showFlagReducer,
  appInfoReducer,
  homeReducer
});

export default  rootReducer