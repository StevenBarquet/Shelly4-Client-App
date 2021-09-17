// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Error404Cont from 'Cont/Error404Cont';

// ------------------------------------------ COMPONENT-----------------------------------------
const Error404Page = () => (
  <>
    <Helmet>
      <title>Ups! Error 404</title>
    </Helmet>
    <Error404Cont />
  </>
);

export default Error404Page;
