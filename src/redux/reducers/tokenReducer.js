import { USER_TOKEN } from '../constants/constant';

const initialState = {
    userDetails: []
};

export default function (state=initialState,action){
    switch(action.type){
        case USER_TOKEN:
        return {
            ...state,
            userDetails:action.data
        }
        default:
        return state;
    }
};
