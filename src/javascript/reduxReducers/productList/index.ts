// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS } from 'Types';
import { Action, ReducerState, SearchParams } from '@Reducers/productList/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  searchParams: {
    pageNumber: 1,
    pageSize: 30,
    categoria: 'Todos'
  }
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

    default:
      return <ReducerState>state;
  }
};