// ---Dependencys
import React from 'react';
// ---Components
import InDevelopment from 'Cont/InDevelopment';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
const TrackerPage = () : React.ReactElement => {
  return (
    <>
      <CustomHelmet pageName="TrackerPage" />
      <InDevelopment />
    </>
  );
};

export default TrackerPage;
