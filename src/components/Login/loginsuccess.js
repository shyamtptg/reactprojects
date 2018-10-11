import React from 'react';
// import iconcheck from '../../assets/icon_check_circle.svg';
import '../TwoFactor/Twofactor.scss';


const LoginSuccess = () => {
 var myStyle={
  marginTop:'20px',
  paddingTop:'30px',
  textAlign:'center'
  
 }


  return (
    <React.Fragment>
      
      <div className='col-md-6 offset-3'>
        <h5 style={myStyle}>You have successfully login</h5>
      </div>

    </React.Fragment>

  )
}


export default LoginSuccess;