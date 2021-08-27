// -------------------------------------------TYPES------------------------------------
import { UPDATE_SEARCH_PARAMS, UPDATE_SEARCH_PRODUCTS, UPDATE_SEARCH_PAGINATION } from 'Types';
import { Dispatch } from 'redux'
import { SearchParams, ProductPayload, Pagination } from '@Reducers/productList/customTypes';

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

export const updateReduxProducts = (data: ProductPayload) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_SEARCH_PRODUCTS,
    payload: data
  });
};

export const updateReduxPagination = (data: Pagination) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_SEARCH_PAGINATION,
    payload: data
  });
};
