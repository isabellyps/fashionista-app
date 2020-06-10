import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import App from '../src/pages/home/App';
import NotFound from './pages/not-found/not-found';
import Product from './pages/product/product';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/product' component={Product} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
