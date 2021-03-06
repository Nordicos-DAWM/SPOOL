import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

function NewModal (props){
    const [inputs,setInputs] = useState({
        title:props.title,
        date:props.date,
        content:props.content
    })
    const {title,date,content} = inputs;

    function handleChange(e){
        const {name,value} = e.target;
        setInputs(inputs=>({...inputs,[name]:value}))
    }
    const [submitted,setSubmitted] = useState(false);

    function handleSubmit (e) {
        e.preventDefault();
        setSubmitted(true);
        //Crear o modificar una noticia
    }
    return(
        <Modal {...props}>
            <Modal.Header closeButton className="container"> 
                <Modal.Title>Noticia</Modal.Title>  
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <div className="form-group">
                        <label htmlFor="title">Titulo:</label>
                        <input 
                            type="text"
                            name="title" 
                            id="title"
                            defaultValue={title}  
                            onChange={handleChange}
                            className={'form-control' + (submitted && !title ? ' is-invalid' : '')} />
                                    {submitted && !title &&
                                        <div className="invalid-feedback">Title is required</div>
                                    }
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Fecha:</label>
                        <input 
                            type="date"
                            name="date" 
                            id="date" 
                            defaultValue={date} 
                            onChange={handleChange}
                            className={'form-control' + (submitted && !date ? ' is-invalid' : '')} />
                                    {submitted && !date &&
                                        <div className="invalid-feedback">Date is required</div>
                                    }
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Contenido:</label>
                        <textarea 
                            name="content" 
                            id="content" 
                            defaultValue={content} 
                            onChange={handleChange}
                            className={'form-control' + (submitted && !content ? ' is-invalid' : '')} />
                            {submitted && !content &&
                                <div className="invalid-feedback">Content is required</div>
                            }
                    </div>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export {NewModal}