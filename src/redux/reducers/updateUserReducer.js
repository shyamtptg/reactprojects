import { UPDATE_USER } from '../constants/constant';

const initialState = {
    updateUser: []
};

export default function (state=initialState,action){
    switch(action.type){
        case UPDATE_USER:
        return {
            ...state,
            updateUser: action.data
        }
        default:
        return state;
       

        
    }
};