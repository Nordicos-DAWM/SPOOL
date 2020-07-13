import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "shards-ui/dist/css/shards.min.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardIcon, Hero, Banner, NavBarSPOOL, ProjectInfo, Footer} from './components';
import {Project} from './pages'
import MainRouter from './router';

/*
  ReactDOM.render(
  <React.StrictMode>
    <MainRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <React.StrictMode>
    <Project/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();