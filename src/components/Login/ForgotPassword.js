import React, { Component } from 'react';
import validate from 'validate.js';
import { token } from '../../redux/actions/tokenAction';
import {forgotpasswordData} from '../../redux/actions/forgotpassword';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styles } from '../common/style';

class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {

      userName: '',
      errors: {

        userName: ''

      },
      touched: {

        userName: false

      },
      isSubmitted: false
    }

    this.constraints = {


      password: {
        presence: {
          allowEmpty: false
        }
      }
    }

    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    this.props.token(data, this.props);
    this.handleChange = this.handleChange.bind(this);
    this.forgotpass=this.forgotpass.bind(this);
  }

  forgotpass(e) {
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          userName: false

        }
      });
    });
    const forgotData = {
      'userName': this.state.userName
     
    }
    this.props.forgotpasswordData(forgotData,this.props.userDetails['access_token'], this.props);
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
    const formErrors = validate(this.state, this.constraints);

    return (
      <div className='card forgot-box col-sm-5'>

        <div className='card-header two-fact-auth'>
          Provide your username
           </div>
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className='row'>
                <div className='col-12 '>
                  <p className="recover-user">We will send you an email with instructions on how
                        to reset <br />your password.
                   </p>
                </div>
              </div>
            </div>
            <div className='form-group col-12'>
              <div className="row label-text">
                <div className="col-6">
                  <label>Username</label>
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                  <label style={{ color: '#0195D4' }}><Link to='/forgotusername'>Forgot username?</Link></label>
                </div>
              </div>
              <input type='text' className={(this.state.isSubmitted && !this.state.touched.userName && formErrors.userName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'} id='userName' name='userName' value={this.state.userName}
                onChange={this.handleChange} />

            </div>
            <div className='form-group col-12'>
              <button className="forgotbtn" onClick={this.forgotpass} type='button' style={styles.Button}><span style={styles.textOnButton}>CONTINUE</span></button>
            </div>

          </form>
        </div>
      </div>


    )
  }
}
ForgotPassword.propTypes = {
  // userDetails: PropTypes.arrayOf(PropTypes.object)
  userDetails: PropTypes.any,
  userResponse: PropTypes.any
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails
    // getValidateForm: state.getValidate.getValidate

  }
}

export default withRouter(connect(mapStateToProps, { token,forgotpasswordData })(ForgotPassword));
