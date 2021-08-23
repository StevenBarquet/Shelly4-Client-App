// ---Dependencys
import React from 'react';
// ---Components
import ProductList from 'Cont/ProductList';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
const ProductListPage = () : React.ReactElement => {
  return (
    <>
      <CustomHelmet pageName="ProductListPage" />
      <ProductList />
    </>
  );
};

export default ProductListPage;
