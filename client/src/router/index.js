import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {history} from '../_helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Home,HowWorks,CreateProject,DeveloperTeam,PageNews,ChartsPage,RegisterHome,RegisterStudent,RegisterClient,Login,ApplicationStudents,Project,Help,ProjectProposer
,Pool,ClientPool,NewsAdmin,Reports,AdminHome} from '../pages';


const MainRouter = () =>{
    
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/student/pool" component={Pool}/>
                <Route exact path="/student/project/:id" component={Project}/>
                <Route path="/student/applications" component={ApplicationStudents}/>

                
                <Route exact path="/client/project/:id" component={ProjectProposer}/>
                <Route path="/client/newproject" component={CreateProject}/>
                
                <Route exact path="/client/pool" component={ClientPool}/>

                <Route path="/register/student" component={RegisterStudent}/>
                <Route path="/register/client" component={RegisterClient}/>
                <Route path="/register" component={RegisterHome}/>
                <Route path="/login" component={Login}/>

                <Route path="/admin/charts" component={ChartsPage}/>
                <Route path="/admin/reports" component={Reports}/>
                <Route path="/admin/news" component={NewsAdmin}/>
                <Route path="/admin" component={AdminHome}/>
                <Route exact path="/help" component={Help}/>
                <Route path="/how-start" component={HowWorks}/>
                <Route path="/our-team" component={DeveloperTeam}/>
                <Route path="/news" component={PageNews}/>
                <Route exact path="/pool" component={Pool}/>
                <Route path="/" component={Home}/>
                
            </Switch>
        </Router>
    )
}

export default MainRouter;