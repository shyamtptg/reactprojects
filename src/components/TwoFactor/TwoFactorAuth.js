import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { validateData } from '../../redux/actions/validateEmailAction';
import {resendData} from '../../redux/actions/resendOtp';
import {styles} from '../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Errormessage from '../common/Errormessage/Errormessage';
import './Twofactor.scss';

class TwoFactorAuth extends Component {

  constructor(props) {
    super(props)
    this.state = {
     preferredLanguage:'',
      errors: {
        preferredLanguage:''

      },
      touched: {
       preferredLanguage: false

      },
      isSubmitted: false,
      isCapitalOn: false
    }

    this.constraints = {
      preferredLanguage: {
        length: {
          maximum: 6
          
        },
        presence: {
          allowEmpty: false
        }
      }
    }
    this.validateSecurity = this.validateSecurity.bind(this);
    this.resend = this.resend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateSecurity(){
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          preferredLanguage: false
         }
      });
    });
    
    const OTP = {
      'preferredLanguage': this.state.preferredLanguage
      
    }
    this.props.validateData(OTP,this.props.userDetails['access_token'],this.props.userResponse['id'],this.props);

   
  }
  resend(){
    const email={
      'emails': this.props.userResponse['emails']
    }
    this.props.resendData(email,this.props.userDetails['access_token'],this.props.userResponse['id'],this.props);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, () => {
     this.setState(prevState => ({
        touched: {
          ...prevState.touched,
          [name]: true
        }
      }))
      this.validateCheck(name)
    }
    );


  }
  componentDidMount(){
  console.log(this.props.userResponse['id']);
  console.log('user response',this.props.userResponse);
  }
  getkey(e){
console.log(e);
console.log(e.keyCode);
if(e.keyCode === 20) {
  this.setState(prevState => ({
    isCapitalOn: !prevState.isCapitalOn
  }));
}
  }
 

  validateCheck = (name) => {
    const validJsErrors = validate(this.state,this.constraints);
    console.log('valid Js errors', validJsErrors)
    const errorKeys = validJsErrors ? Object.keys(validJsErrors) : {};
    if (validJsErrors) {
      Object.entries(validJsErrors)
        .forEach((key) => {
          let errors = { ...this.state.errors };
          if (!errorKeys.includes(name)) {
            errors[name] = '';
            this.setState({
              errors: errors
            });
          } else if (key[0] === name && key[1].length > 0) {
            errors[name] = key[1][0];
            this.setState({
              errors: errors
            });
          }
        });
    }
  }
  render() {
    
     return (
      <div className='card validate-email-box col-md-5'>
       <div className='card-header'>
          Two Factor Authentication
           </div>
           {(this.props.getEmailValidate !=='') ?
           '' : <Errormessage error="Invalid Security Code.Please try again."/>}
        
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className='row label-text-security'>
                <div className='col-12'>
                  <label>Security Code</label>
                </div>
              </div>
              <input type='text' className="input-validate-email" placeholder='security code'
                  name='preferredLanguage' onKeyDown={(event)=> this.getkey(event)} value={this.state.preferredLanguage} onChange={this.handleChange} />
                  <p>{this.state.isCapitalOn? 'capital on': ''}</p>

            </div>
            <div className='form-group col-11'>
              <button className='enable2fA' onClick={this.validateSecurity} type='button' style={styles.Button}><span style={styles.textOnButton}>Enable 2FA</span></button>
            </div>
            <div className='col-12'>
            <span>Didn't Recieve Security code</span><span style={{float:'right',color: "#0195D4"}} onClick={this.resend}>Resend</span>

            </div>
            <div className='col-8 offset-5'>
                    <p className="skip"><Link to='/'>Skip</Link></p>

                  </div>
                  <div className='col-8 offset-2'>
                    <p className="edit-two-fact">Edit Two factor authentication settings</p>

                  </div>
           
          </form>
        </div>
      </div>


    )
  }
}
TwoFactorAuth.propTypes = {
 userDetails: PropTypes.any,
  userResponse: PropTypes.any,
  getEmailValidate:PropTypes.any,
  validateData:PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getEmailValidate:state.getEmailValidation.getEmailValidate

  }
}

export default withRouter(connect(mapStateToProps,{validateData,resendData})(TwoFactorAuth));