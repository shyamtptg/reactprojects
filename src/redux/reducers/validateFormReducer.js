import { GET_VALIDATE } from '../constants/constant';

const initialState = {
    getValidate: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_VALIDATE:
        return {
            ...state,
            getValidate: action.data
        }
        default:
        return state;
       

        
    }
};