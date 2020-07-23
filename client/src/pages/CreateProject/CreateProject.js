import React from 'react';
import {Steeper,NavBar2,Footer} from '../../components'
const CreateProject = () =>{
    return(
        <> 
        <NavBar2 userType='client' isLoggedIn= {true}/>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Creación de Proyectos</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <Steeper/>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <Footer/>
        </>
    );
};

export {CreateProject};
