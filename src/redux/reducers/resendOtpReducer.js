import { GET_RESEND_VALIDATE} from '../constants/constant';

const initialState = {
    getResendOtp: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_RESEND_VALIDATE:
        return {
            ...state,
            getResendOtp: action.data
        }
        default:
        return state;
       

        
    }
}; 