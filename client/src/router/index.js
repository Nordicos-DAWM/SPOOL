import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Home,HowWorks,CreateProject,DeveloperTeam,PageNews,ChartsPage} from '../pages';

const MainRouter = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/como-empezar" component={HowWorks}/>
                <Route path="/work" component={CreateProject}/>
                <Route path="/our-team" component={DeveloperTeam}/>
                <Route path="/news" component={PageNews}/>
                <Route path="/charts" component={ChartsPage}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}
export default MainRouter;
