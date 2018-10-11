import React, { Component } from 'react';
import { styles } from '../../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../login.scss';



class Forgotcheckmail extends Component {
  
  render() {
     return (

      <React.Fragment>
        
          <div className='forgot-check-mail'>
            <h3>Check your email</h3>
              
                <form>
                  <div className='form-group col-8'>
                    <div className='row'>
                      <div className='col-8 '>
                        <p>An email with instructions to recover your username was sent to your email address
                          if no email is received within ten minutes,please check your email spam folder, try again or contact support
                          
                     </p>
                      </div>
                    </div>
                  </div>
                 

                  <div className='form-group col-6'>
                    <button type='button' style={styles.Button} onClick={() => this.forgotUsername}><span style={styles.textOnButton}>CONTINUE</span></button>
                  </div>
                  <div className='form-group col-9'>
                    <div className='row'>
                      <div className='col-9 decide'>
                        <p>if you have forgotten the email address associated with your
                          account, contact our help number</p>
                      </div>
                    </div>
                  </div>

                </form>
              
            
          </div>
        
      </React.Fragment>

    )
  }

}
Forgotcheckmail.propTypes = {
  userDetails: PropTypes.any,
  userResponse: PropTypes.any,
  getEmailValidate: PropTypes.any,
  validateData: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getEmailValidate: state.getEmailValidation.getEmailValidate

  }
}

export default withRouter(connect(mapStateToProps)(Forgotcheckmail));

