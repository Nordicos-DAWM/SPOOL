import React, { Fragment,useState } from "react";
import {NavBar2, ProjectInfo, Footer} from '../../components';


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

function Project(props) {
  const [data, setData] = useState(project);
    return (
    <Fragment>
      <NavBar2 userType='student' activePage='studentPool' isLoggedIn={true}/>
      <ProjectInfo data={data} setData={setData}/>
      <Footer/>
    </Fragment>
    );
  }

export { Project };