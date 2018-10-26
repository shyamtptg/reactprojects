import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from '../../common/style';
import validate from 'validate.js';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import '../../../css/style.scss';
import PropTypes from 'prop-types';
import { token } from '../../../redux/actions/tokenAction';
import { forgotuserData } from '../../../redux/actions/forgotusername';


class Forgotusername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',


      errors: {
        email: '',

      },
      touched: {
        email: false

      },
      isSubmitted: false
    }
    this.constraints = {
      email: {
        email: true
      }
    }
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    this.props.token(data, this.props);
    this.handleChange = this.handleChange.bind(this);
    this.forgotUsername=this.forgotUsername.bind(this);
    // this.forgotUsername = this.forgotUsername.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
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
  forgotUsername() {
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          email: false

        }
      });
    });

    const data =
    {
      'emails': [{
        'value': this.state.email
      }],
      'name': { 'familyName': 'Jemstep' }

    }
    const email=data.emails[0].value;
    this.props.forgotuserData(data,email,this.props.userDetails['access_token'], this.props);

    
  }

  getErrorMessage(inputType) {
    const validJsErrors = validate(this.state, this.constraints);
    const inputSpace = inputType.replace(/([A-Z])/g, ' $1').trim()
    const toUpper = inputSpace.charAt(0).toUpperCase() + inputSpace.substr(1).toLowerCase();
    for (let k in validJsErrors) {

      if (validJsErrors.hasOwnProperty(k)) {
        if (k === inputType) {
          return (validJsErrors[k].map((ele, index) => {
            return <p className='errorMessage' key={index}> { ele === toUpper + ' can\'t be blank' ? toUpper + ' address is required' : ele === toUpper + ' is invalid' ? toUpper + ' address is required' : ele === toUpper + ' is not a valid email' ? toUpper + '  address is required' : ele}</p>
          })
          )
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
          email: undefined


        }
      });

    }
  }
  render() {
    const formErrors = validate(this.state, this.constraints);
    console.log(formErrors);
    return (
      <React.Fragment>
        <div className='two-fact-card col-md-5'>
          <div className='Success'>
            <div className='card'>
              <div className='card-header two-fact-auth'>
                Provide your email address
              </div>
              <div className='card-block'>
                <form>
                  <div className='form-group col-12'>
                    <div className='row'>
                      <div className='col-12 '>
                        <p>We will send you an email with instructions on how to
                           recover your username.
                     </p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group col-12'>
                    <div className='row'>
                      <div className='col-6'>
                        <label>Email address</label>
                      </div>
                    </div>
                    <input type='email' className={(this.state.isSubmitted && !this.state.touched.email && formErrors && formErrors.email) ? 'form-control form-control-lg error-border' : 'form-control form-control-lg'} id='email' name='email' value={this.state.email}
                      onChange={this.handleChange} onFocus={this.handleChange} />
                    {(this.state.isSubmitted && !this.state.touched.email && formErrors && formErrors.email) ? <FontAwesomeIcon icon={faExclamationCircle} className="form-control-feedback form-control-feedback-forget" /> : ''}
                    {this.state.isSubmitted && this.state.touched.email && formErrors && this.state.errors.email ?

                      this.getErrorMessage('email') : ''}
                  </div>

                  <div className='form-group col-12'>
                    <button type='button' style={styles.Button} onClick={this.forgotUsername}><span style={styles.textOnButton}>CONTINUE</span></button>
                  </div>
                  <div className='form-group col-12'>
                    <div className='row'>
                      <div className='col-12 decide'>
                        <p>if you have forgotten the email address associated with your
                          account, contact our help number</p>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }

}
Forgotusername.propTypes = {
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

export default withRouter(connect(mapStateToProps, { forgotuserData,token })(Forgotusername));

