import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { applicationService } from '../../_services'

function DeleteApplicationModal (props) {
    const handleDelete = () =>{
        //manejar borrado de aplicació
        console.log("mnaejando lalal")
        applicationService.delete(props.id).then(
            application=>{
                console.log("se borro")
                window.location.reload()
            },error=>{
                //el encargado
            }
        )

        
    }
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar {props.type}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Estas seguro de que deseas eliminar esta {props.type}</h5>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>No</Button>
                <Button variant="danger" onClick={handleDelete}>Si</Button>
            </Modal.Footer>
        </Modal>
    )

}
export {DeleteApplicationModal};