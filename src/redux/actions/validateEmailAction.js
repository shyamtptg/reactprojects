import { GET_EMAIL_VALIDATE,GET_EMAIL_URL} from '../constants/constant';
import axios from 'axios';

export const validateData = (data,token,id,context) => (dispatch) => {
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':`${id}`
   }
 
axios.put(GET_EMAIL_URL,data,{headers:header}).then(res=>{
 
     dispatch({
            type:GET_EMAIL_VALIDATE,
            data: res.data
        });
        if(res && res.data){
          context.history.push('/TwoFactor')
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