// ---Dependencys
import React from 'react';
import { Button } from 'antd';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from 'Actions/appInfo';
import { ReduxState } from 'Reducers';
// ---Components
import TabMenu from 'Comp/ProductList/TabMenu';
// --Request
import { searchProducts } from 'Others/peticiones';
import { asyncHandler, testError } from 'Others/requestHandlers';

const mockData = {
  pageNumber: 1,
  pageSize: 20
}

// ------------------------------------------ COMPONENT-----------------------------------------
function ProductList () : React.ReactElement {
  // Redux States
  const { currentParams } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  function getData() {
    asyncHandler(searchProducts, onSuccess, onError, mockData);
  }
  function onSuccess(data: unknown) {
    console.log('currentParams ', currentParams)
    console.log('request data: ', data)
    isLoading(false);
  }

  function onError(err: unknown) {
    testError(err);
    isLoading(false);
  }
  return (
    <div className="products-cont">
      <TabMenu>
        <div>cosassssssss</div>
        <Button type="primary" onClick={getData}>Call Products </Button>
      </TabMenu>
    </div>
  );
}

export default ProductList;
