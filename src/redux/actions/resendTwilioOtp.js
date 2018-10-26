import { GET_EMAIL_VALIDATE,  GET_TWILIO_URL } from '../constants/constant';
import axios from 'axios';

export const resendTwilioOtp = (preferredLanguage, phoneNumber,context) => (dispatch) => {
  const formdata = new URLSearchParams();
  formdata.append('Body', preferredLanguage);
  formdata.append('From', '+18597590916');
  formdata.append('To',  phoneNumber);

  const headers = {
    'Content-type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUM5ZDI0ZTgwMTVlNDIyOTVkNDNlNjQzMDkzZmRiNmYyNDowZTY3NWQyYjM2YjYxZmZkYTBhZjc5MWM0MTU1MTAzOQ=='
  }
  axios.post(GET_TWILIO_URL, formdata, { headers: headers }).then(twilldata => {
    dispatch({
      type: GET_EMAIL_VALIDATE,
      data: {
        isValid: twilldata.data,
        resend: true
      }
    });
  }).catch(error => {
  });
};