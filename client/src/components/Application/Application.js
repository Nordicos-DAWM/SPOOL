import React,{useState,useEffect} from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import './styles.css'
import { applicationService } from '../../_services'
import { getUserId,history } from '../../_helpers';
import {Preloader} from '../Preloader/Preloader';

function Application (props){
  const[open,setOpen] = useState(false);
  const [inputs,setInputs] = useState({
    reason:'',
    proposal:'',
    isSubject: false
  });

  const[isSubject,setIsSubject] = useState(false)
  const [userId,setUserId] = useState();
  const [applicable,setAplicable] =useState(true);
  const [loading,setLoading] = useState(true);
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
    applicationService.add({...inputs,userId,state:"En espera",projectId:props.id}).then(
        application=>{
          history.replace('/student/applications')
          window.location.reload()
        },
        error=>{
          //el encargado
        }
    )
  }
  useEffect(()=>{
    function isApplicable(){
      if(userId){
        applicationService.getByUserId(userId).then(
          applications=>{
            applications.map(app=>{
              if(app.projectId==props.id){
                setAplicable(false);
              }
            });
            setLoading(false);
          }
        )
      }
      
    }

    getUserId(setUserId)
    isApplicable();
  },[userId])

  if(loading){
    return <Preloader/>
  }
  return (
    <div>
      {applicable ? <Button className= {"text-center" + ""} onClick={toggle}>Aplicar</Button> : <div className="text-success text-3"> Ya has aplicado para este proyecto</div>}
      <Modal size="lg" open={open} toggle={toggle}>
        <ModalHeader>Aplicación</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="reason">Detalle el motivo por el cual desea aplicar a este proyecto</label>
                  <textarea className="form-control" id="reason" placeholder="Escriba aquí" name="reason" onChange={handleChange}required/>
                  <small id="help" className="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
              </div>
              <div className="form-group">
                  <label htmlFor="proposal">Escriba su propuesta</label>
                  <textarea className="form-control" id="proposal" placeholder="Escriba aquí" name="proposal" onChange={handleChange} required/>
                  <small id="help" className="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
              </div>
              
              <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="subject" name="isSubject" onChange={handleSubject}/>
                  <label className="form-check-label" htmlFor="subject">Este proyecto se llevará como proyecto en alguna materia</label>
              </div>
              <div className="text-center">
                  <button type="submit" className="center-block btn btn-primary">Aplicar</button>
                  
              </div>
              
          </form>
      </ModalBody>
      </Modal>
    </div>
  );
  
}
export { Application };





