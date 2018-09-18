import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
// import {validatingFields} from '../common/validation';
import '../../css/style.scss';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
// import { validateCheck } from "../../redux/actions/validationAction"
import { signUp } from '../../redux/actions/signUpAction';
import { token } from '../../redux/actions/tokenAction';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { styles } from '../common/style';
import About from '../Home/About';
import Errormessage from '../common/Errormessage/Errormessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
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
      errors: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''

      },
      touched: {
        firstName: false,
        lastName: false,
        userName: false,
        email: false,
        password: false

      },
      isSubmitted: false
    }
    this.constraints = {
      firstName: {
        format: {
          pattern: '[A-Za-z]+'
        },
        presence: {
          allowEmpty: false
        },
        length: {
          minimum: 8,
          maximum: 25
        }
      },
      lastName: {
        format: {
          pattern: '[A-Za-z]+'
        },
        presence: {
          allowEmpty: false
        }
      },
      userName: {
        format: {
          pattern: '[A-Za-z]+'
        },
        presence: {
          allowEmpty: false
        }
      },
      email: {
        email: true
      },
      password: {
        length: {
          minimum: 8,
          maximum: 25
        },
        format: {
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}'
        },
        presence: {
          allowEmpty: false
        }
      }
    }
    const data = new URLSearchParams();
    data.append('grant_type','client_credentials');
    this.props.token(data,this.props);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.getElementPostion = this.getElementPostion.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  
  getErrorMessage(inputType) {
    const validJsErrors = validate(this.state, this.constraints);
   
    for (let k in validJsErrors) {
      if (validJsErrors.hasOwnProperty(k)) {
        if (k === inputType) {
          return (validJsErrors[k].map((ele, index) => {
            return <p className='margin0' key={index}>{ele}</p>
          })
          )
        }
      }
    }
  }

  getElementPostion(ele) {
    let element = document.getElementById(ele);
    var domRect = element && element.getBoundingClientRect();
    let k = domRect ? domRect.top : 0;
    return k
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

  handleScroll() {
    let formGroup = document.getElementsByClassName('form-group');
    for (let l = 0; l < formGroup.length; l++) {
      let children = formGroup[l];
      let inputChild = children.getElementsByTagName('input');
      if (inputChild.length > 0) {
        let inputId = inputChild[0].id;
        let element = document.getElementById(inputId);
        var domRect = element && element.getBoundingClientRect();
        let k = domRect ? domRect.top : 0;
        let elementTobeSet = document.getElementById(inputId + 'ToolTip');
        if (elementTobeSet != null) {
          elementTobeSet.style.top = k + "px";;
        }
      }

    }
  }

  validateCheck = (name) => {
    const validJsErrors = validate(this.state, this.constraints);
   
    const errorKeys = validJsErrors ? Object.keys(validJsErrors) : {};
    if (validJsErrors) {
      Object.entries(validJsErrors)
        .forEach((key) => {
          let errors = { ...this.props.getValidateForm };
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
 

  componentDidMount() {
   
  
    window.addEventListener('scroll',this.handleScroll);
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
          password: false
        }
      });
    });
    
    if (this.state.userName !== "" && this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.password !== "") {
      const registerData = {
        'userName': this.state.userName,
        'displayName': this.state.firstName + '' + this.state.lastName,
        'emails': [{ value: this.state.email }],
        'password': this.state.password
      }
      this.props.signUp(registerData,this.props.userDetails['access_token'],this.props);

     
    }
    else {
      console.log("Form is invalid");
    }
  }
  render() {
    const formErrors = validate(this.state,this.constraints);
    return (
      <React.Fragment>
        <div className='col-md-7'>
          <About /></div>
        <div className='col-md-5'>
          <div className='card'>
            <div className='card-header'>
              <h3 className='m-0'>SIGN UP NOW</h3>
            </div>
            {(this.props.userResponse.status === '409') ?
              <Errormessage error={this.props.userResponse.detail} /> : ''}
            <div className='card-block'>
              <div className='form-group has-feedback'>
                <label className='control-label'>FirstName:</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.firstName && formErrors &&formErrors.firstName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'}
                  id='firstName' placeholder='FirstName'
                  name='firstName' value={this.state.firstName}
                  onChange={this.handleChange} data-tip='' data-for='firstNameToolTip' data-event='blur' />
                {(this.state.isSubmitted && !this.state.touched.firstName && formErrors && formErrors.firstName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {formErrors && this.state.errors.firstName ?
                  (<ReactTooltip id='firstNameToolTip' data-offset={{ top: this.getElementPostion('firstName') }}
                    place='left' scrollHide={false} effect='solid' multiline={true}>
                    {this.getErrorMessage('firstName')}
                  </ReactTooltip>)
                  : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>LastName:</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.lastName && formErrors &&formErrors.lastName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'}
                  id='lastName' placeholder='LastName'
                  name='lastName' value={this.state.lastName}
                  onChange={this.handleChange} data-tip='' data-for='lastNameToolTip' data-event='blur' />
                {(this.state.isSubmitted && !this.state.touched.lastName && formErrors && formErrors.lastName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {formErrors && this.state.errors.lastName?
                  (<ReactTooltip id='lastNameToolTip' data-offset={{ top: this.getElementPostion('lastName') }}
                    place='left' scrollHide={false} effect='solid' multiline={true}>
                    {this.getErrorMessage('lastName')}
                  </ReactTooltip>) : ''}

              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>EMAIL:</label>
                <input type='email' className={(this.state.isSubmitted && !this.state.touched.email && formErrors &&formErrors.email) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'}
                  id='email' placeholder='Email'
                  name='email' value={this.state.email}
                  onChange={this.handleChange} data-tip='' data-for='emailToolTip' data-event='blur' />
                {(this.state.isSubmitted && !this.state.touched.email && formErrors && formErrors.email) ?<FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {formErrors && this.state.errors.email ?
                  (<ReactTooltip id='emailToolTip' data-offset={{ top: this.getElementPostion('email') }}
                    place='left' scrollHide={false} effect='solid' multiline={true}>
                    {this.getErrorMessage('email')}
                  </ReactTooltip>) : ''}

              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>USERNAME:</label>
                <input type='text' className={(this.state.isSubmitted && !this.state.touched.userName && formErrors &&formErrors.userName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'}
                  id='userName' placeholder='UserName'
                  name='userName' value={this.state.userName}
                  onChange={this.handleChange} data-tip='' data-for='userNameToolTip' data-event='blur' />
                {(this.state.isSubmitted && !this.state.touched.userName && formErrors && formErrors.userName) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {formErrors && this.state.errors.userName ?
                  (<ReactTooltip id='userNameToolTip' data-offset={{ top: this.getElementPostion('userName') }}
                    place='left' scrollHide={false} effect='solid' multiline={true}>
                    {this.getErrorMessage('userName')}
                  </ReactTooltip>) : ''}
              </div>
              <div className='form-group has-feedback'>
                <label className='control-label'>PASSWORD:</label>
                <input type='password' className={(this.state.isSubmitted && !this.state.touched.password && formErrors && formErrors.password) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'}
                  id='password' placeholder='Password'
                  name='password' value={this.state.password}
                  onChange={this.handleChange} data-tip='' data-for='passwordToolTip' data-event='blur' />
                {(this.state.isSubmitted && !this.state.touched.password && formErrors && formErrors.password) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback" /> : ''}
                {formErrors &&this.state.errors.password ?
                  (<ReactTooltip id='passwordToolTip' data-offset={{ top: this.getElementPostion('password') }}
                    place='left' scrollHide={false} effect='solid' multiline={true}>
                    {this.getErrorMessage('password')}
                  </ReactTooltip>) : ''}

              </div>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                <span className='form-check-label'>I certify that I am a U.S. citizen and I permanently reside in the U.S.</span>
              </div>
              <div className='form-group'>
                <button type='button' style={styles.Button} onClick={this.register}><span style={styles.textOnButton}> SIGN UP</span></button>
                <div className="already-have-account">Already have an account?<span><Link className="login-link" to='/'>Login</Link></span></div>
              </div>
              <div className='form-terms'>By clicking sign up, you agree to the <span>Terms&nbsp;of&nbsp;Use</span> and <span>Privacy Policy</span>,
              and acknowledge that you have read and understood our disclosure brochure, which can be accessed here:
            <span>FormADV2</span>.</div>
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
  // userResponse: PropTypes.any
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getValidateForm:state.getValidate.getValidate

  }
}

export default withRouter(connect(mapStateToProps, { token, signUp })(SignUp));
