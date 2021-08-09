// ---Dependencys
import React from 'react';
// ---Components
import HomeCont from 'Cont/HomeCont';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
const HomePage = () : React.ReactElement => {
  return (
    <>
      <CustomHelmet pageName="HomePage" />
      <HomeCont />
    </>
  );
};

export default HomePage;
