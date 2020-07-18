import React from 'react';
import {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

const application = { 
    projectID:2,
    reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque numquam similique beatae nam unde est doloremque, autem tenetur hic tempore consectetur vitae eum expedita!",
    proposal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quis libero, odit consequatur omnis deserunt esse. Dicta fuga aliquam accusamus.", 
    isSubject: true,
    idStudent: 12,
    username : "rodemore",
    name: "Robert Moreno Carrillo"
    }  

let subjectLabel = (s) => {
    if (s){
        return "Considerada para una materia";
    }
    return "";
}
let isSubject = (s) => {
    if (s){
      return "Sí";
    }
    return "No";
}

function Proposal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <a href="#" onClick={handleShow} class="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{application.username}</h5>
            <small>hace 2 día</small>
            </div>
            <p className="mb-1">{ application.proposal.substring(0,200)+"..."}</p>
            <small>{subjectLabel(application.isSubject)}</small>
        </a>

        <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Propuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h5>Aplicante</h5>
            <p>{application.name +"("+application.username+")"}</p>

            <h5>Propuesta</h5>
            <p>{application.proposal}</p>

            <h5>Motivo por el que aplicó</h5>
            <p>{application.reason}</p>

            <h5>Proyecto realizado para una materia</h5>
            <p> {isSubject(application.isSubject)} </p>
            <br/>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            Aceptar aplicación
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Rechazar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

}

export {Proposal};
