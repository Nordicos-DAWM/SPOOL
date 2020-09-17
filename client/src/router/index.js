import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {history} from '../_helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Home,HowWorks,CreateProject,DeveloperTeam,PageNews,ChartsPage,RegisterHome,RegisterStudent,RegisterClient,Login,ApplicationStudents,Project,Help,ProjectProposer
,Pool,ClientPool,NewsAdmin,Reports,AdminHome} from '../pages';
import {ProtectedRoute} from '../components';


const MainRouter = () =>{
    
    return(
        <Router history={history}>
            <Switch>
                <ProtectedRoute exact path="/student/pool" component={Pool}/>
                <ProtectedRoute exact path="/student/project/:id" component={Project}/>
                <ProtectedRoute exact path="/student/applications" component={ApplicationStudents}/>

                
                <ProtectedRoute exact path="/client/project/:id" component={ProjectProposer}/>
                <ProtectedRoute exact path="/client/newproject" component={CreateProject}/>
                
                <ProtectedRoute exact path="/client/pool" component={ClientPool}/>

                <ProtectedRoute exact path="/register/student" component={RegisterStudent}/>
                <ProtectedRoute exact path path="/register/client" component={RegisterClient}/>
                <ProtectedRoute exact path path="/register" component={RegisterHome}/>
                <Route exact path path="/login" component={Login}/>

                <ProtectedRoute exact path="/admin/charts" component={ChartsPage}/>
                <ProtectedRoute exact path="/admin/reports" component={Reports}/>
                <ProtectedRoute exact path="/admin/news" component={NewsAdmin}/>
                <ProtectedRoute exact path="/admin" component={AdminHome}/>


                <ProtectedRoute exact path="/help" component={Help}/>
                <ProtectedRoute exact path="/how-start" component={HowWorks}/>
                <ProtectedRoute exact path="/our-team" component={DeveloperTeam}/>
                <ProtectedRoute exact path="/news" component={PageNews}/>
                <ProtectedRoute exact path="/pool" component={Pool}/>
                <ProtectedRoute path="/" component={Home}/>
                
            </Switch>
        </Router>
    )
}

export default MainRouter;