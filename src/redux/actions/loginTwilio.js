import { GET_EMAIL_VALIDATE,GET_EMAIL_URL} from '../constants/constant';
import axios from 'axios';

export const loginTwilio = (data,token,id,context) => (dispatch) => {
  console.log("hitted in login")
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':`${id}`
   }
   console.log("logintwilio",header);
axios.put(GET_EMAIL_URL,data,{headers:header}).then(res=>{
 console.log("logintwilio",res);
 
     dispatch({
            type:GET_EMAIL_VALIDATE,
            data: {isValid:res.data, 
              resend: false}
        });
        if(res && res.data){
          context.history.push('/loginsuccess')
        }
    
})
.catch(error => {
    // dispatch({
    //     type:GET_USER,
    //     data: 401
    // });
    // Alert.error(error,ALERT_CONFIG);
    // context.history.push('/');
})
};