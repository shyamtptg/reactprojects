import React, { Component } from 'react';
import validate from 'validate.js';
import { validateData } from '../../redux/actions/validateEmailAction';
import { Link } from 'react-router-dom';
import {styles} from '../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class ValidateEmail extends Component {

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
    this.props.validateData(OTP,this.props.userDetails['access_token'],this.props.userResponse["id"],this.props);

   
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
  console.log(this.props.userResponse["id"]);
  console.log("user response",this.props.userResponse);
  }
 

  validateCheck = (name) => {
    const validJsErrors = validate(this.state,this.constraints);
    console.log("valid Js errors", validJsErrors)
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
    
    console.log("Email validation",this.props.getEmailValidate);
    // const formErrors = validate(this.state,this.constraints);

    return (
      <div className='card validate-email-box col-sm-5'>
       <div className='card-header'>
          VALIDATE YOUR EMAIL
           </div>
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className="row label-text">
                <div className="col-12">
                  <label>Security Code</label>
                </div>
              </div>
              <input type='text' id='preferredLanguage' placeholder='OTP'
                  name='preferredLanguage' value={this.state.preferredLanguage} onChange={this.handleChange} />

            </div>
            <div className='form-group col-12'>
              <button className="forgotbtn" onClick={this.validateSecurity} type='button' style={styles.Button}><span style={styles.textOnButton}>SUBMIT</span></button>
            </div>
            <div className="col-12">
            <span>Didn't Recieve Security code</span><span style={{float:"right"}}><Link to='/validateEmail'>Resend</Link></span>

            </div>
            <div className="col-12">
            <span><Link to='/'>Back to Login</Link></span>

            </div>
          </form>
        </div>
      </div>


    )
  }
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.token.userDetails,
    userResponse: state.signup.userSignupDetails,
    getEmailValidate:state.getEmailValidation.getEmailValidate

  }
}

export default withRouter(connect(mapStateToProps,{validateData})(ValidateEmail));