import React,{useState} from 'react';

const Login = () =>{
    const [inputs,setInputs] = useState({
        username:'',
        password:''
    });
    const [submitted,setSubmitted] = useState(false);
    const {username,password} = inputs;

    function handleChange (e) {
        const { name, value } = e.target;
        setInputs(inputs=>({ ...inputs, [name]:value }))
    }

    function handleSubmit (e) {
        e.preventDefault();
        setSubmitted(true);
        //Realizar verificacion de usuario
    }

    return(
        <div className="container">
            <div className="col-md-8 offset-md-2">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-lg-6">
                        <div id="form-container" className="text-center py-4 px-5">
                        <h3>Spool</h3>
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                            <input
                                type="email"
                                name="username"
                                defaultValue={username}
                                onChange={handleChange}
                                placeholder="Ingresa tu correo electrónico"
                                className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                                {submitted && !username &&
                                    <div className="invalid-feedback">Username is required</div>
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
                            <button className="btn btn-primary">
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
export {Login};
