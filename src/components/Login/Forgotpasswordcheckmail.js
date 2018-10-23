import React, { Component } from 'react';
import validate from 'validate.js';
import {validateData} from '../../redux/actions/forgotvalidate';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { styles } from '../common/style';
import './login.scss';
class ForgotPasswordcheckmail extends Component {
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
      isSubmitted: false
     
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
    this.props.validateData(OTP, this.props.userDetails['access_token'], this.props.getId['id'], this.props);


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


  render() {
    return (
      <div className='container'>
        <div className='row form-body-forgot'>
          <div className='two-fact-card col-md-12'>
            <div className='Success'>
              <div className='card'>
                <div className='card-header two-fact-auth1'>
                  Enter security code
                    </div>
                <div className='card-block'>
                  <form>
                    <div className='form-group col-12'>
                      <div className='row'>
                        <div className='col-12'>
                          <label>Security code</label>
                          <Link to=''>Resend code</Link>
                        </div>
                      </div>
                      <input type='text' className='form-control' id='preferredLanguage' name='preferredLanguage'  value={this.state.preferredLanguage} placeholder='123456'
                       onChange={this.handleChange}/>
                    </div>

                    <div className='form-group col-12'>
                      <button onClick={this.validateSecurity} type='button' className='btn-class'><span >CONTINUE</span></button>
                    </div>

                    <div className='form-group col-12'>
                      <p className='bottom'>Code was sent to wrong email address</p>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getId:state.getTwilio.getTwilioUser
    // getValidateForm: state.getValidate.getValidate

  }
}

export default withRouter(connect(mapStateToProps, { validateData })(ForgotPasswordcheckmail));




