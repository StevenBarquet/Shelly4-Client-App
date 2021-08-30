// ---Dependencys
import React from 'react';
import { Row } from 'antd';
// ---CommonComps
import ProductBox from 'CComps/ProductBox';
// ---Types
import { Product } from '@Reducers/home/customTypes';


// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productsData?: Array<Product>;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function Destacados(props: Props) : React.ReactElement | null {
  const { productsData } = props
  if(productsData && productsData.length> 0)
    return (
      <div className="destacados-cont">
        <h1>Destacados</h1>
        <Row>
          {productsData.map( producto => <ProductBox key={producto._id} producto={producto} />)}
        </Row>
      </div>
    );
  return null
}

export default Destacados;
