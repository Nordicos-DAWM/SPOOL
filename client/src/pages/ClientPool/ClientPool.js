import React from 'react';
import '../../index.css';
import {NavBar2, ClientProjectCard} from '../../components';


function ClientPool() {

    const projects = [

        {id:'2',
        title: "BioGears",
        state:"Activo",
        mainCategory:"Medicina",
        categories:["Biología Computacional","Modelos Farmacológicos"],
        description:"La librería BioGears incluye modelos matemáticos para un amplia gama de sistemas, interfaces médicas y sustancias para la recuperación en tiempo real de un estado fisiológico preciso. Colabora con nosotros en GitHub y usa los tutoriales para guiar la integración de nuevas funcionalidades  de BioGears.",
        applications: 2},
        
        {id:'3',
        title: "Inkscape",
        state:"Activo",
        mainCategory:"Gráficos y Multimedia",
        categories:["Web","SVG","Diseño Gráfico"],
        description:"Es un editor de gráficos vectoriales con capacidades similares a Illustrator, CorelDraw o Xara X, utiliza el formato SVG para manejar funcionalidades como marcadores, clones y mezclas alpha. Es muy fácil editar nodos, realizar operaciones de ruta complejas, trazar mapas de bits y mucho más.",
        applications: 6},
        
        {id:'5',
        title: "Electrobits",
        state:"Activo",
        mainCategory:"IoT",
        categories:["Sensores","Domótica","Desarrollo Móvil"],
        description:"Ya no es necesario levantarse para saber si se quedó una luz encendida, puesto que gracias a Electrobits existe un nuevo producto tecnológico para el control total con un celular del encendido y apagado de las luces del hogar. La app creada se basó en una plataforma de desarrollo utilizada en el MIT.",
        applications: 5},
        
        {id:'6',
        title: "Flashing Lights",
        state:"Activo",
        mainCategory:"Desarrollo Web y Móvil",
        categories:["Sociedad","Inclusión"],
        description:"Esta propuesta de innovación social ofrece una solución tecnológica para mejorar la calidad de vida de las personas con discapacidad auditiva, a través de un innovador sistema de mensajes basado en un código luminoso para mejorar la comunicación con su entorno y crear sociedad más centrada en la inclusión.",
        applications: 12}
    
    ]


    return(
        <>
        <NavBar2 userType='client' isLoggedIn={true} activePage='clientPool'/>
        <div id="contenido">

            <section className="section pt-5 pb-0">
                <div className="container">
                    <div className="row mx-0 mb-4 d-md-flex d-sm-block justify-content-between">
                        <h1 className="d-md-inline-flex d-sm-block text-primary text-9 mb-0">Mis Proyectos</h1>
                        <a className="btn btn-primary d-md-inline-flex d-sm-block px-2" href="/client/newproject">
                            <i className="fa fa-plus text-light pr-2 my-0"></i>
                            Nuevo Proyecto
                        </a>
                    </div>

                    <div id="pool" className="row">

                        {projects && projects.map(project =>(
                            <ClientProjectCard {...project} key={project.id}/>
                        ))}

                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export {ClientPool};