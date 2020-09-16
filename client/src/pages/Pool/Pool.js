import React, { useState, useEffect } from 'react';
import '../../index.css';
import { NavBar2, ProjectCard, Footer, Preloader} from '../../components';
import {projectService} from '../../_services'; 

function Pool() {
    /*
    const projectsG = [

        {
            id: '1',
            title: "Hydroplant",
            state: "Activo",
            mainCategory: "Otra",
            categories: ["Energía", "Ecología"],
            description: "Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular."
        },

        {
            id: '2',
            title: "BioGears",
            state: "Activo",
            mainCategory: "Medicina",
            categories: ["Biología Computacional", "Modelos Farmacológicos"],
            description: "La librería BioGears incluye modelos matemáticos para un amplia gama de sistemas, interfaces médicas y sustancias para la recuperación en tiempo real de un estado fisiológico preciso. Colabora con nosotros en GitHub y usa los tutoriales para guiar la integración de nuevas funcionalidades de BioGears."
        },

        {
            id: '3',
            title: "Inkscape",
            state: "Activo",
            mainCategory: "Gráficos y Multimedia",
            categories: ["Web", "SVG", "Diseño Gráfico"],
            description: "Es un editor de gráficos vectoriales con capacidades similares a Illustrator, CorelDraw o Xara X, utiliza el formato SVG para manejar funcionalidades como marcadores, clones y mezclas alpha. Es muy fácil editar nodos, realizar operaciones de ruta complejas, trazar mapas de bits y mucho más."
        },

        {
            id: '4',
            title: "Danni Seguridad",
            state: "Activo",
            mainCategory: "IoT",
            categories: ["Arduino", "Domótica", "Desarrollo Móvil"],
            description: "Iniciativa que ofrece una solución tecnológica para la seguridad y comodidad en el hogar, espacios públicos o privados; a través, de un sistema domótico con una red de sensores (fuego, alarma, luces, etc.) controlados con Arduino y con una interfaz de control por audio en cualquier tipo de dispositivo móvil."
        },

        {
            id: '5',
            title: "Electrobits",
            state: "Activo",
            mainCategory: "IoT",
            categories: ["Sensores", "Domótica", "Desarrollo Móvil"],
            description: "Ya no es necesario levantarse para saber si se quedó una luz encendida, puesto que gracias a Electrobits existe un nuevo producto tecnológico para el control total con un celular del encendido y apagado de las luces del hogar. La app creada se basó en una plataforma de desarrollo utilizada en el MIT."
        },

        {
            id: '6',
            title: "Flashing Lights",
            state: "Activo",
            mainCategory: "Desarrollo Web y Móvil",
            categories: ["Sociedad", "Inclusión"],
            description: "Esta propuesta de innovación social ofrece una solución tecnológica para mejorar la calidad de vida de las personas con discapacidad auditiva, a través de un innovador sistema de mensajes basado en un código luminoso para mejorar la comunicación con su entorno y crear sociedad más centrada en la inclusión."
        }

    ]
    */
    const [projects,setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading,setLoading] = useState(true);

    function filterCategories(event) {    
        let category = event.target.value;

        let filtered = projects.filter((val) => {
            return val.mainCategory.includes(category);
        })

        setFilteredProjects(filtered);
    }

    useEffect(() => {
        function fetchProjectData() {
            projectService.get()
                .then(
                    projects => {
                        setProjects(projects);
                        setFilteredProjects(projects);
                        setLoading(false);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
        fetchProjectData();
        
    }, [])


    if(loading){
        return <Preloader/>
    }
    return (
        <>
            <NavBar2 userType='student' isLoggedIn={true} activePage='studentPool' />
            <div id="contenido">

                <section className="section pt-5 pb-0">
                    <div className="container">

                        <div className="row mb-4">

                            <div className="text-3 col-md-3 offset-5 text-right font-weight-bold">
                                <label htmlFor="select-category" className="mt-1 py-2">Selecciona una categoria:</label>
                            </div>

                            <div className="col-md-4">
                                <select className="form-control shadow-none border-0" id="select-category" onChange={filterCategories}>
                                    <option value="">Todas las categorías</option>
                                    <option value="Desarrollo Web y Móvil">Desarrollo Web y Móvil</option>
                                    <option value="Bases de Datos">Bases de Datos</option>
                                    <option value="Computación en la Nube">Computación en la Nube</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Gráficos y Multimedia">Gráficos y Multimedia</option>
                                    <option value="IoT">IoT</option>
                                    <option value="Medicina">Medicina</option>
                                    <option value="Realidad virtual y aumentada">Realidad virtual y aumentada</option>
                                    <option value="Robótica">Robótica</option>
                                    <option value="Seguridad">Seguridad</option>
                                    <option value="Otra">Otra</option>
                                </select>
                            </div>

                        </div>


                        <div id="pool" className="row">

                            {filteredProjects && filteredProjects.map(project => (
                                <ProjectCard {...project} key={project.id} />

                            ))}

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export { Pool };




