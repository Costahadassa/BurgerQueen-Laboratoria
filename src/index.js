import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/Pages/Login/index.js';
import Register from '../src/Pages/Register/index.js';


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();