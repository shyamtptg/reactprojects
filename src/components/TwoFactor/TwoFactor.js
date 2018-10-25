import React from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../common/style';
import variables from '../../css/variables.scss';
import Successmessage from '../common/SuccessMessage/SuccessMessage';


const TwoFactor = () => {
  return (
    <React.Fragment>
     
    <div className='two-fact-card col-sm-12 col-md-7 col-lg-5'>
    <div className='Success'>
        <Successmessage success='Your email has been validated successfully'/></div>
        <div className='card'>
      <div className='card-header two-fact-auth'>
          Set up two-factor authentication
           </div>
          <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12 setup'>
                  <p className='twofact-description'>Set up two-factor authentication(2FA) to add an extra layer of
                     security to your account. if enabled,you'll need to enter both
                     your password and security code recieved on your mobile
                     device when logging in to this website</p>
                </div>
              </div>
              

            </div>
            <div className='form-group col-md-12'>
              <div className='row'>
                <div className='col-sm-6'>
                <button className='Enable2FA' type='button' style={styles.Button}><span style={styles.textOnButton}><Link to ='/twofactordetails' style={{color:variables.whitecolor,textDecoration:'none',float:'none'}}>SET UP 2FA</Link></span></button>                 
                </div>
                <div className='col-sm-6'>
                <button className='Skip' type='button'><Link to ='/' style={{color:variables.primary,float:'none'}}>SKIP</Link></button>
                </div>
              </div>
             </div>
            <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12 decide'>
                  <p>if you decide to skip this step,you can enable two factor
                     authentication settings</p>
                </div>
              </div>
             </div>
            
          </form>
        </div>
      </div>
      </div>
      </React.Fragment>

    )
  }


export default TwoFactor;