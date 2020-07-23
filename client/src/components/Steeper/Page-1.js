import React from 'react';

const Page1 = (props) =>{

    
    const values = props.values;

    function nextStep(e){
        e.preventDefault();
        props.nextStep();
    }

    return( <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="title">Titulo el proyecto</label>
                                <input type="text" defaultValue={values.title} className="form-control" id="title" name='title' onChange={props.handleChange}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="category">Categoría principal</label>
                                <select id="category" name='category' defaultValue={values.category} className="form-control" onChange={props.handleChange}>
                                    <option>Desarrollo Web y Móvil</option>
                                    <option>IoT</option>
                                    <option>Ciencia de datos</option>
                                    <option>Robotica</option>
                                    <option>Gráficos y Multimedia</option>
                                    <option>Medicina</option>                                
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <label htmlFor="description">Descripción del proyecto</label>
                    <textarea className="form-control" id="description" defaultValue={values.description} name='description' rows="5" placeholder="" onChange={props.handleChange}></textarea>
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