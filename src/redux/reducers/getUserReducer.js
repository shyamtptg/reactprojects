import { GET_USER } from '../constants/constant';

const initialState = {
    getUser: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_USER:
        return {
            ...state,
            getUser: action.data
        }
        default:
        return state;
       

        
    }
};