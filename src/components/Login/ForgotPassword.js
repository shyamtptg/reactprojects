import React, { Component } from 'react';
import validate from 'validate.js';
import { Link } from 'react-router-dom';
import {styles} from '../common/style';

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
  }

  forgotpass(e){
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
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className="row label-text">
                <div className="col-6">
                  <label>Provide username</label>
                </div>
              </div>
              <input type='text' className={(this.state.isSubmitted && !this.state.touched.userName && formErrors.userName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'} id='userName' name='userName' value={this.state.userName}
                onChange={this.handleChange} />

            </div>
            <div className='form-group col-12'>
              <button className="forgotbtn" onClick={this.forgotpass} type='button' style={styles.Button}><span style={styles.textOnButton}>RESET PASSWORD</span></button>
            </div>
            <div className="col-12 forgotpassword">
            <span><Link to='/'>Back to Login</Link></span><span style={{float:"right"}}>Forgot your username</span>

            </div>
          </form>
        </div>
      </div>


    )
  }
}
export default ForgotPassword;