import { UPDATE_USER_URL, UPDATE_USER, GET_LOGINURL_TWILIO, GET_TWILIO, } from '../constants/constant';
import axios from 'axios';

export const forgotpasswordData = (userdata, token, context) => (dispatch) => {

  const header = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'code': userdata.userName
  }

  console.log("hhhh", header);
  axios.get(GET_LOGINURL_TWILIO, { headers: header }).then(res => {
    console.log("userinfo", res)

    dispatch({
      type: GET_TWILIO,
      data: res.data && res.data.Resources && res.data.Resources[0]
    });
    const id = res.data.Resources[0].id
    if (res.totalResults !== 0) {
      const header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'code': `${id}`
      }

      axios.put(UPDATE_USER_URL, { userName: userdata.userName, locale: "en_US" }, { headers: header }).then(updatedres => {
        console.log("update", res);
        dispatch({
          type: UPDATE_USER,
          data: updatedres.data
        });
        if (updatedres) {
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