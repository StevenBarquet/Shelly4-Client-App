// ---Dependencys
import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import ProductListPage from 'Pages/ProductListPage';
import ProductDetailPage from 'Pages/ProductDetailPage';
import TrackerPage from 'Pages/TrackerPage';
import Error404Page from 'Pages/Error404Page';
// ---Components
import NavbarCont from 'Cont/NavbarCont';
import Footer from 'Comp/Footer';

function AppContainer() : ReactElement {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/productos" component={ProductListPage} />
        <Route exact path="/item" component={ProductDetailPage} />
        <Route exact path="/rastreo" component={TrackerPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default AppContainer;
