// ---Dependencys
import React, { useState } from 'react';
// ---Components
import Home from 'Comp/Home';

// ------------------------------------------ COMPONENT-----------------------------------------
function HomeCont() : React.ReactElement {
  const [showList, setShowList] = useState(false);
  function handleclick () {
    setShowList(!showList);
    console.log('cambio showList', showList);
  }

  return (
    <>
      <Home handleclick={handleclick} showList={showList} />
    </>
  );
}

export default HomeCont;
