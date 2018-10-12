import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import Resendmessage from '../common/ResendMessage/ResendMessage';
import { validateTwilio } from '../../redux/actions/validateTwilio';
import { resendTwilioOtp } from '../../redux/actions/resendTwilioOtp';
import { styles } from '../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Errormessage from '../common/Errormessage/Errormessage';
import { Link } from 'react-router-dom';
import './Twofactor.scss';
import variables from '../../css/variables.scss'


class TwoFactorAuth extends Component {

  constructor(props) {
    super(props)
    this.state = {
      preferredLanguage: '',
      resendmessage: false,
      errors: {
        preferredLanguage: ''

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

  validateSecurity() {
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
    this.props.validateTwilio(OTP, this.props.userDetails['access_token'], this.props.userResponse['id'], this.props);


  }
  resend() {

    if (this.props.updateuser && this.props.updateuser.preferredLanguage &&
      this.props.updateuser.phoneNumbers && this.props.updateuser.phoneNumbers.length) {

      this.props.resendTwilioOtp(this.props.updateuser.preferredLanguage, this.props.updateuser.phoneNumbers[0].value, this.props);

    }
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
  componentDidMount() {
  }
  getkey(e) {
    if (e.keyCode === 20) {
      this.setState(prevState => ({
        isCapitalOn: !prevState.isCapitalOn
      }));
    }
  }


  validateCheck = (name) => {
    const validJsErrors = validate(this.state, this.constraints);
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
      <React.Fragment>

        <div className='two-fact-card col-md-5'>
          {this.props.getEmailValidate.resend ? <Resendmessage error='A new security code has sent to your phone' /> : ''}
          <div className='card'>
            <div className='card-header'>
              <span className="Enter security code">Enter security code</span>
            </div>
            {!this.props.getEmailValidate.resend && this.props.getEmailValidate.isValid === '' ?
              <Errormessage error='Invalid security code. Please try again.' /> : ''}

            <div className='card-block'>
              <form className="twofactAuth">
                <div className='form-group col-12'>
                  <div className='row label-text-security'>
                    <div className='col-9 labeltext'>
                      <label>Security Code</label>
                    </div>
                    <div className='col-3'>
                      <label onClick={this.resend} style={{ color: variables.strongblu }}>Resend code</label>
                    </div>
                  </div>
                  <input type='text' className='input-validate-email' placeholder='123456'
                    name='preferredLanguage' onKeyDown={(event) => this.getkey(event)} value={this.state.preferredLanguage} onChange={this.handleChange} />
                  <p>{this.state.isCapitalOn ? 'capital on' : ''}</p>

                </div>
                <div className='form-group col-11'>
                  <button className='enable2fA' onClick={this.validateSecurity} type='button' style={styles.Button}><span style={styles.textOnButton}>CONTINUE</span></button>
                </div>
                <div className='form-group col-9 offset-2'>
                  <p style={{ color: variables.strongblu, fontSize: '15px', fontWeight: 600 }}><Link style={{ color: variables.strongblu, textDecoration: 'none' }} to='/twofactordetails'>Provide a different phone number</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
TwoFactorAuth.propTypes = {
  userDetails: PropTypes.any,
  userResponse: PropTypes.any,
  getEmailValidate: PropTypes.any,
  validateData: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getEmailValidate: state.getEmailValidation.getEmailValidate,
    getResendOtp: state.resendOtp.getResendOtp,
    updateuser: state.updateUser.updateUser

  }
}

export default withRouter(connect(mapStateToProps, { validateTwilio, resendTwilioOtp })(TwoFactorAuth));