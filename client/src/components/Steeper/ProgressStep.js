import React from 'react';
import './ProgressStep.css'

const ProgressStep = (props) => {
    return(
        <>
            <div className="row mb-5">
                <div className="col-xs-12 col-md-10 offset-md-1 block" style={{zIndex:'10'}}>
                    <div className="wrapper-progressBar">
                        <ul className="progressBar pl-0">
                            <li className={props.step >= 0?"active":""}>Datos del proyecto</li>
                            <li className={props.step >= 1?"active":""}>Categorias y Habilidades</li>
                            <li className={props.step >= 2?"active":""}>Personalización</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default ProgressStep;
