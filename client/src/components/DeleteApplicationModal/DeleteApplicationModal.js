import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteApplicationModal (props) {
    const handleDelete = () =>{
        //manejar borrado de aplicació
        
    }
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Aplicación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>¿Estas seguro de que deseas eliminar esta Aplicación?</h5>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>No</Button>
                <Button variant="danger" onClick={handleDelete}>Si</Button>
            </Modal.Footer>
        </Modal>
    )

}
export {DeleteApplicationModal};