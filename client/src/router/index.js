import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createBrowserHistory } from 'history';

import {LoginHome,Home,RegisterHome,RegisterStudent,RegisterClient,Login} from '../pages';

const MainRouter = () =>{
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/loginHome" component={LoginHome}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/register" component={RegisterHome}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register/student" component={RegisterStudent}/>
                <Route exact path="/register/client" component={RegisterClient}/>
            </Switch>
        </Router>
    )
}
export default MainRouter;
