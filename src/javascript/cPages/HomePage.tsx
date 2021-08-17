// ---Dependencys
import React from 'react';
// ---Components
import Home from 'Cont/Home';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
const HomePage = () : React.ReactElement => {
  return (
    <>
      <CustomHelmet pageName="HomePage" />
      <Home />
    </>
  );
};

export default HomePage;
