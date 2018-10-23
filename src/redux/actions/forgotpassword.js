import { GET_EMAIL_VALIDATE, GET_RESEND_URL,GET_LOGINURL_TWILIO, GET_TWILIO,} from '../constants/constant';
import axios from 'axios';

export const forgotpasswordData = (data,token,context) => (dispatch) => {
  
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':data.userName
   }
 
   console.log("hhhh",header);
axios.get(GET_LOGINURL_TWILIO,{headers:header}).then(res=>{
  console.log("userinfo",res)
 
     dispatch({
      type: GET_TWILIO,
      data: res.data && res.data.Resources && res.data.Resources[0]
        });
        const id=  res.data.Resources[0].id
        if(res.totalResults!==0){
          const header = {
            'Content-type':'application/json',
            'Authorization':`Bearer ${token}`,
            'code':`${id}`
           }
         
        axios.put(GET_RESEND_URL,data,{headers:header}).then(res=>{
         console.log("email",res);
             dispatch({
                    type: GET_EMAIL_VALIDATE,
                    data:{
                      isValid: res.data,
                      resend: true
                    }
                });
                if(res){
                  context.history.push('/forgotpasswordcheckmail');
                }
              
            
        })
          
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