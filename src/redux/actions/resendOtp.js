import { GET_RESEND_VALIDATE,GET_RESEND_URL} from '../constants/constant';
import axios from 'axios';

export const resendData = (data,token,id) => (dispatch) => {
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':`${id}`
   }
 
axios.put(GET_RESEND_URL,data,{headers:header}).then(res=>{
  console.log("this is response resend validate",res);
     dispatch({
            type:GET_RESEND_VALIDATE,
            data: res.data
        });
      
    
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