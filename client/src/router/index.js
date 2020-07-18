import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
import { createBrowserHistory } from 'history';

import {Pool, ClientPool} from '../pages';

const MainRouter = () =>{
  return(
    <Router history={createBrowserHistory()}>
      <Switch>
          <Route exact path="/pool" component={Pool}/>
          <Route exact path="/clientPool" component={ClientPool}/>
      </Switch>
    </Router>
  )
}
export default MainRouter;