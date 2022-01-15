import React,{useState,useEffect} from 'react';
import {ReportTable,NavBar2,Preloader} from '../../components';
import {userService,projectService} from '../../_services';
const Reports = () => {
    const [selectOp,setSelectOp] = useState('users');
    const [filter,setFilter] = useState('');
    const [userData,setUserData] = useState(null);
    const [projectData,setProjectData] = useState(null);
    const [loading,setLoading] = useState({user:true,project:true,userData:true,projectData:true});
    const  [userTypes,setUserTypes] = useState(null);
    const  [projectTypes,setProjectTypes] = useState(null);

    const handleChange = (e) => {
        setSelectOp(e.target.value);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }


    useEffect(() => {
        function fetchUserTypes(){
            userService.getTypes()
            .then(
                types =>{
                    setUserTypes(types);
                    setLoading({...loading,user:false})
                },
                error =>{
                    console.log(error);
                }
            )
        }
        function fetchUserData(){
            userService.getReports()
            .then(
                reports =>{
                    setUserData(reports);
                    setLoading({...loading,userData:false})
                },
                error =>{
                    console.log(error);
                }
            )
        }
        function fetchProjectTypes(){
            projectService.getTypes()
            .then(
                types =>{
                    setProjectTypes(types);
                    setLoading({...loading,project:false});
                },
                error =>{
                    console.log(error);
                }
            )
        }
        function fetchProjectData(){
            projectService.getReports()
            .then(
                reports =>{
                    setProjectData(reports);
                    setLoading({...loading,projectData:false})
                },
                error =>{
                    console.log(error);
                }
            )
        }
        fetchUserTypes();
        fetchUserData()
        fetchProjectTypes();
        fetchProjectData()
    }, []);


    function transformUser(user){
        return {userId:user.userId,user:user.email,type:user.type,timestamp:user.timestamp}
    }

    function transformProject(project){
        return {projectId:project.userId,type:project.mainCategory,stateBefore:project.stateBefore,stateNow:project.stateNow,timestamp:project.timestamp}
    }

    if(loading.user && loading.project && loading.projectData && loading.userData){
        return <Preloader/>
    }
    return (
        <>  
            <NavBar2 userType='admin' isLoggedIn={true} activePage='adminReports'/>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Reportes</h1>
                            <p className="lead mb-0">Aquí se presentan los reportes de datos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-3 pb-0">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <p className="lead mb-0">Tabla</p>
                                        <select className="form-control" id="table" onChange={handleChange}>
                                            <option value='users'>Usuarios</option>
                                            <option value='projects'>Proyectos</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <p className="lead mb-0">Tipo</p>
                                        <select className="form-control" id="type" onChange={handleFilterChange}>
                                        <>
                                            { selectOp==='users' && userTypes && userTypes.map((type)=>{
                                                return(<option value={type.type}>{type.type}</option>)
                                            })
                                            }
                                        
                                            { selectOp==='projects' && projectTypes && projectTypes.mainCategories.map((type)=>{
                                                return(<option value={type.toLowerCase()}>{type.toLowerCase()}</option>)
                                                })
                                            }  
                                        </>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-2 pb-0">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col">
                            {
                                selectOp=='users' && userData && <ReportTable columns={['#','Usuario','Tipo','Timestamp']} data={userData.map((user)=>transformUser(user))} filter={filter}/>
                            }
                            {
                                selectOp=='projects' && projectData && <ReportTable columns={['#','Categoria','Estado Anterior','Estado Actual','Timestamp']} data={projectData.map((project)=>transformProject(project))} filter={filter}/>
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export { Reports };