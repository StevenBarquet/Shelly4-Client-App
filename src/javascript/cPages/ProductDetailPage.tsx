// ---Dependencys
import React from 'react';
// ---Components
import ProductDetail from 'Cont/ProductDetail';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ProductDetailPage() {
  return (
    <>
      <CustomHelmet pageName="ProductDetailPage" />
      <ProductDetail />
    </>
  );
}
