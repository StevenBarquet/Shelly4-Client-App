// ---Dependencys
import React from 'react';
// ---Components
import ProductDetail from 'Cont/ProductDetail';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
const ProductDetailPage = () : React.ReactElement => {
  return (
    <>
      <CustomHelmet pageName="ProductDetailPage" />
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
