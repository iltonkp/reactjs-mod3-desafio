import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Sidebar from '../components/sidebar';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Sidebar />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
