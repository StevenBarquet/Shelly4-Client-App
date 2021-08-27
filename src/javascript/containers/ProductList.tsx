// ---Dependencys
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from 'Actions/appInfo';
import { updateSearchParams, updateReduxProducts } from 'Actions/productList';
import { ReduxState } from 'Reducers';
// ---Components
import TabMenu from 'Comp/ProductList/TabMenu';
import MapProudcts from 'Comp/ProductList/MapProudcts';
// --Request
import { searchProducts } from 'Others/peticiones';
import { asyncHandler, testError } from 'Others/requestHandlers';
// ---Types
import { SearchParams, ProductPayload } from '@Reducers/productList/customTypes'
// ---Others
import { stringToObject, removeEmptyAndNull } from 'Others/otherMethods'
import { validateSearchParams } from 'Others/validations'

// ------------------------------------------ COMPONENT-----------------------------------------
function ProductList () : React.ReactElement {
  const history = useHistory();
  // Redux States
  const { currentParams } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  const { searchParams: reduxSearchParams, products } = useSelector((reducers: ReduxState) => reducers.productListReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const searchParamsAction = (searchParams: SearchParams) => dispatchR(updateSearchParams(searchParams));
  const updateProducts = (data: ProductPayload) => dispatchR(updateReduxProducts(data));
  // useEffect
  useEffect(()=>{ updateSearch() },[currentParams])
  
  // -----------------------------MAIN METHODS--------------------------------
  function getData() {
    isLoading(true);
    const fixedData = fitDataToRequest()
    asyncHandler(searchProducts, onSuccess, onError, fixedData);
  }
  function hystoryPush(path: string) {
    history.push(path)
  }
  function updateSearch() {
    const searchParams = areValidParams()
    if(searchParams){
      searchParamsAction(searchParams)
    }
  }

  // -----------------------------AUX METHODS--------------------------------
  function areValidParams() {
    console.log('currentParams ', currentParams)
    const searchParams = stringToObject(currentParams)
    const { error } = validateSearchParams(searchParams)
    if(error){
      console.log('Wrong parms: ', error)
      return null
    }
    console.log('stringToObject ', searchParams)
    return searchParams as unknown as SearchParams
  }
  function onSuccess(data: ProductPayload) {
    console.log('request data: ', data)
    updateProducts(data)
    isLoading(false);
  }

  function onError(err: unknown) {
    testError(err);
    isLoading(false);
  }
  function fitDataToRequest() {
    const { categoria, descuento, sortBy } = reduxSearchParams
    const catValidation = categoria === 'Todos' || categoria === 'Buscar'
    const fixedData = {
      ...reduxSearchParams,
      filters: {
        categoria: catValidation ? null : categoria,
        descuento        
      },
      categoria: null,
      descuento: null,
      sortBy: sortBy? JSON.parse(sortBy) : null
    }
    return removeEmptyAndNull(fixedData)
  }
  // ---Render
  return (
    <div className="products-cont">
      <TabMenu currentCat={reduxSearchParams.categoria} hystoryPush={hystoryPush}>
        <Button type="primary" onClick={getData}>Call Products </Button>
        <MapProudcts productsData={products} />
      </TabMenu>
    </div>
  );
}

export default ProductList;
