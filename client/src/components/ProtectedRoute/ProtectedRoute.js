import React,{useState,useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authService} from '../../_services';
import {Preloader} from '../../components';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [user,setUser] = useState(null);
    const [error, setError ] = useState(null); 

    useEffect(()=>{
        function fetchUserType(){
            authService.getUser()
            .then(
                user => {
                    setUser(user);
                },
                error =>{
                    setError(error);
                }
            )
        }
        fetchUserType();
    },[])
    if(!user){
        return <Preloader/>
    }
    return(
        <Route {...rest} render={props => {
                    if(user.id){
                        if(user.userTypeId === 1 ){
                            if( !props.location.pathname.includes('student')){
                                return <Redirect to={{ pathname: '/student/pool', state: { from: props.location } } }/>
                            }else{
                                return <Component {...props}/>
                            }
                        }
                        else if(user.userTypeId === 2){
                            if(!props.location.pathname.includes('client')){
                                return <Redirect to={{ pathname: '/client/pool', state: { from: props.location } } }/>
                            }else{
                                return <Component {...props}/>
                            }
                        }else if(user.userTypeId === 3){
                            if(!props.location.pathname.includes('admin')){
                                return <Redirect to={{ pathname: '/admin', state: { from: props.location } } }/>
                            }
                            else{
                                return <Component {...props}/>
                            }
                        }
                        else{
                            return <Redirect to={{ pathname: '/login', state: { from: props.location } } }/>
                        }
                    }else{
                        if(props.location.pathname.includes('register')){
                            return <Component {...props}/>
                        }else if(props.location.pathname.includes('client') || props.location.pathname.includes('student') || props.location.pathname.includes('admin')){
                            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                        }else{
                            return <Component {...props}/>
                        }
                        
                    }
                }
            }
        />
    )
}
    


export {ProtectedRoute};