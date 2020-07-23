import React, { Fragment,useState } from "react";
import {NavBar2, ProjectInfo, Footer} from '../../components';

let project = {
  description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab fuga natus laborum, nihil earum nostrum porro, magnam laudantium eaque, eos quisquam! Molestiae consequatur assumenda suscipit ipsa blanditiis corporis eveniet.",
  proposer : "Taika Waititi",
  email : "example.gmail.com",
  maxParticipants : 0,
  mainCategory: "Desarrollo web",
  state : "Activo",
  name : "Ejemplo de un título de proyectooo",
  color : "5ED46A",
  categories: ["Category 1","category2","cat3","cat4"],
  skills:["Habilidad 1", "Habilidad2", "abilidad sin h"]
}

function Project(props) {
  const [data, setData] = useState(project);
    return (
    <Fragment>
      <NavBar2 userType='student'/>
      <ProjectInfo data={data} setData={setData}/>
      <Footer/>
    </Fragment>
    );
  }

export { Project };