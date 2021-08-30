// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
// ---Types
import { Product } from '@Reducers/productDetail/customTypes'
// ---Others
import { priceFormat } from 'Others/otherMethods'

// ---AUX COMPONENT
function PriceHandler(props: {precioOnline: number; descuento: number}) {
  const { precioOnline, descuento } = props
  const promo = descuento > 0
  // ----------------------- Metodos Principales
  function getExtraPrice(price: number) : number {
    return price*100/(100-descuento)
  }
  
  if(promo){
    return(
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <h3>Precio:</h3>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <aside>
            {priceFormat(getExtraPrice(precioOnline))}
          </aside>
        </Col>
        <Col xs={14} sm={14} md={14} lg={14} xl={14} xxl={14}>
          <section>
            {priceFormat(precioOnline)}
          </section>
        </Col>
      </Row>
    )
  }
  return(
    <Row>
      <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
        <h3>Precio:</h3>
      </Col>
      <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
        <h4>
          {priceFormat(precioOnline)}
        </h4>
      </Col>
    </Row>
  )
}

function InfoLabel(props: { 
    label: string; 
    value?: string | number; 
    valueType?: 'danger';
  }) {
    const { label, value, valueType } = props
    return(
      <Col xs={12} sm={8} md={12} lg={12} xl={12} xxl={12}>
        <h3>
          {`${label}:`}
          <span className={valueType}>{value}</span>
        </h3>
      </Col>
    )
  }
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productDetail: Product | Record<string, never>

}
// ------------------------------------------ COMPONENT-----------------------------------------
function ShortDataCard(props: Props): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { productDetail  } = props
  const { precioOnline, descuento, disponibles, marca, nuevo, estetica, categoria, countPurchases } = productDetail
  const useType = nuevo? 'Articulo nuevo' : 'Articulo usado o reacondicionado'
  const available = disponibles > 0
  const vendidos = countPurchases || 0;
  // ----------------------- Render
  return (
    <section>
      <Row>
        <Col xs={24} sm={16} md={24} lg={24} xl={24} xxl={24}>
          <PriceHandler descuento={descuento} precioOnline={precioOnline} />
        </Col>
        <InfoLabel label="Vendidos" value={vendidos} />
        <InfoLabel 
          label="Disponibles" 
          value={available?disponibles:'Agotado'} 
          valueType={available?undefined:'danger'} 
        />
        <InfoLabel label="Marca" value={marca} />
        <InfoLabel label="Categoria" value={categoria && categoria.length >0 ? categoria[0]: undefined} />
        <InfoLabel label="Tipo" value={useType} />
        {nuevo? null : <InfoLabel label="Estética" value={estetica} />}
      </Row>
    </section>
  )
}

export default ShortDataCard;
