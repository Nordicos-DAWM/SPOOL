import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                loading:true
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                
            }

  }
}