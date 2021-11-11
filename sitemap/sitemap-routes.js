import React from 'react';
import { Route } from 'react-router';

export default (
  <Route>
    <Route path="/" />
    <Route exact path="/productos" />
    <Route exact path="/item" />
    <Route exact path="/rastreo" />
    <Route exact path="*" />
  </Route>
);
