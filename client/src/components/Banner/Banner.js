import React from 'react';
import '../../index.css';
import grupos from '../../assets/grupos.jpg';
import ideas from '../../assets/ideas.jpg';
import proyectos from '../../assets/proyectos.jpg';
import experiencias from '../../assets/experiencias.jpg';
function Banner(){
    return (
    <>
    <section className='section'>
        <div className='container overflow-hidden'>
            <div className='row'>
                <div className='col-lg-5 col-xl-6 d-flex'>
                    <div className='my-auto pb-5 pb-lg-0'>
                        <h2 className='text-9'>Spool es para todos</h2>
                        <p className='text-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis quae commodi veritatis modi perferendis. Porro ab eos ea magni facere necessitatibus molestias voluptates, vero voluptatibus hic amet animi autem adipisci officia, aliquam dolores, dignissimos earum nobis sapiente sed quod.
                        </p>
                    </div>
                </div>
                <div className='col-lg-7 col-xl-6'>
                    <div className="row banner style-2 justify-content-center">
                        <div className='col-12 col-sm-6 mb-4 text-center'>
                            <div className='item rounded shadow d-inline-block'>
                                <div className='caption rounded-bottom'>
                                    <h2 className='text-5 font-weight-400 mb-0'>Ideas</h2>
                                </div>
                                <div className='banner-mask'></div>
                                <img className='img-fluid' src={ideas} style={{width:'410', height:'350'}} alt='banner'/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 mb-4 text-center'>
                            <div className='item rounded shadow d-inline-block'>
                                <div className='caption rounded-bottom'>
                                    <h2 className='text-5 font-weight-400 mb-0'>Proyectos</h2>
                                </div>
                                <div className='banner-mask'></div>
                                <img className='img-fluid' src={proyectos} style={{width:'410', height:'350'}} alt='banner'/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 mb-4 mb-sm-0 text-center'>
                            <div className='item rounded shadow d-inline-block'>
                                <div className='caption rounded-bottom'>
                                    <h2 className='text-5 font-weight-400 mb-0'>Grupos de trabajo</h2>
                                </div>
                                <div className='banner-mask'></div>
                                <img className='img-fluid' src={grupos} style={{width:'410', height:'350'}}alt='banner'/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 text-center'>
                            <div className='item rounded shadow d-inline-block'>
                                <div className='caption rounded-bottom'>
                                    <h2 className='text-5 font-weight-400 mb-0'>Experiencias reales</h2>
                                </div>
                                <div className='banner-mask'></div>
                                <img className='img-fluid' src={experiencias} style={{width:'410', height:'350'}} alt='banner'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)}

export {Banner};