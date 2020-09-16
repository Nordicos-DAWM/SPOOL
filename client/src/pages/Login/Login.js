import React,{useState, useEffect} from 'react';
import logo from '../../assets/Brand-01.png';
import { Link } from 'react-router-dom';
import { userService } from '../../_services';
import { history } from '../../_helpers';



const Login = () =>{
    
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    });
    const [submitted,setSubmitted] = useState(false);
    const {email,password} = inputs;
    let alert = null

    useEffect(()=>{
        //logout
    });

    function handleChange (e) {
        const { name, value } = e.target;
        setInputs(inputs=>({ ...inputs, [name]:value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        setSubmitted(true);
        if(email && password){
            userService.login(email,password)
            .then(
                user =>{
                    localStorage.setItem("token", user.token);
                    const type= user.user.userTypeId;
                    if(type===1){
                        history.push('/student/pool')
                    }else if(type===2){
                        history.push('/client/pool')
                    }else{
                        history.push('/admin')
                    }


                    window.location.reload()
                },
                error=>{
                    alert = {message: error, type:"Danger"};//no hace na aiuda
                }
            )
        }
        
    }

    return(
        <div className="container">
            <div className="col-md-10 offset-md-1">
                {
                alert &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-lg-6">
                        <div id="form-container" className="text-center py-4 px-5">
                        <a href="/">
                            <img src={logo} alt="Spool's logo" className="img-fluid mx-auto d-block" style={{maxWidth: "100%"}}/>
                        </a>
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                defaultValue={email}
                                onChange={handleChange}
                                placeholder="Ingresa tu correo electrónico"
                                className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                                {submitted && !email &&
                                    <div className="invalid-feedback">email is required</div>
                                }
                            </div>
                            <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                defaultValue={password}
                                onChange={handleChange}
                                placeholder="Ingresa tu contraseña"
                                className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                                {submitted && !password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <button className="btn btn-primary"
                                onClick={()=>{
                                    /*let slug = query.get("slug");
                                    console.log(slug);
                                    if(slug === 'client'){
                                        history.push('/client/pool');
                                    }else{
                                        history.push('/student/pool');
                                    }*/
                                    //window.location.reload()
                                }}
                            >
                            {/*loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>*/}
                            Ingresar
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="text-center col-12 text-3">No tienes cuenta? <Link to="/register">Regístrate aquí!</Link></div>
            </div>
            </div>
        </div>
    );
};
export  {Login};
