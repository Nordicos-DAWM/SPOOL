import React,{useState} from "react";
import {contactService} from '../../_services';

function ContactUs(props) {
    const [inputs,setInputs] = useState({
        name:'',
        birth:'',
        mail:'',
        message:''
    });

    const [alert,setAlert] = useState(null)

    function handleInputs(e){
        const {name,value} = e.target;
        setInputs(inputs => ({...inputs,[name]:value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        contactService.sendMail(inputs)
            .then(
                message =>{
                    console.log(message);
                    setAlert({
                        message:message.message,
                        isValid:true
                    })
                },
                error =>{
                    setAlert({
                        message:error.message,
                        isValid:false
                    })
                }
            )
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6">
                <div class="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" class="form-control" name="name"  placeholder="Nombre" onChange={handleInputs}/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="form-group">
                    <label htmlFor="date">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" name="birth"  placeholder="Nombre" onChange={handleInputs}/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label htmlFor="exampleInputEmail1">Correo de Contacto</label>
            <input type="email" class="form-control" name="mail"  placeholder="Correo" onChange={handleInputs}/>
        </div>
        <div class="form-group">
            <label htmlFo="proposal">Escriba su mensaje</label>
            <textarea class="form-control" name="message" placeholder="Escriba aquí" required onChange={handleInputs}/>
        </div>
        { alert && 
            <div><p className='text-center' style={{color:(alert.isValid ? '#28a745':'#dc3545')}}>{alert.message}</p></div>
        }
        <div class="text-center">
            <button type="submit" class="center-block btn btn-primary">Enviar</button>
        </div>
        
    </form>
    );
}


export { ContactUs };