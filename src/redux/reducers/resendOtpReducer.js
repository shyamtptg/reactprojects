import { GET_RESEND_VALIDATE} from '../constants/constant';

const initialState = {
    getResendOtp: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_RESEND_VALIDATE:
        return {
            ...state,
            getEmailValidate: action.data
        }
        default:
        return state;
       

        
    }
}; 