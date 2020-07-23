import React, { Fragment,useState } from "react";
import {ProjectInfoEditable, Footer, Proposal,NavBar2} from '../../components';
import "./style.css";
let project = {
  id:'2',
  title: "BioGears",
  state:"Activo",
  mainCategory:"Medicina",
  categories:["Biología Computacional","Modelos Farmacológicos"],
  description:"La librería BioGears incluye modelos matemáticos para un amplia gama de sistemas, interfaces médicas y sustancias para la recuperación en tiempo real de un estado fisiológico preciso. Colabora con nosotros en GitHub y usa los tutoriales para guiar la integración de BioGears.",
  proposer : "Taika Waititi",
  email : "robertmorenoc.gmail.com",
  maxParticipants : 0,
  color : "5ED46A",
  skills:["R", "SQL", "Python"]
}

const applications = [{ 
  id:1,
  projectID:2,
  reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
  proposal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.", 
  isSubject: true,
  idStudent: 12,
  username : "rodemore",
  name: "Robert Moreno Carrillo"
  }, { 
    id:2,
    projectID:2,
    reason: "La la la laLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
    proposal: "la la la hey hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.", 
    isSubject: true,
    idStudent: 12,
    username : "nicolsmael",
    name: "Nicol Gutierrez"
    }, { 
    id:3,
    projectID:2,
    reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
    proposal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.", 
    isSubject: false,
    idStudent: 11,
    username : "dombpala",
    name: "Doménica Barreiro"
    } ]

function ProjectProposer(props) {
  const [data, setData] = useState(project);
    return (
    <Fragment>
      <NavBar2 userType='client' isLoggedIn={true} activePage='clientPool'/>
      <div className="container mt-5">
      <ProjectInfoEditable data={data} setData={setData}/>
      <hr class="mb-4"/>
      <h4 class="mb-3">Propuestas</h4>
      {applications.map(i => <Proposal key={i.id} data={i}/>)}
      </div>
      <Footer/>
    </Fragment>
    );
  }

export { ProjectProposer };