import React,{useState,useEffect} from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import './styles.css'
import { applicationService } from '../../_services'
import { getUserId } from '../../_helpers';

function Application (props){
  const[open,setOpen] = useState(false);
  const [inputs,setInputs] = useState({
    reason:'',
    proposal:'',
    isSubject: false
  });

  const[isSubject,setIsSubject] = useState(false)
  const [userId,setUserId] = useState();
  function toggle() {
    setOpen(!open);
  }

  function handleChange(e){
    const {name,value} = e.target;
    setInputs(inputs=>({...inputs,[name]:value}))
  }

  function handleSubject(e){
    setIsSubject(!isSubject)
    setInputs(inputs=>({...inputs,isSubject:!isSubject}))
  }

  function handleSubmit(e){
    e.preventDefault();
    applicationService.add({...inputs,userId,state:"En espera"}).then(
        application=>{
          console.log(application)
        },
        error=>{
          //el encargado
        }
    )
  }
  useEffect(()=>{
    getUserId(setUserId)
  },[userId])
  return (
    <div>
      <Button className= "text-center" onClick={toggle}>Aplicar</Button>
      <Modal size="lg" open={open} toggle={toggle}>
        <ModalHeader>Aplicación</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
              <div class="form-group">
                  <label for="reason">Detalle el motivo por el cual desea aplicar a este proyecto</label>
                  <textarea class="form-control" id="reason" placeholder="Escriba aquí" name="reason" onChange={handleChange}required/>
                  <small id="help" class="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
              </div>
              <div class="form-group">
                  <label for="proposal">Escriba su propuesta</label>
                  <textarea class="form-control" id="proposal" placeholder="Escriba aquí" name="proposal" onChange={handleChange} required/>
                  <small id="help" class="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
              </div>
              
              <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="subject" name="isSubject" onChange={handleSubject}/>
                  <label class="form-check-label" for="subject">Este proyecto se llevará como proyecto en alguna materia</label>
              </div>
              <div class="text-center">
                  <button type="submit" class="center-block btn btn-primary">Aplicar</button>
              </div>
              
          </form>
      </ModalBody>
      </Modal>
    </div>
  );
  
}
export { Application };





