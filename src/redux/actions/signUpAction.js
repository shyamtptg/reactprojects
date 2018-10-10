
import { USER_SIGNUP,SIGNUP_URL} from '../constants/constant';
import axios from 'axios';

export const signUp = (data,token,context) => (dispatch) => {
    const header = {
        'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
       }

axios.post(SIGNUP_URL,data,{headers:header}).then(res=>{
    console.log(res);
     dispatch({
            type:USER_SIGNUP,
            data: res.data
        });
    if(res && res.data && res.data.status === undefined){
      context.history.push('/validatemail')
    }
    // else{
    //     dispatch({
    //         type:USER_ERROR,
    //         data:res.detail

    //     })
    // }
})
.catch(error => {
    console.log(error)
    // Alert.error(error,ALERT_CONFIG);
    // context.history.push('/');
})
};
