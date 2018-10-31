import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { validateData } from '../../redux/actions/validateEmailAction';
import { resendData } from '../../redux/actions/resendOtp';
import { styles } from '../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Resendmessage from '../common/ResendMessage/ResendMessage';
import Errormessage from '../common/Errormessage/Errormessage';

class ValidateEmail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      preferredLanguage: '',
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
    this.props.validateData(OTP, this.props.userDetails['access_token'], this.props.userResponse['id'], this.props);


  }
  resend() {
    const email = {
      'emails': this.props.userResponse['emails']
    }
    this.props.resendData(email, this.props.userDetails['access_token'], this.props.userResponse['id'], this.props);
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
      <div className='card validate-email-box col-sm-12 col-md-5'>
        <div className='card-header'>
          <span className="emailvalidcheck">Validate your email</span>
        </div>
        {!this.props.getEmailValidate.resend && this.props.getEmailValidate.isValid === '' ?
          <Errormessage error='Invalid security code. Please try again.' /> : ''}
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className='row label-text-security'>
                <div className='col-6'>
                  <label>Security Code</label>
                </div>
                <div className='col-6' style={{ textAlign: 'right' }}>
                  <span onClick={this.resend} style={{ color: '#0195D4', cursor: 'pointer' }}>Resend code</span>
                </div>
              </div>
              <input type='text' className='form-control input-validate-email' placeholder='123456'
                name='preferredLanguage' onKeyDown={(event) => this.getkey(event)} value={this.state.preferredLanguage} onChange={this.handleChange} autoFocus={true} />
              <p>{this.state.isCapitalOn ? 'capital on' : ''}</p>

            </div>
            <div className='form-group col-12'>
              <button className='forgotbtn' onClick={this.validateSecurity} type='button' style={styles.Button}><span style={styles.textOnButton}>SUBMIT</span></button>
            </div>
          

          </form>
        </div>
      </div>


    )
  }
}
ValidateEmail.propTypes = {
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

export default withRouter(connect(mapStateToProps, { validateData, resendData })(ValidateEmail));