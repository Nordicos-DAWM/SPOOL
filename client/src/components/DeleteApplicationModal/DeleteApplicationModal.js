import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import {newService } from '../../_services';

function DeleteApplicationModal (props) {
    let history = useHistory();
    const handleDelete = () =>{
        newService._delete(props.id)
            .then(
                deletedNew =>{
                    console.log(deletedNew);
                    history.go(0);
                },
                error =>{
                    console.log(error);
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