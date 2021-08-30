// ---Dependencys
import React from 'react';
// ---Components
import ShortDataCard from 'Comp/ProductDetail/ShortDataCard';
// ---Types
import { Product } from '@Reducers/productDetail/customTypes'

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productDetail: Product | Record<string, never>
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ShortData(props: Props): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { productDetail  } = props
  
  // ----------------------- Render
  if(productDetail === {}){
    return null
  }
  return <ShortDataCard productDetail={productDetail} />
}

export default ShortData;
