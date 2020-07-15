import React  from 'react';

import { NavBarSPOOL, ApplicationCard } from '../../components';

const ApplicationStudents = () =>{

    const datos = [

        {id:'1',
        title: "Hydroplant",
        state:"Activo",
        main_category:"Otra",
        categories:["Energía",""],
        state:"Aprobado",
        description:"Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular."},
        
        {id:'2',
        title: "Hydroplant",
        state:"Activo",
        main_category:"Otra",
        categories:["Energía",""],
        state:"Rechazado",
        description:"Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular."},
        
        {id:'3',
        title: "Hydroplant",
        state:"Activo",
        main_category:"Otra",
        state:"Revision",
        categories:["Energía",""],
        description:"Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular."},
        
        {id:'4',
        title: "Hydroplant",
        state:"Activo",
        main_category:"Otra",
        state:"Aprobado",
        categories:["Energía",""],
        description:"Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular."}
    
    ]
    return(

    <>
        <NavBarSPOOL/>
        <div className="container">
            <div className="row">

        
            {datos && datos.map(dato => (
                  <ApplicationCard {...dato} key={dato.id} className="col-12"/>
                 ))}

            </div>
        </div>

    </>
    )

}
export {ApplicationStudents}

