// -------------------------------------------TYPES------------------------------------
import { UPDATE_PRODUCT_DETAIL } from 'Types';
import { ReducerState, Action, Product } from '@Reducers/productDetail/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  productDetail: {}
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: <Product>payload
      };

    default:
      return <ReducerState>state;
  }
};