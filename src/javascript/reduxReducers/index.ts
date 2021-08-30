// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import {ReducerState as AppInfoState} from '@Reducers/appInfo/customTypes';
import {ReducerState as HomeState} from '@Reducers/home/customTypes';
import {ReducerState as ProductListState} from '@Reducers/productList/customTypes';
import {ReducerState as ProductDetailState} from '@Reducers/productDetail/customTypes';
// ---Reducers
import appInfoReducer from '@Reducers/appInfo';
import homeReducer from '@Reducers/home';
import productListReducer from '@Reducers/productList';
import productDetailReducer from '@Reducers/productDetail';

// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  homeReducer: HomeState;
  productListReducer: ProductListState;
  productDetailReducer: ProductDetailState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  appInfoReducer,
  homeReducer,
  productListReducer,
  productDetailReducer
});

export default  rootReducer