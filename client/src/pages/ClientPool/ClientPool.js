import React,{useState,useEffect} from 'react';
import '../../index.css';
import {NavBar2, ClientProjectCard, Preloader} from '../../components';
import {projectService} from '../../_services';
import { getUserId } from '../../_helpers';

function ClientPool() {

    const [loading, setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const [userId,setUserId] = useState();
    useEffect(()=>{
        function fetchProjects() {
            if(userId){
                projectService.getByUserId(userId)
                .then(
                    projects=>{
                        setProjects(projects)
                        setLoading(false);
                    },
                    error=>{
                        console.log(error)
                    }
                );
            }
        }
        
        getUserId(setUserId)
        fetchProjects()
    },[userId])

    if(loading){
        return <Preloader/>
    }

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