import React  from 'react';
import Modal from 'react-bootstrap/Modal';

function ApplicationModal (props){
const datos = {
    reason:" tLorem Ipsumm is sim is sim is sim is sim is sim is sim is sim is sim is sim is sim is sim is sim is sim is sim is si is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    proposal:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    isSubject:true,
    project:{
        link:"/#",
        title:"Inserte título del project aquí"
    }
}


    return(
  
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Aplicación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>Motivo</h5>
                <p>{datos.reason}</p>
                <h5>Propuesta</h5>
                <p>{datos.proposal}</p>
                <h5>¿Es parte de una materia?</h5>
                {datos.isSubject ? <p>Si</p> :<p>No</p> }
                <h5>Proyecto</h5>
                <a href={datos.project.link}>{datos.project.title}</a>
            </Modal.Body>
        </Modal>
    )

}

export {ApplicationModal}