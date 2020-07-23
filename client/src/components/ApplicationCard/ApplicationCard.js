import React from 'react';
import { useState } from 'react';
import {ApplicationModal} from '../ApplicationModal/ApplicationModal'
import {DeleteApplicationModal} from '../DeleteApplicationModal/DeleteApplicationModal'


function ApplicationCard (props){
    const [open,setOpen] = useState(false);
    const handleOpen = (e)=>{
        e.preventDefault();
        setOpen(true);
        
    }
    const [openDelete,setOpenDelete] = useState(false);

    const handleOpenDelete =(e)=>{
        e.preventDefault();
        setOpenDelete(true);
        
    }
    function colorText(){
        if(props.state==="Aprobado"){
            return "text-success"
        }else if(props.state==="Rechazado"){
            return "text-danger"
        }else{
            return "text-warning"
        }
    }
    return (
        <>
        <div className="card container m-4">
            
            <div className="card-body row">
                <h5 className="card-title col-10 col-md-11 mt-2">{props.title}</h5>

                <i className="fa fa-trash col-2 col-md-1 mt-2 text-right" onClick={handleOpenDelete}></i>

                <p className={colorText()+" font-weight-bold col-12"}>{props.state}</p>    
                <p className="card-text col-12 text-justify">{props.description}</p>
                <a href=" " className="card-link col-12" onClick={handleOpen}>Ver más</a>   
            </div>
            
        </div>
        <ApplicationModal {...props} show={open} onHide={() => setOpen(false)}/>
        <DeleteApplicationModal show={openDelete} onHide={()=>setOpenDelete(false)}/>
        </>
        // react-bootstrap<ApplicationModal show={open} onHide={() => setOpen(false)}/>
        //<ApplicationModal open={open} toggle={toggle} key={props.id}/>
      );
    
}

export {ApplicationCard}