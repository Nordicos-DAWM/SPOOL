import React, { useState } from 'react';
import './style.css'
import {projectService} from '../../_services';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProjectInfoEditable(props) {

        const [editableTitle, setEditableTitle] = useState(false);
        const [editableSecondaryInfo, setEditableSecondaryInfo] = useState(false);
        const [editableAditionalInfo, setEditableAditionalInfo] = useState(false);
        let nameRef = React.createRef();
        let proposerRef = React.createRef();
        let descriptionRef = React.createRef();
        let emailRef = React.createRef();
        let maxParticipantRef = React.createRef();
        let editedProject = {...props.data}


        let handleEditable= (e) =>{ 
            const {name} = e.target;
            if (name==="titleOpt")
                setEditableTitle(true);
            
            else if(name==="secondaryOpt")
                setEditableSecondaryInfo(true);

            else if (name==="aditionalOpt")
                setEditableAditionalInfo(true);

        }  
        let handleCancel= (e) =>{
            const {name} = e.target;
            if (name==="titleOpt")
                setEditableTitle(false);
            
            else if(name==="secondaryOpt")
                setEditableSecondaryInfo(false);

            else if (name==="aditionalOpt")
                setEditableAditionalInfo(false);
        }

        let handleSave = (e) =>{
            let {name} = e.target;
            if (name==="titleOpt"){
                let value = nameRef.current.value;
                props.setData(data => ({ ...data, "title": value }));
                editedProject['title'] = value;
                setEditableTitle(false);
            }
            if (name==="secondaryOpt"){
                let proposer = proposerRef.current.value;
                props.setData(data => ({ ...data, proposer }));
                editedProject['proposer'] = proposer;                
                setEditableSecondaryInfo(false);
            }
            if (name==="aditionalOpt"){
                let maxParticipants = maxParticipantRef.current.value;
                let description = descriptionRef.current.value;
                let email = emailRef.current.value;

                props.setData(data => ({ ...data, maxParticipants }));                
                props.setData(data => ({ ...data,  description }));                
                props.setData(data => ({ ...data, email }));
                editedProject['maxParticipants'] = maxParticipants;
                editedProject['description'] = description;              
                editedProject['email'] = email;
                setEditableAditionalInfo(false);
            }

            editProject(editedProject);
        }

        const editProject = (newProject) =>{
            let project = {
                "id": newProject.id,
                "title": newProject.title,
                "description": newProject.description,
                "maxParticipants": newProject.maxParticipants,
                "contactEmail": newProject.contactEmail,
            }
            console.log(project)
            projectService.update(project)
            .then(
                editedProject =>{
                    console.log(editedProject)
                },
                error =>{
                    console.log(error);
                }
            )
        }

        
    return (<>
            <div>
            <div className=" info" id="containerInfo">
                <div className="row bg-white row_info"> 
                    <div className="col-md-12 col-lg-12 col-sm-12 ">
                        
                        <span class="d-block text-right options ">
                        {
                            editableTitle
                        ?   <>
                            <a href="# " name="titleOpt" onClick={handleSave}>Guardar</a>
                            <a href="# " name="titleOpt" class="text-danger" onClick={handleCancel}>Cancelar</a>
                            </>
                        :   <a href="# " name="titleOpt" onClick={handleEditable} style={{color:'#fe9004'}}>Editar</a>
                        
                        }
                        </span>

                        <p className="text-4 mb-0">Título</p>
                        
                        {editableTitle
                        ? <input ref={nameRef} type="text" class="form-control"  defaultValue ={props.data.title} />
                        : <h5 >{ props.data.title }</h5>
                        }
                        


                    </div>
                </div>
                <div className="row bg-white row_info">
                            <div className="col-12">
                            <span class="d-block text-right options">
                                {
                                    editableSecondaryInfo
                                ?   <>
                                    <a href="# " name="secondaryOpt" onClick={handleSave}>Guardar</a>
                                    <a href="# " name="secondaryOpt" class="text-danger" onClick={handleCancel}>Cancelar</a>
                                    </>
                                :   <a href="# " name="secondaryOpt" onClick={handleEditable} style={{color:'#fe9004'}}>Editar</a>
                                
                                }
                            </span>

                            </div>
                            <div className="col-md-4 col-lg-5 col-sm-12 ">
                                <p className="text-4 mb-0">Propuesto por</p>
                                {editableSecondaryInfo
                                    ? <input ref={proposerRef} type="text" class="form-control"  defaultValue ={`${props.data.user.firstName} ${props.data.user.lastName}`} />
                                    : <h6 >{ props.data.user.firstName +' '+props.data.user.lastName  }</h6>
                                    }
                            </div>

                            <div className="col-md-4 col-lg-5 col-sm-12">
                                <p className="text-4 mb-0">Categoría principal</p>
                                <h6 >{ props.data.mainCategory }</h6>
                                
                            </div>
                            
                            <div className="col-md-3 col-lg-2 col-sm-12">
                                <p className="text-4 mb-0">Estado</p>
                                <span className="text-success">{props.data.state}</span>
                            </div>
                        
                </div>

                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 bg-primary text-white">
                        <div className="category_skills_div">
                            <h5 className="text-white">Categorías</h5>
                            {props.data.categories.map(i => <span className="badge badge-secondary badge-pill category"> {i.name}</span>)}
                        </div>
                        <div className="category_skills_div">
                            <h5 className="text-white">Habilidades</h5>
                            {props.data.skills.map(i => <span className="badge badge-light badge-pill text-dark category"> {i.name}</span>)}
                        </div>
                    </div>

                    <div className="col-lg-8 col-sm-12 col-md-8 bg-white ">
                        <div className ="row">
                            <div className="col-12">
                            <span class="d-block text-right options">
                                    {
                                        editableAditionalInfo
                                    ?   <>
                                        <a href="# " name="aditionalOpt" onClick={handleSave}>Guardar</a>
                                        <a href="# " name="aditionalOpt" class="text-danger" onClick={handleCancel}>Cancelar</a>
                                        </>
                                    :   <a href="# " name="aditionalOpt" onClick={handleEditable} style={{color:'#fe9004'}}>Editar</a>
                                    
                                    }
                            </span>
                                        
                            </div>
                            <div className="col-12 bg-white">
                                
                                <div className="card">
                                    
                                    <div className="card-body">

                                        <h5 className="display-5 card-title">Descripción</h5>
                                        {
                                        editableAditionalInfo
                                        ?    <textarea ref={descriptionRef} class="form-control" defaultValue={props.data.description} />
                                        :    <p className="card-text">{props.data.description}</p>
                                        
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className ="row">
                            <div className="col-lg-7 col-sm-12 col-md-6  bg-white">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className=" display-5 card-title">Contacto</h5>
                                        {
                                        editableAditionalInfo
                                        ?    <input ref={emailRef} class="form-control" defaultValue={props.data.contactEmail} />
                                        :   <p className="card-text">{props.data.contactEmail}</p>
                                        
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-sm-12 col-md-6  bg-white">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="display-5 card-title">Máximo participantes</h5>
                                        {
                                        editableAditionalInfo
                                        ?   <input ref={maxParticipantRef} class="form-control" defaultValue={props.data.maxParticipants} />
                                        :   <p className="card-text">{props.data.maxParticipants}</p>
                                        
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            </div>
            </>
        );
        
  }


export { ProjectInfoEditable };