import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {history} from '../_helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Preloader} from '../components';
import {Home,HowWorks,CreateProject,DeveloperTeam,PageNews,ChartsPage,LoginHome,RegisterHome,RegisterStudent,RegisterClient,Login,ApplicationStudents,Project,Help,ProjectProposer
,Pool,ClientPool} from '../pages';


const MainRouter = () =>{
    
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false);
        },500)
    },[]);

    if(loading){
        return <Preloader/>
    }
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/student/pool" component={Pool}/>
                <Route exact path="/student/project" component={Project}/>
                <Route path="/student/applications" component={ApplicationStudents}/>

                <Route path="/client/charts" component={ChartsPage}/>
                <Route exact path="/client/project" component={ProjectProposer}/>
                <Route path="/client/newproject" component={CreateProject}/>
                <Route exact path="/client/pool" component={ClientPool}/>

                <Route path="/register/student" component={RegisterStudent}/>
                <Route path="/register/client" component={RegisterClient}/>
                <Route path="/register" component={RegisterHome}/>
                <Route path="/login/home" component={LoginHome}/>
                <Route path="/login" component={Login}/>

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