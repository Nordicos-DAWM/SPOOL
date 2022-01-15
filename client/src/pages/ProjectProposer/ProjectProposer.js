import React, { Fragment, useState, useEffect } from "react";
import { ProjectInfoEditable, Footer, Proposal, NavBar2, Preloader } from '../../components';
import { projectService,applicationService } from '../../_services';
import "./style.css";

/*const applications = [{
  id: 1,
  projectID: 2,
  reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
  proposal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.",
  isSubject: true,
  idStudent: 12,
  username: "rodemore",
  name: "Robert Moreno Carrillo"
}, {
  id: 2,
  projectID: 2,
  reason: "La la la laLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
  proposal: "la la la hey hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.",
  isSubject: true,
  idStudent: 12,
  username: "nicolsmael",
  name: "Nicol Gutierrez"
}, {
  id: 3,
  projectID: 2,
  reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
  proposal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.",
  isSubject: false,
  idStudent: 11,
  username: "dombpala",
  name: "Doménica Barreiro"
}]*/

function ProjectProposer({ match }) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const[applications,setApplications] = useState(null);

  useEffect(() => {
    function getAplications(id){
        applicationService.getByProject(id).then(
          applications=>{
            setApplications(applications)
          },error=>{
              //el encargado
          }
        );
      
    }
    function fetchProjectData() {
      projectService.getById(match.params.id)
        .then(
          project => {
            setProject(project);
            setLoading(false);
            getAplications(project.id);
          },
          error => {
            console.log(error);
          }
        );
    }
 
    fetchProjectData();// eslint-disable-next-line
    
  }, [])

  

  if (loading) {
    return <Preloader />
  }

  return (
    <Fragment>
      <NavBar2 userType='client' isLoggedIn={true} activePage='clientPool' />
      <div className="container mt-5">
        <ProjectInfoEditable data={project} setData={setProject}  />
        <hr class="mb-4" />
        <h4 class="mb-3">Propuestas</h4>
        {applications && applications.map(i => <Proposal key={i.id} data={i} applications={applications}/>)}
      </div>
      <Footer />
    </Fragment>
  );
}

export { ProjectProposer };