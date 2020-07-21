import React from 'react';
import {CategoriesPlot,SkillsPlot,FacultyGraph,MatterGraph} from '../../components';
const ChartsPage = () =>{
    return(
        <>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Estadísticas</h1>
                            <p className="lead mb-0">Gráficas de datos de la aplicación.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        <SkillsPlot/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        <CategoriesPlot/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        <MatterGraph/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        <FacultyGraph/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export {ChartsPage};