import React from 'react';
import { getUserId } from '../../_helpers';
import { useEffect,useState } from 'react';

const Page3 = (props) =>{

    const values = props.values;
    const [userId,setUserId] = useState();
    useEffect(()=>{
        
        
        getUserId(setUserId)
    },[userId])

    const [next,setNext] = useState(false);

    function createProject(e){
        setNext(true)
        e.preventDefault();
        if(values.contactMail && values.respositoryURL && values.maxParticipants){
            props.createProject();
        }
        
    }

    return( <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="contactMail">Correo de contacto</label>
                        <input type="email" className={"form-control "+(next && !values.contactMail? 'is-invalid':'')} name="contactMail" id="contactMail"  defaultValue={values.contactMail} onChange={props.handleChange}/>
                        {next && !values.contactMail &&
                                    <div className="invalid-feedback">Contact Mail is required</div>
                                }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="respositoryURL">Url del repositorio</label>
                        <input type="url" className={"form-control "+(next && !values.respositoryURL? 'is-invalid':'')} name="respositoryURL" id="respositoryURL" defaultValue={values.respositoryURL} onChange={props.handleChange}/>
                        {next && !values.respositoryURL &&
                                    <div className="invalid-feedback">Respository's URL is required</div>
                                }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="color">Color de la tarjeta</label>
                        <input type="color" className={"form-control-range "+(next && !values.color? 'is-invalid':'')} name="color" id="color" defaultValue={values.color} onChange={props.handleChange}/>
                        {next && !values.color &&
                                    <div className="invalid-feedback">Color is required</div>
                                }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="maxParticipants">Maximo de participantes: {values.maxParticipants}</label>
                        <input type="range" className={"form-control-range "+(next && !values.maxParticipants? 'is-invalid':'')} min="0" max="7"  defaultValue={values.maxParticipants} name="maxParticipants" id="maxParticipants"  onChange={props.handleChange}/>
                        {next && !values.maxParticipants &&
                                    <div className="invalid-feedback">Max Participants is required</div>
                                }
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary mr-3" onClick={props.prevStep}>Atrás</button>
                    <button type="submit" className="btn btn-primary" onClick={createProject}>Submit</button>
                </div>
            </div>
        </div>
    </>);
}

export default Page3