// ---Dependencys
import React, { useEffect, ReactElement } from 'react';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { saveHomeData, saveReduxProducts } from 'Actions/home';
import { updateLoading } from 'Actions/appInfo';
import { ReduxState } from 'Reducers';
import { ReducerState as HomeData, Product } from '@Reducers/home/customTypes';
// ---Components
import DinamicCarousel from 'Comp/Home/DinamicCarousel';
import BuySteps from 'Comp/Home/BuySteps';
import ButtonProd from 'Comp/Home/ButtonProd';
import Destacados from 'Comp/Home/Destacados';
// ---Others
import { ownerData } from 'Others/store-data.json';
// --Request
import { getHomePublic, getHomeProducts } from 'Others/peticiones';
import { asyncHandler, testError } from 'Others/requestHandlers';

// ------------------------------------------ COMPONENT-----------------------------------------
function Home() : ReactElement {
  // ----------------------- hooks, const, props y states
  // Redux States
  const { banners, paragraph, productsData, products } = useSelector(
    (reducers: ReduxState) => reducers.homeReducer
  );
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateHomeReducer = (data: HomeData) => dispatchR(saveHomeData(data));
  const updateProductReducer = (data: Array<Product> ) => dispatchR(saveReduxProducts(data));
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const { main, sub } = ownerData.title;
  useEffect(() => getHomeData(), []);
  useEffect(() => getProductsData(), [paragraph]);

  // ----------------------- Metodos Principales
  function getHomeData() {
    if(!paragraph){
      isLoading(true);
      asyncHandler(getHomePublic, onSuccessData, onError);
    }
  }
  function getProductsData() {
    if(paragraph && !productsData){
      isLoading(true);
      asyncHandler(getHomeProducts, onSuccessProducts, onError, {products});
    }  
  }

  // ----------------------- Metodos Auxiliares
  function onSuccessData(data: HomeData) {
    updateHomeReducer(data);
    isLoading(false);
  }

  function onError(err: unknown) {
    testError(err);
    isLoading(false);
  }

  function onSuccessProducts(data: Array<Product>) {
    updateProductReducer(data);
    isLoading(false);
  }

  // ----------------------- Render
  return (
    <>
      <div className="h-title">
        {main} 
        {' '}
        <span>{sub}</span>
      </div>
      <p>
        ¡Lo 
        {' '}
        <span>mejor</span>
        {' '}
        te espera!
      </p>
      <DinamicCarousel isMovil={isMovil} banners={banners} />
      <div className="home-container">
        <p>{paragraph || 'Cargando...'}</p>
        <Destacados productsData={productsData} />
        <BuySteps />
        <ButtonProd />
      </div>
    </>
  );
}

export default Home;
