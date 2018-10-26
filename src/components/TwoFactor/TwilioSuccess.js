import React from 'react';
import { Link } from 'react-router-dom';
import variables from '../../css/variables.scss';
import iconcheck from '../../assets/icon_check_circle.svg';
import './Twofactor.scss';
import {styles} from '../common/style'



const TwilioSuccess = () => {
  
  var icon={
  paddingBottom:'45px'
}
var button={
  background:`linear-gradient(180deg, ${variables.darkcolor} 0%,  ${variables.darkcolor} 100%)`,
  color:'white'
}

  return (
    <React.Fragment>
     <div className='col-12 twilio-success'>
     
     <div style={icon}><img src={iconcheck}  alt='success'/></div> 
          
        </div>
        
       <div className='col-md-6 col-sm-12 content-success'>
              
            <h5>You have successfully set up two-factor authentication</h5>
            <p>Each time you login, you will be asked to enter a security code sent to your phone
            </p>
        </div>
                <div className='col-sm-12 col-md-12'>
                <div className='row'>
                <div className='col-sm-12 col-md-5'></div>
                <div className='col-sm-12 col-md-2'>
                    <button className='Enable2FA' type='button' style={styles.Button}><span><Link style={{color:'white',textDecoration:"none"}} to='/login'>Done</Link></span></button> 
                </div>
                <div className='col-sm-12 col-md-5'></div>
                </div>
                </div>
              
             
         
        
      
    
      </React.Fragment>

    )
  }


export default TwilioSuccess;