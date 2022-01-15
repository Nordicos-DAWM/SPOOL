import React,{ useEffect,useState }  from 'react';

import { NavBar2, ApplicationCard, Footer } from '../../components';
import { applicationService } from '../../_services'
import { getUserId } from '../../_helpers';
const ApplicationStudents = () =>{

    const [datos,setDatos] = useState([]);
    const [userId,setUserId] = useState();

    useEffect(()=>{
        function fetchApplicationData() {
            if(userId){
                applicationService.getByUserId(userId)
                .then(
                    applications=>{
                        setDatos(applications)
                    },
                    error=>{
                        console.log(error)
                    }
                );
            }
        }
        
        getUserId(setUserId)
        fetchApplicationData()
    },[userId])
    
    return(

    <>
        
        <NavBar2 userType='student' isLoggedIn = 'true' activePage='studentApply'/>
        
        <div className="container">
            <div className="row mx-0 mb-4 d-md-flex d-sm-block justify-content-between">
                <h1 className="d-md-inline-flex d-sm-block text-primary text-9 mb-0">Mis Aplicaciones</h1>
            </div>
            <div className="row">

        
            {datos && datos.map(dato => (
                <ApplicationCard {...dato} key={dato.id} className="col-12"/>
            ))}

            </div>
        </div>

        <Footer/>

    </>
    )

}
export {ApplicationStudents}

