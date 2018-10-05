import React from 'react';
import { Link } from 'react-router-dom';
import variables from '../../css/variables.scss';
import iconsuccess from '../../assets/icon_success.svg';



const TwilioSuccess = () => {
  
  var icon={
  borderRadius:'50px',
  width:'100px',
  height:'100px',
  border:'1px solid green',
  marginBottom:"20px"
}
var button={
  background:`linear-gradient(180deg, ${variables.darkcolor} 0%,  ${variables.darkcolor} 100%)`,
  color:"white"
}

  return (
    <React.Fragment>
     <div className='col-md-6 offset-6'>
     <div>
          <div style={icon}><img src={iconsuccess}  alt='success'/></div>
        </div>
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
           <div className='col-md-6 offset-4'>
              
                  <h4>You have successfully set up two-factor authentication</h4>
                  <p>Each time you login,you will be asked to enter a security code sent to your phone
                  </p>
                </div>
                <div className='col-md-2 offset-6'>
                <button className='Skip' type='button'><Link to ='/' style={button}>Done</Link></button>
                  
                </div>
              
             
         
        
      
    
      </React.Fragment>

    )
  }


export default TwilioSuccess;