// ---Dependencys
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from 'Actions/appInfo'
import { updateReduxProdDetail } from 'Actions/productDetail'
// ---Components
import ShortData from 'Comp/ProductDetail/ShortData';
import Actions from 'Comp/ProductDetail/Actions';
import Questions from 'Comp/ProductDetail/Questions';
// ---Types
import { ReduxState } from 'Reducers';
import { IDParamsBody } from '@Declarations';
import { Product } from '@Reducers/productDetail/customTypes'
// --Request
import { getProductRequest } from 'Others/peticiones';
import { asyncHandler, testError } from 'Others/requestHandlers';
// ---Others
import { stringToObject } from 'Others/otherMethods'
import { validateJustIdParam } from 'Others/validations'
import TitleStyler from 'CComps/TitleStyler';
import ImagesWidget from 'Comp/ProductDetail/ImagesWidget';

// ------------------------------------------ COMPONENT-----------------------------------------
function ProductDetail() : React.ReactElement {
  // ----------------------- hooks, const, props y states
  // Redux States
  const { currentParams, isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  const { productDetail } = useSelector((reducers: ReduxState) => reducers.productDetailReducer);
  const { nombre, categoria, descripcion, _id, images } = productDetail
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const updateProduct = (data: Product) => dispatchR(updateReduxProdDetail(data));
  // useEffect
  useEffect(()=>{ getProductData() },[currentParams])
  // ----------------------- Metodos Principales
  function getProductData() {
    const { id } = areValidParams()
    if(id){
      isLoading(true);
      asyncHandler(getProductRequest, onSuccessProduct, onErrorProduct, id);
    }
  }
  // ----------------------- Metodos Auxiliares
  function areValidParams() {
    const urlParams = stringToObject(currentParams)
    const { error } = validateJustIdParam(urlParams)
    if(error){
      return { id: null }
    }
    return urlParams as unknown as IDParamsBody
  }
  function onSuccessProduct(data: Product) {
    updateProduct(data);
    isLoading(false);
  }

  function onErrorProduct(err: unknown) {
    testError(err);
    isLoading(false);
  }
  // ----------------------- Render
  return (
    <div className="product-container">
      <Row>
        <Col span={24}>
          <h1>
            <TitleStyler someTitle={nombre} />
          </h1>
        </Col>
        <Col span={24}>
          <h5>{categoria && categoria.length >0 ? categoria[0]: null}</h5>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
          <aside>
            <ImagesWidget nombre={nombre} images={images} />
          </aside>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
              <Actions />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
              <ShortData productDetail={productDetail} />
            </Col>
          </Row>
        </Col>
        {isMovil?(
          <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={6}>
            <Questions id={_id} />
          </Col>
        ) : null}
        <Col xs={24} sm={24} md={14} lg={16} xl={16} xxl={18}>
          <h2>Descripción</h2>
          <article>{descripcion}</article>
        </Col>
        {isMovil? null: (
          <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={6}>
            <Questions id={_id} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default ProductDetail;
