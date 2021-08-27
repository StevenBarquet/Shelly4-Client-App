// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS, UPDATE_SEARCH_PRODUCTS, UPDATE_SEARCH_PAGINATION } from 'Types';
import { Action, ReducerState, SearchParams, ProductPayload, Pagination } from '@Reducers/productList/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  searchParams: {
    pageNumber: 1,
    pageSize: 30,
    categoria: 'Todos'
  },
  products: [],
  productCount: 0
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: {
          // ...state.searchParams,
          ...<SearchParams>payload
        }
      };

    case UPDATE_SEARCH_PRODUCTS:
      return {
        ...state,
        ...<ProductPayload>payload
      }
    
    case UPDATE_SEARCH_PAGINATION:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          ...<Pagination>payload
        }
      }

    default:
      return <ReducerState>state;
  }
};