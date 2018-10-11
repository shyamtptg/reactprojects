import { GET_TWILIO } from '../constants/constant';

const initialState = {
    getTwilioUser: []
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_TWILIO:
        return {
            ...state,
            getTwilioUser: action.data
        }
        default:
        return state;
       

        
    }
};