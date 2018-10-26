import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import check from '../../assets/check.svg';
// import {validatingFields} from '../common/validation';
import './SignUp.scss';
import PropTypes from 'prop-types';
// import pagelevel from '../../assets/pagelevel_error.svg';

// import ReactTooltip from 'react-tooltip'
// import { validateCheck } from "../../redux/actions/validationAction"
import { signUp } from '../../redux/actions/signUpAction';
import { token } from '../../redux/actions/tokenAction';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { styles } from '../common/style';
import '../../css/style.scss';
import About from '../Home/About';
// import Pagelevelerror from '../../assets/pagelevel-error.svg';

import icon_hide from '../../assets/icon_hide.svg';
import icon_show from '../../assets/icon_show.svg';
import Errormessage from '../common/Errormessage/Errormessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// import variables from '../../css/variables.scss'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      displayName: '',
      email: '',
      password: '',
      accessCode: '',
      certify: false,
      type: 'password',
      errors: {
        firstName: undefined,
        lastName: undefined,
        userName: undefined,
        email: undefined,
        password: undefined,
        accessCode: undefined,
        certify: undefined

      },
      touched: {
        firstName: false,
        lastName: false,
        userName: false,
        email: false,
        password: false,
        accessCode: false,
        certify: false

      },
      isSubmitted: false
    }
    this.constraints = {
      firstName: {
        presence: {
          allowEmpty: false
        }

      },
      lastName: {
        presence: {
          allowEmpty: false
        }
      },
      userName: {
        format: {
          pattern: '[A-Za-z0-9]+'
        },
        presence: {
          allowEmpty: false
        }
      },
      email: {
        email: true
      },
      accessCode: {
        format: {
          pattern: '[A-Za-z0-9]+'
        },
        presence: {
          allowEmpty: false
        }
      },
      password: {
        length: {
          minimum: 8,
          maximum: 25
        },
        format: {
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}'
        },
        presence: {
          allowEmpty: false
        }
      },
      certify: {
        presence: {
          message: "^You must be a U.S citizen permantly residing in the U.S to use the service"
        },
        inclusion: {
          within: [true],
          message: "^You must be a U.S citizen permantly residing in the U.S to use the service"
        }
      }
    }
    // const params={
    //   grant_type:'client_credentials'
    // }
    //  const data = new FormData();
    // for(var k in params){
    //   data.append(k,params[k]);
    // }
    //  data.set('grant_type','client_credentials');
     const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    this.props.token(data, this.props);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.checked = this.checked.bind(this);


  }


  getErrorMessage(inputType) {
    const validJsErrors = validate(this.state, this.constraints);
    const inputSpace = inputType.replace(/([A-Z])/g, ' $1').trim()
    const toUpper = inputSpace.charAt(0).toUpperCase() + inputSpace.substr(1).toLowerCase();
    for (let k in validJsErrors) {

      if (validJsErrors.hasOwnProperty(k)) {
        if (k === inputType && k !== 'password') {
          return (validJsErrors[k].map((ele, index) => {
            return <p className='errorMessage' key={index}> {ele === toUpper + ' is too short (minimum is 8 characters)' ? 'Must be atleast 8 characters long' : ele === toUpper + ' can\'t be blank' ? 'A ' + toUpper.toLowerCase() + ' is required' : ele === toUpper + ' is invalid' ? toUpper + '  is not valid' : ele === toUpper + ' is not a valid email' ? toUpper + '  is not valid' : ele}</p>
          })
          )
        } else if (k === inputType && k === 'password') {
          return (validJsErrors[k].map((ele, index) => {
            return <p className='errorMessage' key={index}> {ele === toUpper + ' is too short (minimum is 8 characters)' ? 'Must be atleast 8 characters long' : ele === toUpper + ' can\'t be blank' ? '' : ele === toUpper + ' is invalid' ? 'Must contain atleast one lower case, upper case and one number' : ele === toUpper + ' is not a valid email' ? toUpper + '  is not valid' : ele}</p>
          })
          )
        }
      }
    }
  }

  showHidePassword() {
    this.setState(prevState => ({
      type: prevState.type === 'password' ? 'text' : 'password'
    }));
  }

  checked() {
    this.setState(prevState => ({ certify: !prevState.certify }))
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    }, () => {
      this.setState(prevState => ({
        touched: {
          ...prevState.touched,
          [name]: true
        }
      }), () => { this.validateCheck(name) })

    }
    );


  }


  validateCheck = (name) => {
    const validJsErrors = validate(this.state, this.constraints);
    const errorKeys = validJsErrors ? Object.keys(validJsErrors) : {};
    if (validJsErrors) {
      Object.entries(validJsErrors)
        .forEach((key) => {
          // let errors = { ...this.props.getValidateForm };
          if (!errorKeys.includes(name)) {

            this.setState(prevState => ({
              errors: {
                ...prevState.errors,
                [name]: undefined
              }
            }), () => {
            })
          } else if (key[0] === name && key[1].length > 0) {
            //errors[name] = key[1][0];
            // this.setState({
            //   errors: errors
            // });
            this.setState(prevState => ({
              errors: {
                ...prevState.errors,
                [name]: key[1][0]
              }
            }))
          }
        });
    }
    else {
      this.setState({
        errors: {
          firstName: undefined,
          lastName: undefined,
          userName: undefined,
          email: undefined,
          password: undefined,
          accessCode: undefined,
          certify: undefined

        }
      });

    }
  }


  componentDidMount() {



  }


  register(e) {
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          firstName: false,
          lastName: false,
          userName: false,
          email: false,
          password: false,
          accessCode: false,
          certify: false
        }
      });
    });
    if (this.state.errors && !this.state.errors.firstName && !this.state.errors.lastName && !this.state.errors.email && !this.state.errors.userName && !this.state.errors.password && !this.state.errors.accessCode && !this.state.errors.certify) {
      if (this.state.userName !== "" && this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.password !== "" && this.state.certify && this.state.accessCode !== "") {
        const registerData = {
          'userName': this.state.userName,
          'displayName': this.state.firstName + '' + this.state.lastName,
          'emails': [{ value: this.state.email }],
          'password': this.state.password,
          'nickName': this.state.accessCode
        }
        this.props.signUp(registerData, this.props.userDetails['access_token'], this.props);


      }
    }
    else {
    }
  }
  render() {
    const formErrors = validate(this.state, this.constraints);
    return (
      <React.Fragment>


        <div className='col-md-7 signup-left'>
          <About /></div>
        <div className='col-md-5 signup-right'>
          <div className='card'>
            <div className='card-header'>
              <h3 className='m-0 signup-text'>Sign up now</h3>
            </div>

            {/* {(this.props.userResponse.status === '409' && !this.props.userResponse.detail.includes("UID")) ?
              <Errormessage error={this.props.userResponse.detail} /> : ''} */}
            {(this.props.userResponse.status === '500') ?
              <Errormessage error="This email is already in use.Try logging in to your account" /> : ''}
            <div className='card-block'>
              <div className='form-group has-feedback'>
                <label className='control-label'>First name</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.firstName && formErrors && formErrors.firstName) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='firstName' placeholder='Firstname'
                  name='firstName' value={this.state.firstName}
                  onChange={this.handleChange} onFocus={this.handleChange}  autoFocus={true}/>
                {(this.state.isSubmitted && !this.state.touched.firstName && formErrors && formErrors.firstName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {this.state.isSubmitted && this.state.touched.firstName && formErrors && this.state.errors.firstName ? this.getErrorMessage('firstName') : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>Last name</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.lastName && formErrors && formErrors.lastName) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='lastName' placeholder='Lastname'
                  name='lastName' value={this.state.lastName}
                  onChange={this.handleChange} onFocus={this.handleChange} />
                {(this.state.isSubmitted && !this.state.touched.lastName && formErrors && formErrors.lastName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {this.state.isSubmitted && this.state.touched.lastName && formErrors && this.state.errors.lastName ? this.getErrorMessage('lastName') : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>Email</label>
                <input type='email' className={(this.state.isSubmitted && !this.state.touched.email && formErrors && formErrors.email) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='email' placeholder='Email'
                  name='email' value={this.state.email}
                  onChange={this.handleChange} onFocus={this.handleChange} />
                {(this.state.isSubmitted && !this.state.touched.email && formErrors && formErrors.email) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {this.state.isSubmitted && this.state.touched.email && formErrors && this.state.errors.email ?

                  this.getErrorMessage('email') : ''}

              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>Username</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.userName && formErrors && formErrors.userName) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='userName' placeholder='Username'
                  name='userName' value={this.state.userName}
                  onChange={this.handleChange} onFocus={this.handleChange} />
                {(this.state.isSubmitted && !this.state.touched.userName && formErrors && formErrors.userName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {this.state.isSubmitted && this.state.touched.userName && formErrors && this.state.errors.userName ?

                  this.getErrorMessage('userName') : (!this.state.touched.userName && this.props.userResponse && this.props.userResponse.status === '409' && this.props.userResponse.detail.includes("UID")) ? (
                    <p className='errorMessage' >This username is not available<br />
                      A usernames can contains letters{'{a-z}'}, numbers(0-9), dash{'{-}'}, underscore(_), period(.)</p>) : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>Password</label>
                <input type={this.state.type} className={(this.state.isSubmitted && !this.state.touched.password && formErrors && formErrors.password) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='password' placeholder='Password'
                  name='password' value={this.state.password}
                  onChange={this.handleChange} onFocus={this.handleChange} />
                {(this.state.isSubmitted && !this.state.touched.password && formErrors && formErrors.password) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : this.state.type === 'password' ? (<img className="iconhide" src={icon_hide} alt='Eye' onClick={() => this.showHidePassword()} />) : (<img className="iconshow" src={icon_show} alt='Eye' onClick={() => this.showHidePassword()} />)}
                {this.state.isSubmitted && this.state.touched.password && formErrors && this.state.errors.password ? this.getErrorMessage('password') : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>Access code</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.accessCode && formErrors && formErrors.accessCode) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'}
                  id='accessCode' placeholder='Access code'
                  name='accessCode' value={this.state.accessCode}
                  onChange={this.handleChange} />
                {(this.state.isSubmitted && !this.state.touched.accessCode && formErrors && formErrors.accessCode) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {this.state.isSubmitted && this.state.touched.accessCode && formErrors && this.state.errors.accessCode ? this.getErrorMessage('accessCode') : ''}
              </div>
              <div className={(this.state.isSubmitted && !this.state.touched.certify && formErrors && formErrors.certify) ? 'form-check error-border-check' : 'form-check'}>
                {/* <input type='checkbox' name="certify" onChange ={this.handleChange} className='form-check-input' value={this.state.certify} id='exampleCheck1' /> */}

               <div className='form-check-div'> {!this.state.certify ? (<span className='check' onClick={this.checked}><img src={check} alt="check" /></span>) : (<span className='form-check-fill' onClick={this.checked}><img src={check} alt="check" /></span>)}
                <span className='form-check-label'>I certify that I am a U.S. citizen and I permanently reside in the U.S.</span></div>
                {(this.state.isSubmitted && !this.state.touched.certify && formErrors && formErrors.certify) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-check-feedback" /> : ''}
                {/* {formErrors && !this.state.isSubmitted && this.state.errors.certify ? this.getErrorMessage('certify') : ''} */}
                {this.state.isSubmitted && formErrors && formErrors.certify ? this.getErrorMessage('certify') : ''}
              </div>
              <div className='form-group'>
                <button type='button'  style={styles.Button} onClick={this.register}><span style={styles.textOnButton}> SIGN UP</span></button>
                <div className="already-have-account">Already have an account?<span><Link className="login-link" to='/'>Log in</Link></span></div>
              </div>
              <div className='form-terms'>By clicking sign up, you agree to the <span>terms of use</span> and <span>privacy</span><span style={{ marginBottom: "0px" }}> policy,
              and acknowledge that you have read and understood</span> our disclosure brochure, which can be accessed here <span>FormADV2</span>.</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

SignUp.propTypes = {
  // userDetails: PropTypes.arrayOf(PropTypes.object)
  userDetails: PropTypes.any,
  signUp: PropTypes.func,
  userResponse: PropTypes.any
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    // getValidateForm: state.getValidate.getValidate

  }
}

export default withRouter(connect(mapStateToProps, { token, signUp })(SignUp));
