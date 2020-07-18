import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createBrowserHistory } from 'history';

import {Help,Project, ProjectProposer} from '../pages';

const MainRouter = () =>{
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/help" component={Help}/>
                <Route exact path="/proposer/project" component={ProjectProposer}/>

            </Switch>
        </Router>
    )
}
export default MainRouter;
