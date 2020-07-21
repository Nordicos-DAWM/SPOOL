import React, { Fragment,useState } from "react";
import {NavBarSPOOL, ProjectInfoEditable, Footer, Proposal} from '../../components';
import "./style.css";
let project = {
  description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab fuga natus laborum, nihil earum nostrum porro, magnam laudantium eaque, eos quisquam! Molestiae consequatur assumenda suscipit ipsa blanditiis corporis eveniet.",
  proposer : "Taika Waititi",
  email : "example.gmail.com",
  maxParticipants : 0,
  mainCategory: "Desarrollo web",
  state : "Activo",
  name : "Ejemplo de un título de proyectooo",
  color : "5ED46A",
  categories: ["Category 1","category2","cat3"],
  skills:["Habilidad 1", "Habilidad2", "abilidad sin h"]
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
      <div className="container">

      <h4 class="mb-3">Información del proyecto</h4>

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