import { authService } from '../_services/';



export function getUserId(setUserId) {
    
    authService.getUser().then(
        user=>{
            setUserId(user.id)
        },
        error=>{
            //Aqui el encargado
            console.log(error)
        }
    )
}

export function getUserType(setUserType) {
    authService.getUser().then(
        user=>{
            setUserType(user.userTypeId)
        },
        error=>{
            //Aqui el encargado
            console.log(error)
        }
    )
}