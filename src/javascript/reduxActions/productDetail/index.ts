// -------------------------------------------TYPES------------------------------------
import { UPDATE_PRODUCT_DETAIL } from 'Types';
import { Dispatch } from 'redux'
import { Product } from '@Reducers/productDetail/customTypes';

export const updateReduxProdDetail = (data: Product) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PRODUCT_DETAIL,
    payload: data
  });
};
