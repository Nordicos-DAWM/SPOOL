import React from 'react';
import {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';



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
  console.log("PROPS DATA")
  console.log(props.data);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (e) =>{
      e.preventDefault();
      setShow(true);
    } 

    return (
        <>
        <a href=" " onClick={handleShow} class="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.data.username}</h5>
            <small>hace 2 día</small>
            </div>
            <p className="mb-1">{ props.data.proposal.substring(0,200)+"..."}</p>
            <small>{subjectLabel(props.data.isSubject)}</small>
        </a>

        <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Propuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h5>Aplicante</h5>
            <p>{props.data.name +"("+props.data.username+")"}</p>

            <h5>Propuesta</h5>
            <p>{props.data.proposal}</p>

            <h5>Motivo por el que aplicó</h5>
            <p>{props.data.reason}</p>

            <h5>Proyecto realizado para una materia</h5>
            <p> {isSubject(props.data.isSubject)} </p>
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
