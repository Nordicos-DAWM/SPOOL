import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import { Route,Link } from 'react-router-dom';
import { Project } from '../../pages/';

function ApplicationModal (props){
const datos = {
    reason:'Somos un grupo de estudiantes este semestre estará aprendiendo "Desarrollo de Aplicacinoes web y móviles" que tiene especial interés en el tema ya que contamos con conocimientos sobre agricultura y biología.',
    proposal:"Desarrollo de una aplicació movil que permita monitorear los cúltivos hidropónicos, contará con conexión a cada una de las electrobombas de modo además se llevar control sobre los cultivos se pude también tenerlo sobre las electrobombas para darles mantimiento a tiempo y estar al tanto si una de ellas por algún motivo no está en funcionamineto",
    isSubject:true,
    state:"Revision",
    project:{
        link:"/#",
        title:"Hydroplant"
    }
}
    function colorText(){
        if(props.state==="Aprobado"){
            return "text-success"
        }else if(props.state==="Rechazado"){
            return "text-danger"
        }else{
            return "text-warning"
        }
    }

    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton className="container"> 
                <Modal.Title>Aplicación</Modal.Title>  
            </Modal.Header>

            <Modal.Body>
                <h5>Estado</h5>
                <p className={colorText()+" font-weight-bold"}>{props.state}</p>
                <h5>Motivo</h5>
                <p className="text-justify">{props.reason}</p>
                <h5>Propuesta</h5>
                <p className="text-justify">{props.proposal}</p>
                <h5>¿Es parte de una materia?</h5>
                {datos.isSubject ? <p>Si</p> :<p>No</p> }
                <h5>Proyecto</h5>
                <Link to={`/project/${props.projectId}`}>{props.project.title}</Link>
                
            </Modal.Body>
        </Modal>
        <Route path="/project/:projectId" component={Project}/>
        </>
    )

}

export {ApplicationModal}