// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// ---Components
import FitImg from 'Utils/FitImg';
// ---CommonComps
import TitleStyler from 'CComps/TitleStyler';
// ---Types
import { Product } from '@Reducers/home/customTypes';
// ---Others
import { priceFormat } from 'Others/otherMethods'

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
    <Col xs={24} sm={16} md={12} lg={8} xl={8} xxl={6}>
      <div className="product-box-container">
        <Link to={'/item?id=' + _id}>
          <FitImg
            srcImg={images.cover}
            estilo="product-box-img-container"
            alt={nombre}
          />
          <h5>
            <TitleStyler someTitle={nombre} />
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
        </Link>
        <PromoBox descuento={descuento} />
      </div>
    </Col>
  );
}

export default ProductBox;
