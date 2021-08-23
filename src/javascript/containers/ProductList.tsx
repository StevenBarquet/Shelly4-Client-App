// ---Dependencys
import React from 'react';
// ---Components
import TabMenu from 'Comp/ProductList/TabMenu';

function Test(props: { someNumber: number}) {
  const { someNumber } = props
  return (
    <div>
      {`Test : ${someNumber}`}
    </div>
  )
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ProductList () : React.ReactElement {
  return (
    <div className="products-cont">
      <TabMenu>
        <Test someNumber={2} />
        <span>cosassssssss</span>
        <Test someNumber={5} />
      </TabMenu>
    </div>
  );
}

export default ProductList;
