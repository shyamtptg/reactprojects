import { UPDATE_USER,UPDATE_USER_URL,GET_TWILIO_URL} from '../constants/constant';
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
        if(res && res.data && res.data.preferredLanguage && res.data.phoneNumbers && res.data.phoneNumbers.length){
          const formdata = new URLSearchParams();
          formdata.append('Body', res.data.preferredLanguage);
          formdata.append('From', '+18597590916');
          formdata.append('To', '+91'+ res.data.phoneNumbers[0].value);
         
           const headers = {
            'Content-type':'application/x-www-form-urlencoded',
            'Authorization': 'Basic QUM5ZDI0ZTgwMTVlNDIyOTVkNDNlNjQzMDkzZmRiNmYyNDowZTY3NWQyYjM2YjYxZmZkYTBhZjc5MWM0MTU1MTAzOQ=='
            }
          axios.post(GET_TWILIO_URL, formdata, {headers: headers} ).then(twilldata => {
            console.log(twilldata);
          }).catch(error => {
            console.log('error');
          });
         console.log("response otp",res.data)
          context.history.push('/twofactorauth');
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