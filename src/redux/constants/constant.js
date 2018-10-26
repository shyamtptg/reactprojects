

//Protocol 
export const protocol_https='https://';
export const protocol_http='http://';

//Domain
export const domain_myinno='myinno.myglu.com';
export const domain_mahesh='mahesh.myglu.com'


export const USER_TOKEN = 'TOKEN_USER';
export const USER_SIGNUP = 'USER_SIGNUP';
export const UPDATE_USER= 'UPDATE_USER';
export const FORGOT_USER= 'UPDATE_USER';
export const GET_VALIDATE='GET_VALIDATE';
export const GET_USER='GET_USER';
export const GET_LOGINTWILIO='GET_LOGINTWILIO';
export const GET_TWILIO='GET_TWILIO';
export const GET_EMAIL_VALIDATE='GET_EMAIL_VALIDATE';
export const GET_RESEND_VALIDATE='GET_RESEND_VALIDATE';

//Login
export const LOGIN_URL = protocol_https+domain_myinno+'/oxauth/restv1/token';
export const GET_USERLOGIN_URL = protocol_https+domain_myinno+'/oxauth/restv1/token';

//Signup
export const SIGNUP_URL =protocol_http+domain_mahesh+'/jemstepUser/user/createUser';
export const GETUSERS_URL = protocol_http+domain_mahesh+'/jemstepUser/user/retrievUser';
export const UPDATE_USER_URL = protocol_http+domain_mahesh+'/jemstepUser/user/userUpdate';

//Validation
export const GET_EMAIL_URL = protocol_http+domain_mahesh+'/jemstepUser/user/emailOtpUser';
export const GET_RESEND_URL = protocol_http+domain_mahesh+'/jemstepUser/user/emailOtpUser';


//Twilio
export const GET_LOGINURL_TWILIO = protocol_http+domain_mahesh+'/jemstepUser/user/userInfo';
export const GET_TWILIO_URL ='https://api.twilio.com/2010-04-01/Accounts/AC9d24e8015e42295d43e643093fdb6f24/Messages.json';


//Forgot user

export const FORGOT_USER_URL = protocol_http+domain_mahesh+'/jemstepUser/user/forgotUserInfo';
