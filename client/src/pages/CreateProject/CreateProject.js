import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Steeper,NavBar2,Footer,Preloader} from '../../components'
import {projectService} from '../../_services';
import { getUserId } from '../../_helpers';
const CreateProject = () =>{
    const [userId,setUserId] = useState();
    

    let history = useHistory();

    useEffect(() => {
        getUserId(setUserId)
    },[userId])


    const createProject = (project) =>{
        projectService.add(project)
        .then(
            project =>{
                console.log(project);
                history.push("/client/pool");
            },
            error =>{
                console.log(error);
            }
        )
    }

    if(!userId){
        return <Preloader/>
    }

    return(
        <> 
        <NavBar2 userType='client' isLoggedIn= {true} activePage='clientPool'/>
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
                                    <Steeper createProject={createProject} userId={userId}/>
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
