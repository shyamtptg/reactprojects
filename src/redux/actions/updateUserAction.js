import { UPDATE_USER,UPDATE_USER_URL} from '../constants/constant';
import axios from 'axios';

export const updateUser = (data,token,id,context) => (dispatch) => {
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':`${id}`
   }
 console.log("This is header",header);
axios.put(UPDATE_USER_URL,data,{headers:header}).then(res=>{
  console.log("this is response resend validate",res);
     dispatch({
            type:UPDATE_USER,
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