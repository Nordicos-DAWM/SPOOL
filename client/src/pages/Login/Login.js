import React,{useState, useEffect} from 'react';
import logo from '../../assets/Brand-01.png';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {history} from '../../_helpers';
import { userActions } from '../../_actions';

    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

const Login = () =>{
    const query = useQuery();
    
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    });
    const [submitted,setSubmitted] = useState(false);
    const {email,password} = inputs;

    const alert = useSelector(state =>state.alert);
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userActions.logout());
    });

    function handleChange (e) {
        const { name, value } = e.target;
        setInputs(inputs=>({ ...inputs, [name]:value }))
    }

    function handleSubmit (e) {
        e.preventDefault();
        
        setSubmitted(true);
        /*if(email && password){
            dispatch(userActions.login(email,password,slug));
        }*/
        
    }

    return(
        <div className="container">
            <div className="col-md-10 offset-md-1">
                {
                alert.message &&
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
                                    let slug = query.get("slug");
                                    console.log(slug);
                                    if(slug === 'client'){
                                        history.push('/client/pool');
                                    }else{
                                        history.push('/student/pool');
                                    }
                                    window.location.reload()
                                }}
                            >
                            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Ingresar
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export  {Login};
