import { UPDATE_USER_URL, UPDATE_USER, FORGOT_USER_URL, FORGOT_USER} from '../constants/constant';
import axios from 'axios';

export const forgotuserData = (userdata,emaildata,token, context) => (dispatch) => {
  console.log(userdata);
  const header = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'code': emaildata
  }

  console.log("hhhh", header);
  axios.get(FORGOT_USER_URL, { headers: header }).then(res => {
    console.log("userinfo", res)

    dispatch({
      type: FORGOT_USER,
      data: res.data && res.data.Resources && res.data.Resources[0]
    });
    const id = res.data.Resources[0].id
    if (res.totalResults !== 0) {
      const header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'code': `${id}`
      }

      axios.put(UPDATE_USER_URL, userdata, { headers: header }).then(updatedres => {
        console.log("update", res);
        dispatch({
          type: UPDATE_USER,
          data: updatedres.data
        });
        if (updatedres) {
          context.history.push('/forgotcheckmail');
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