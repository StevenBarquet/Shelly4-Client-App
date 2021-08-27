// ---Dependencys
import React from 'react';
import { Row } from 'antd';
// ---Components
import ProductBox from 'CComps/ProductBox';
// ---Types
import { Product } from '@Reducers/home/customTypes';


// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productsData?: Array<Product>;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function MapProudcts(props: Props) : React.ReactElement | null {
  const { productsData } = props
  if(productsData && productsData.length> 0)
    return (
      <div className="destacados-cont">
        <Row>
          {productsData.map( producto => <ProductBox key={producto._id} producto={producto} />)}
        </Row>
      </div>
    );
  return <p>Busqueda sin resultados</p>
}

export default MapProudcts;
