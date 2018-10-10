import React from 'react';
// import iconcheck from '../../assets/icon_check_circle.svg';
import '../TwoFactor/Twofactor.scss';


const LoginSuccess = () => {
 


  return (
    <React.Fragment>
      {/* <div className='col-md-6 offset-5 login-success'>
        <div style={icon}><img src={iconcheck} alt='success' /></div>
      </div> */}
      <div className='col-md-6 content-success'>
        <h5>You have successfully login</h5>
      </div>

    </React.Fragment>

  )
}


export default LoginSuccess;