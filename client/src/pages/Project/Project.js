import React, { Fragment,useState,useEffect} from "react";
import {NavBar2, ProjectInfo, Footer,Preloader} from '../../components';
import {projectService} from '../../_services';

function Project({match}) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);

  useEffect(()=>{
    function fetchProjectData() {
      projectService.getById(match.params.id)
          .then(
              project => {
                  setProject(project);
                  setLoading(false);
              },
              error => {
                  console.log(error);
              }
          );
  }
  fetchProjectData();// eslint-disable-next-line
  },[])

  if(loading){
    return <Preloader/>
  }

  return (
    <Fragment>
      <NavBar2 userType='student' activePage='studentPool' isLoggedIn={true}/>
      <ProjectInfo {...project} key={project.id}/>
      <Footer/>
    </Fragment>
    );
  }

export { Project };