import React,{useState} from 'react';
import {ReportTable,NavBar2} from '../../components';
const Reports = () => {
    const [selectOp,setSelectOp] = useState('users');
    const [filter,setFilter] = useState('');
    const handleChange = (e) => {
        setSelectOp(e.target.value);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
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
                                            { selectOp==='users' &&
                                                <>
                                                    <option value='admin'>Admin</option>
                                                    <option value='student'>Student</option>
                                                    <option value='client'>Client</option>
                                                </> 
                                            }
                                            { selectOp==='projects' &&
                                                <>
                                                    <option value='cs'>Computer Science</option>
                                                    <option value='math'>Math</option>
                                                    <option value='bd'>Big Data</option>
                                                </> 
                                            }  
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
                                <ReportTable columns={['#','FirstName','LastName','Type']} data={[{id:1,fn:'Aaron',ln:'Seth',type:'Student'},{id:3,fn:'Rubops',ln:'Omg',type:'Admin'},{id:4,fn:'Lero',ln:'Roo',type:'Client'}]} filter={filter}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export { Reports };