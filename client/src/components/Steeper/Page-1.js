import React from 'react';
import { useState } from 'react';

const Page1 = (props) =>{

    
    const values = props.values;
    const [next,setNext] = useState(false);

    function nextStep(e){
        setNext(true)
        e.preventDefault();
        if(values.description && values.title && values.category){
            props.nextStep();
        }
        
    }

    return( <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="title">Titulo el proyecto</label>
                                <input type="text" defaultValue={values.title} className={"form-control "+(next && !values.title? 'is-invalid':'')} id="title" name='title' onChange={props.handleChange}/>
                                {next && !values.title &&
                                    <div className="invalid-feedback">Title is required</div>
                                }
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="category">Categoría principal</label>
                                <select id="category" name='category' defaultValue={values.category} className={"form-control "+(next && !values.category? 'is-invalid':'')} onChange={props.handleChange}>
                                    <option defaultValue>Selecciona una categoría</option>
                                    <option>Desarrollo Web y Móvil</option>
                                    <option>IoT</option>
                                    <option>Ciencia de datos</option>
                                    <option>Robotica</option>
                                    <option>Gráficos y Multimedia</option>
                                    <option>Medicina</option>                                
                                </select>
                                {next && !values.category &&
                                    <div className="invalid-feedback">Category is required</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <label htmlFor="description">Descripción del proyecto</label>
                    <textarea className={"form-control "+(next && !values.category? 'is-invalid':'')} id="description" defaultValue={values.description} name='description' rows="5" placeholder="" onChange={props.handleChange}></textarea>
                    {next && !values.description &&
                                    <div className="invalid-feedback">description is required</div>
                                }
                </div>
                
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary" onClick={nextStep}>Siguiente</button>
                </div>
            </div>
        </div>
    </>);
}

export default Page1