import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardIcon} from './components';
import {MyFirstComponent} from './pages/index';

import {Hero} from './components';
var obj = {name:'camilo'}
ReactDOM.render(
  <React.StrictMode>
      <Hero/>
    <CardIcon/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
