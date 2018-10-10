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
     <div className='col-md-6 offset-5 twilio-success'>
     
     <div style={icon}><img src={iconcheck}  alt='success'/></div> 
          {/* <div style={icon}><img src={iconcheck}  alt='success' style={{width:'40px',height:'40px'}}/></div> */}
        </div>
        
       
            {/* <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12 setup'>
                  <h2>You have successfully set up two-factor authentication</h2>
                  <p>Each time you login,you will be asked to enter a security code sent to your phone
                  </p>
                </div>
              </div>
              
            </div> */}
           <div className='col-md-6 content-success'>
              
                  <h5>You have successfully set up two-factor authentication</h5>
                  <p>Each time you login, you will be asked to enter a security code sent to your phone
                  </p>
                </div>
                <div className='col-md-2 offset-5'>
                {/* <button className='skip' type='button'><Link to ='/' style={button}>Done</Link></button> */}
                <button className='Enable2FA' type='button' style={styles.Button}><span><Link style={{color:'white',textDecoration:"none"}} to='/'>Done</Link></span></button> 
                
                </div>
              
             
         
        
      
    
      </React.Fragment>

    )
  }


export default TwilioSuccess;