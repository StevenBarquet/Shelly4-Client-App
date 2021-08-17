// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// ---Components
import FitImg from 'Utils/FitImg';
// ---Types
import { Product } from '@Reducers/home/customTypes';
// ---Others
import { getWordsArray, makeWordsArray, priceFormat } from 'Others/otherMethods'

// ---aux
function TitleParse(props: { someTitle: string}) {
  const { someTitle } = props
  const wordsArray = getWordsArray(someTitle);
  if(wordsArray.length > 1){
    const firstWord = wordsArray[0]
    const otherWordsArray = wordsArray.splice(1, wordsArray.length)
    const otherWords = makeWordsArray(otherWordsArray)
    return (
      <>
        <span>{firstWord}</span>
        {` ${otherWords}`}
      </>
    )
  }
  return (
    <>
      {someTitle}
    </>
  )
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  producto: Product;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ProductBox(props: Props) : React.ReactElement {
  const { producto } = props
  const {
    _id,
    nombre,
    disponibles,
    precioOnline,
    images,
    categoria,
    descuento
  } = producto;

  return (
    <Col xs={24} sm={24} lg={8}>
      <Link to={'/item=' + _id}>
        <div className="product-box-container">
          <FitImg
            srcImg={images.cover}
            estilo="product-box-img-container"
            alt={nombre}
          />
          <div className="product-box-title-container">
            <h5>
              <TitleParse someTitle={nombre} />
            </h5>
          </div>
          <div className="product-box-price-container">
            <Row>
              <Col span={24}>
                Ahora:
                {` ${priceFormat(precioOnline)}`}
              </Col>
            </Row>
          </div>
          <div className="product-box-avilable-container">
            Disponibles:
            {` ${disponibles}`}
          </div>
          <div className="product-box-belt">{categoria[0]}</div>
        </div>
        {descuento && descuento>0 && (
          <div className="product-box-promo">
            <span>{`-${descuento}%`}</span>
          </div>
        )}
      </Link>
    </Col>
  );
}

export default ProductBox;
