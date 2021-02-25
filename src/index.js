import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import Hall from './Pages/Hall/index';
import Kitchen from './Pages/Kitchen/index';

ReactDOM.render(
  <BrowserRouter>
   < Switch >
          <Route path='/' component={Login} exact/>
          <Route path='/register' component={Register}/>
          <Route path='/hall' component={Hall}/>
          <Route path='/kitchen' component={Kitchen}/>
        </Switch >
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();