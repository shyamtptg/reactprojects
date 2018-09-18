import { USER_SIGNUP} from '../constants/constant';

const initialState = {
    userSignupDetails: []
    // error:''
};

export default function (state=initialState,action){
    switch(action.type){
        case USER_SIGNUP:
        return {
            ...state,
            userSignupDetails: action.data
        }
        // case USER_ERROR:
        // return{
        //   ...state,
        //   error:action.data
        // }
        default:
        return state;
       

        
    }
};
