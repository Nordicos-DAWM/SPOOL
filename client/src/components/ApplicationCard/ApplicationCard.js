import React from 'react';
import { useState } from 'react';
import {ApplicationModal} from '../ApplicationModal/ApplicationModal'


function ApplicationCard (props){
    const [open,setOpen] = useState(false);
    const handleOpen = (e)=>{
        e.preventDefault();
        setOpen(true);
        
    }

    function toggle () {
        setOpen(!open);
    }

    console.log(props);
    return (
        <>
        <div className="card container m-4">
            
            <div className="card-body row">
                <h5 className="card-title col-10 col-md-11 mt-2">{props.title}</h5>

                <i className="fa fa-trash col-2 col-md-1 mt-2 text-right"></i>

                <p className="card-text col-12 text-justify">{props.description}</p>
                <a href="#" className="card-link col-12" onClick={handleOpen}>Ver más</a>   
            </div>
            
        </div>
        <ApplicationModal show={open} onHide={() => setOpen(false)}/>
        </>
        // react-bootstrap<ApplicationModal show={open} onHide={() => setOpen(false)}/>
        //<ApplicationModal open={open} toggle={toggle} key={props.id}/>
      );
    
}

export {ApplicationCard}