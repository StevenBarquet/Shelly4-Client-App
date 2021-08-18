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

function PriceBox (props: {precioOnline: number, descuento: number}) {
  const { precioOnline, descuento} = props

  function getExtraPrice(price: number) : number {
    return price*100/(100-descuento)
  }

  if(descuento && descuento>0)
    return(
      <>
        <Col span={12}>
          <aside>
            Antes:
            {` ${priceFormat(getExtraPrice(precioOnline))}`}
          </aside>
        </Col>
        <Col span={12}>
          Ahora:
          {` ${priceFormat(precioOnline)}`}
        </Col>
      </>
    )
  return (
    <>
      <Col span={24}>
        Ahora:
        {` ${priceFormat(precioOnline)}`}
      </Col>
    </>
  )
}

function PromoBox (props: { descuento: number }) {
  const { descuento } = props
  if(descuento && descuento > 0)
    return(
      <div className="product-box-promo">
        <span>{`-${descuento}%`}</span>
      </div>
    )
  return null
  
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
          <h5>
            <TitleParse someTitle={nombre} />
          </h5>
          <section>
            <Row>
              <PriceBox precioOnline={precioOnline} descuento={descuento} />
            </Row>
          </section>
          <div className="product-box-avilable-container">
            Disponibles:
            <span>{` ${disponibles}`}</span>
          </div>
          <div className="product-box-belt">{categoria[0]}</div>
        </div>
        <PromoBox descuento={descuento} />
      </Link>
    </Col>
  );
}

export default ProductBox;
