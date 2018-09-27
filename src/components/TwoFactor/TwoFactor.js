import React from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../common/style';
import Successmessage from '../common/SuccessMessage/SuccessMessage';


const TwoFactor = () => {
  return (
    <React.Fragment>
     
    <div className='two-fact-card col-md-5'>
    <div className='Success'>
        <Successmessage success="Your email has been validated successfully"/></div>
        <div className='card'>
      <div className='card-header two-fact-auth'>
          Two factor authentication
           </div>
          <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12'>
                  <p>Now please enable Two factor authentication to add</p><p>an extra layer of security to your account</p>
                </div>
              </div>
             </div>
            <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12'>
                  <p>You will have to select your country code and enter phone</p>
                  <p>number.We will send an SMS with security code to verify</p>
                  <p>Your phone number and enable two factor authentication</p>
                </div>
              </div>
              

            </div>
            <div className='form-group col-11'>
              <button className='Enable2FA'  type='button' style={styles.Button}><span style={styles.textOnButton}><Link to ='/TwoFactorDetails'>ENABLE 2FA</Link></span></button>
            </div>
            <div className='col-8 offset-5'>
            <p className="skip"><Link to ='/'>Skip</Link></p>

            </div>
            <div className='col-8 offset-2'>
            <p className="edit-two-fact">Edit Two factor authentication settings</p>

            </div>
          </form>
        </div>
      </div>
      </div>
      </React.Fragment>

    )
  }


export default TwoFactor;