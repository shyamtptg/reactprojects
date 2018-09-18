import { USER_TOKEN,LOGIN_URL } from '../constants/constant';
import axios from 'axios';
// import Alert from 'react-s-alert';

export const token = (data,context) => (dispatch) => {
  
    const headers = {
    'Content-type':'application/x-www-form-urlencoded',
    'Authorization':'Basic QCFGMTU3LjBBNUIuOUE3Ni42QTdEITAwMDEhMjA2My44MjQ5ITAwMDghQkQ2MS40ODczLkJCRjcuMEUyQzpwYXNzd29yZA=='
    }
    console.log("token",data);
   axios.post(LOGIN_URL,data,{headers:headers}).then(res=>{
         dispatch({
                type:USER_TOKEN,
                data: res.data
            });
          })
    .catch(error => {
        // Alert.error(error,ALERT_CONFIG);
        console.log(error);
        context.history.push('/');
    })
}