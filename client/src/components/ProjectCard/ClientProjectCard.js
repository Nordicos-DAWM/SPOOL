import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css';
import {DeleteApplicationModal} from '../DeleteApplicationModal/DeleteApplicationModal';

function ClientProjectCard(props) {
    const [openDelete,setOpenDelete] = useState(false);

    const handleOpenDelete =(e)=>{
        e.preventDefault();
        setOpenDelete(true);
        
    }

    const project = {...props,
        type:"Proyecto"
    }

    function colorText(){
        if(props.state==='Disponible'){
            return "text-success"
        }else{
            return "text-warning"
        }
    }
    return(
        <>
        <div className="project-card col-md-4 mb-5">
            <div className="bg-white pb-1 shadow-sm rounded">
                <div className="color-card" style={{backgroundColor:props.color}}/>
                <div className="m-4">
                    <h3 className="text-center">{props.title}</h3>
                    <div className="row mb-3 mx-1 d-flex justify-content-between">
                        <span className={"text-2 d-inline-flex d-sm-block text-center py-1 "+colorText()}>{props.state}</span>
                        <span id="project-category" className="text-2 d-inline-flex d-sm-block text-center py-1 px-2 rounded bg-primary text-light">{props.mainCategory}</span>
                    </div>
                    <p className="text-2 line-height-4 text-justify">{props.description}</p>

                    <div className="row mx-1 d-flex justify-content-between">
                        <div className="d-inline-flex pt-2">
                            <label htmlFor="campana" className="text-3 bell">Eliminar Proyecto</label>
                            <div id="campana" style={{float:"left"}}>
                                
                                <i className="fas fa-trash pl-2 text-danger" onClick={handleOpenDelete}></i>
                                
                                <span className="badge badge-info">{props.applications}</span>
                            </div>
                        </div>
                        <div className="d-inline-flex">
                            <Link to={`/client/project/${props.id}`} className="btn btn-primary px-2 py-2">
                                <i className="fas fa-eye text-3 mr-2"></i>
                                Ver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DeleteApplicationModal {...project}show={openDelete} onHide={()=>setOpenDelete(false)}/>
        </>
    )
}

export { ClientProjectCard };