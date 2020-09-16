import React from 'react';
import { useState } from 'react';
import {NewModal} from '../NewModal/NewModal';
import {DeleteApplicationModal} from '../DeleteApplicationModal/DeleteApplicationModal'

function NewCard(props){
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
    const text = {
        type:"Noticia"
    }
    

    return(
        <>
            <div className="col-md-12 mb-5 container">
                <div className="bg-white shadow-sm rounded p-4">
                    <div className="featured-box style-4 py-2 text-left row">
                        <h3 className="text-body text-7 mb-3 col-lg-11 col-9">{props.title}</h3>
                        <div className="col-lg-1 col-3">
                            <i className="fa fa-trash col-1 mt-2 text-right" onClick={handleOpenDelete}></i>
                            <i className="fas fa-edit col-1 mt-2 text-right"onClick={handleOpen}/>
                        </div>
                        
                        <p className="text-4 line-height-4 text-muted col-12">{props.date}</p>
                        <p className="text-4 line-height-4 col-12">{props.description}</p>
                    </div>
                </div>
            </div>
            <NewModal {...props} show={open} onHide={()=>setOpen(false)} isEdit={true}/>
            <DeleteApplicationModal {...text} show={openDelete} onHide={()=>setOpenDelete(false)} id={props.id}/>
        </>

    );

}

export {NewCard}