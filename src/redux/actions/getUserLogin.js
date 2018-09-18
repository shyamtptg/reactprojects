
import { GET_USER,GET_USERLOGIN_URL} from '../constants/constant';
import axios from 'axios';

export const login = (data,context) => (dispatch) => {
    const headers = {
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':'Basic QCFGMTU3LjBBNUIuOUE3Ni42QTdEITAwMDEhMjA2My44MjQ5ITAwMDghQkQ2MS40ODczLkJCRjcuMEUyQzpwYXNzd29yZA=='
        }
  console.log("login",data)
axios.post(GET_USERLOGIN_URL,data,{headers:headers}).then(res=>{
  console.log("this is response",res);
     dispatch({
            type:GET_USER,
            data: res.status
        });
      
    
})
.catch(error => {
    dispatch({
        type:GET_USER,
        data: 401
    });
    // Alert.error(error,ALERT_CONFIG);
    // context.history.push('/');
})
};
