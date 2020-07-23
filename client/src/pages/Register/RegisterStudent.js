import React,{useState, useEffect} from 'react';
import logo from '../../assets/Brand-01.png';
import {putValidPass,putValidConfirmPass} from './validateForm';
import {loadFaculties,loadCareers} from './LoadData';

const RegisterStudent = () =>{
    const [inputs,setInputs] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        birthday:''
    });


    useEffect(()=>{
        loadFaculties();
    },[])

    const [submitted,setSubmitted] = useState(false);
    const {firstName,lastName,email,password,confirmPassword,faculty,career,birthday} = inputs;
    const [isOlder,setIsOlder] = useState(false);

    function handleChange (e) {
        const { name, value } = e.target;
        setInputs(inputs=>({ ...inputs, [name]:value }))
    }

    function handleSubmit (e) {
        e.preventDefault();
        setSubmitted(true);
        //Realizar verificacion de usuario
    }


      function validatePass(e){
          handleChange(e,confirmPassword);
          putValidPass(e.target.value,password);

      }

      function validateConfirmPass(e){
          handleChange(e);
          putValidConfirmPass(e.target.value,password);
      }

      function validateAge(e){
          handleChange(e);
          setIsOlder(isOlder(e.target.value));
      }

      function setFaculty(e){
          handleChange(e);
          loadCareers(e.target.value);
      }

      function seePassInfo(){
        let passMessage = document.getElementById("passMessage");
        passMessage.style.display = 'inline';
      }

      function hiddenPassInfo(){
        let passMessage = document.getElementById("passMessage");
        passMessage.style.display= 'none';
      }

      
      //Usa de 8 a 16 caracteres con una combinación de letras, números y mayúsculas
    return(
        <div className="container">
            <div className="col-md-10 offset-md-1">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-lg-12">
                        <div id="form-container" className="text-center py-4 px-5">
                            <a href="/">
                                <img src={logo} alt="Spool's logo" className="img-fluid mx-auto d-block" style={{maxWidth: "70%"}}/>
                            </a>
                            <h3 className="my-4">ESTUDIANTE</h3>
                            <form name="form" onSubmit={handleSubmit}>
                                <div class="form-row">
                                    <div className="form-group col-sm-12 col-md-6">
                                    <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={firstName}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu nombre"
                                    className={'form-control' + (submitted && !firstName ? ' is-invalid' : '')} />
                                    {submitted && !firstName &&
                                        <div className="invalid-feedback">First Name is required</div>
                                    }
                                    </div>

                                    <div className="form-group sol-sm-12 col-md-6">
                                    <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={lastName}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu apellido"
                                    className={'form-control' + (submitted && !lastName ? ' is-invalid' : '')} />
                                    {submitted && !lastName &&
                                        <div className="invalid-feedback">Last Name is required</div>
                                    }
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div className="form-group col-12">
                                    <input
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu correo electrónico"
                                    className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                                    {submitted && !email &&
                                        <div className="invalid-feedback">Email is required</div>
                                    }
                                
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div className="form-group col-12">
                                    <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    defaultValue={password}
                                    onChange={validatePass}
                                    placeholder="Ingresa una contraseña"
                                    onMouseOver={seePassInfo}
                                    onMouseOut={hiddenPassInfo}
                                    className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                                    {submitted && !password &&
                                        <div className="invalid-feedback">Password is required</div>
                                    }
                                    <div id="passMessage" style={{display:'none'}} className="text-muted">
                                        Usa de 8 a 16 caracteres con una combinación de minúsculas, mayúsculas y números.
                                    </div>
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div className="form-group col-12">
                                    <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    defaultValue={confirmPassword}
                                    onChange={validateConfirmPass}
                                    placeholder="Confirma tu contraseña"
                                    className={'form-control' + (submitted && !confirmPassword ? ' is-invalid' : '')} />
                                    {submitted && !confirmPassword &&
                                        <div className="invalid-feedback">Confirm password is required</div>
                                    }
                                
                                    </div>

                                </div>
                                
                                <div class="form-row">
                                    <div className="form-group col-12">
                                        <select className={'form-control custom-select' + (submitted && !faculty ? ' is-invalid' : '')} id="faculties" onChange={setFaculty}>
                                        <option selected disabled>Facultad</option>
                                        </select>
                                        {submitted && !faculty &&
                                        <div className="invalid-feedback">Faculty is required</div>
                                    }
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div className="form-group col-12">
                                        <select className={'form-control custom-select' + (submitted && !career ? ' is-invalid' : '')} id="careers">
                                        <option selected disabled>Carrera</option>
                                        </select>
                                        {submitted && !career &&
                                        <div className="invalid-feedback">Carrer is required</div>
                                    }
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div className="form-group col-12">

                                        <input
                                            type="date"
                                            name="birthday"
                                            defaultValue={birthday}
                                            onChange={validateAge}
                                            className={'form-control' + (submitted && !birthday ? ' is-invalid' : '')} />
                                            {submitted && !lastName &&
                                                <div className="invalid-feedback">Birthday is required</div>
                                            }
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-primary">Registrarse</button>
                                    </div>
                                
                                </div>
                                

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );

}

export {RegisterStudent};