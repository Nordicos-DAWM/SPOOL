import React  from 'react';

import { NavBarSPOOL, ApplicationCard } from '../../components';

const ApplicationStudents = () =>{

    const datos = [
        {title:"Titulo proyecto",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ,id:1    
    },
        {title:"Titulo proyecto 2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ,id:2    
    },
        {title:"Titulo proyecto 3",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {title:"Titulo proyecto 4",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ,id:3    
    }

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

