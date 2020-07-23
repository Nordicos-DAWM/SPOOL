import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Home,HowWorks,CreateProject,DeveloperTeam,PageNews,ChartsPage,LoginHome,RegisterHome,RegisterStudent,RegisterClient,Login,ApplicationStudents,Project,Help,ProjectProposer
,Pool,ClientPool} from '../pages';

const MainRouter = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/help" component={Help}/>
                <Route exact path="/proposer/project" component={ProjectProposer}/>
                <Route exact path="/pool" component={Pool}/>
                <Route exact path="/clientPool" component={ClientPool}/>
                <Route path="/how-start" component={HowWorks}/>
                <Route path="/create-project" component={CreateProject}/>
                <Route path="/our-team" component={DeveloperTeam}/>
                <Route path="/news" component={PageNews}/>
                <Route path="/charts" component={ChartsPage}/>
                <Route path="/applications" component={ApplicationStudents}/>
                <Route path="/register/student" component={RegisterStudent}/>
                <Route path="/register/client" component={RegisterClient}/>
                <Route path="/register" component={RegisterHome}/>
                <Route path="/login/home" component={LoginHome}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default MainRouter;