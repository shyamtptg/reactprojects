
import { GET_USER, GET_USERLOGIN_URL, GET_LOGINURL_TWILIO, GET_TWILIO, GET_TWILIO_URL, UPDATE_USER, UPDATE_USER_URL } from '../constants/constant';
import axios from 'axios';

export const login = (data, context) => (dispatch) => {
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic QCFGMTU3LjBBNUIuOUE3Ni42QTdEITAwMDEhMjA2My44MjQ5ITAwMDghQkQ2MS40ODczLkJCRjcuMEUyQzpwYXNzd29yZA=='
    }

    axios.post(GET_USERLOGIN_URL, data, { headers: headers }).then(res => {
        dispatch({
            type: GET_USER,
            data: res
        });
        const username = data.get('username');
        const accessToken = res && res.data.access_token;
        const header = {
            'Authorization': `Bearer ${accessToken}`,
            'code': username
        }
        axios.get(GET_LOGINURL_TWILIO, { headers: header }).then(twilldata => {
            dispatch({
                type: GET_TWILIO,
                data: twilldata.data && twilldata.data.Resources && twilldata.data.Resources[0]
            })
            if (twilldata.data && twilldata.data.Resources &&
                twilldata.data.Resources.length &&
                twilldata.data.Resources[0].phoneNumbers &&
                twilldata.data.Resources[0].phoneNumbers.length
            ) {
                const header = {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'code': `${twilldata.data.Resources[0].id}`
                }
                axios.put(UPDATE_USER_URL, { phoneNumbers: twilldata.data.Resources[0].phoneNumbers }, { headers: header }).then(updatedres => {
                    dispatch({
                        type: UPDATE_USER,
                        data: updatedres.data
                    });
                    const formdata = new URLSearchParams();
                    formdata.append('Body', updatedres.data.preferredLanguage);
                    formdata.append('From', '+18597590916');
                    formdata.append('To', '+91' + updatedres.data.phoneNumbers[0].value);
                    const headers = {
                        'Content-type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic QUM5ZDI0ZTgwMTVlNDIyOTVkNDNlNjQzMDkzZmRiNmYyNDowZTY3NWQyYjM2YjYxZmZkYTBhZjc5MWM0MTU1MTAzOQ=='
                    }
                    axios.post(GET_TWILIO_URL, formdata, { headers: headers }).then(twilldata => {
                        context.history.push('/logintwofact');
                    }).catch(error => {
                    });
                });
            } else if (twilldata.data && twilldata.data.Resources &&
                twilldata.data.Resources.length) {
                context.history.push('/loginsuccess');
            }

        }).catch(error => {
        });
    })
        .catch(error => {
            dispatch({
                type: GET_USER,
                data: 401
            });
        })
};
