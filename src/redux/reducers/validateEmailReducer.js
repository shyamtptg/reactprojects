import { GET_EMAIL_VALIDATE} from '../constants/constant';

const initialState = {
    getEmailValidate: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_EMAIL_VALIDATE:
        return {
            ...state,
            getEmailValidate: action.data
        }
        default:
        return state;
       

        
    }
}; 