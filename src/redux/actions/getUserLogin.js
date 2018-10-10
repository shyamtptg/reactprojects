
import { GET_USER,GET_USERLOGIN_URL,GET_LOGINURL_TWILIO, GET_TWILIO_URL} from '../constants/constant';
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
            data: res
        });
        console.log(res);
        const username=data.get('username');
        const accessToken = res && res.access_token
        console.log(username);
        const header = {
           'Authorization':`Bearer ${accessToken}`,
           'code':username
            }
        // const url = GET_LOGINURL_TWILIO + '' + username
        axios.get(GET_LOGINURL_TWILIO, {headers: header} ).then(twilldata => {
            console.log(twilldata);
         if(  twilldata.data &&  twilldata.data.Resources && 
             twilldata.data.Resources.length&& 
             twilldata.data.Resources[0].phoneNumbers &&
              twilldata.data.Resources[0].phoneNumbers.length 
            ) {
                const formdata = new URLSearchParams();
                formdata.append('Body', twilldata.data.Resources[0].preferredLanguage);
                formdata.append('From', '+18597590916');
                formdata.append('To', '+91'+ twilldata.data.Resources[0].phoneNumbers[0].value);
               
                // const formdata = {
                //   Body: res.data.preferredLanguage,
                //   From: '\\+18597590916',
                //   To: '\\+91' + res.data.phoneNumbers[0].value,
                //  }
                 const headers = {
                  'Content-type':'application/x-www-form-urlencoded',
                  'Authorization': 'Basic QUM5ZDI0ZTgwMTVlNDIyOTVkNDNlNjQzMDkzZmRiNmYyNDowZTY3NWQyYjM2YjYxZmZkYTBhZjc5MWM0MTU1MTAzOQ=='
                  }
                axios.post(GET_TWILIO_URL, formdata, {headers: headers} ).then(twilldata => {
                context.history.push('/logintwofact');
                }).catch(error => {
                  console.log('error');
                });
             } else if(  twilldata.data &&  twilldata.data.Resources && 
                twilldata.data.Resources.length) {
                context.history.push('/loginsuccess');
             }

          }).catch(error => {
            console.log('error');
          });
         console.log("response otp",res.data)
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
