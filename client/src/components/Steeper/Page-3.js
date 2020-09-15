import React from 'react';
import { getUserId } from '../../_helpers';
import { useEffect,useState } from 'react';

const Page3 = (props) =>{

    const values = props.values;
    const [userId,setUserId] = useState();
    useEffect(()=>{
        
        
        getUserId(setUserId)
    },[userId])

    return( <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="contactMail">Correo de contacto</label>
                        <input type="text" className="form-control" name="contactMail" id="contactMail"  defaultValue={values.contactMail} onChange={props.handleChange}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="respositoryURL">Url del repositorio</label>
                        <input type="text" className="form-control" name="respositoryURL" id="respositoryURL" defaultValue={values.respositoryURL} onChange={props.handleChange}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="color">Color de la tarjeta</label>
                        <input type="color" className="form-control-range" name="color" id="color" defaultValue={values.color} onChange={props.handleChange}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="maxParticipants">Maximo de participantes: {values.maxParticipants}</label>
                        <input type="range" className="form-control-range" min="0" max="7"  defaultValue={values.maxParticipants} name="maxParticipants" id="maxParticipants"  onChange={props.handleChange}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary mr-3" onClick={props.prevStep}>Atrás</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </>);
}

export default Page3