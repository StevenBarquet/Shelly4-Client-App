// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS } from 'Types';
import { Dispatch } from 'redux'
import { SearchParams } from '@Reducers/productList/customTypes';

export const updateSearchParams = (params: SearchParams) => (dispatch: Dispatch) : void => {
  const { pageSize, pageNumber } = params
  const fixedPagination = {
    ...params,
    pageSize: pageSize ?? 30,
    pageNumber: pageNumber ?? 1
  }
  dispatch({
    type: UPDATE_SEARCH_PARAMS,
    payload: fixedPagination
  });
};
