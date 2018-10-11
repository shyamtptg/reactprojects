import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import signupReducer from './signUpReducer';
import getUserReducer from './getUserReducer';
import resendOtpReducer from './resendOtpReducer'
import validateFormReducer from '../reducers/validateFormReducer';
import validateEmailReducer from '../reducers/validateEmailReducer';
import updateUserReducer from '../reducers/updateUserReducer';
import getUserTwilioReducer from '../reducers/getUserTwilioReducer';
// import userReducer from './userReducer';

const rootReducer = combineReducers({
    token:tokenReducer,
    signup:signupReducer,
    user:getUserReducer,
    getValidate:validateFormReducer,
    resendOtp:resendOtpReducer,
    getEmailValidation:validateEmailReducer,
    updateUser :updateUserReducer,
    getTwilio:getUserTwilioReducer
   
});

export default rootReducer;