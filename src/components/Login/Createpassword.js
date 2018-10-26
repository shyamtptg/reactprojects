import React, { Component } from 'react';
import { updateUser } from '../../redux/actions/updatePassword';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import icon_hide from '../../assets/icon_hide.svg';
import icon_show from '../../assets/icon_show.svg';
import validate from 'validate.js';
import '../../css/style.scss';
// import { Link } from 'react-router-dom';
// import { styles } from '../common/style';
import './login.scss';
class Createnewpassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      type: 'password',
      errors: {
        password: ''

      },
      touched: {
        password: false

      },
      isSubmitted: false

    }

    this.constraints = {
      password: {
        length: {
          maximum: 6

        },
        presence: {
          allowEmpty: false
        }
      }
    }
    this.updatePassword = this.updatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updatePassword() {
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          password: false
        }
      });
    });

    const password = {
      'password': this.state.password

    }
    this.props.updateUser(password, this.props.userDetails['access_token'], this.props.getId['id'], this.props);


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
  showHidePassword() {
    this.setState(prevState => ({
      type: prevState.type === 'password' ? 'text' : 'password'
    }));
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

      <div className='two-fact-card col-sm-12 col-md-7 col-lg-5'>
        <div class='Success'>
          <div class='card'>
            <div class='card-header two-fact-auth1'>
              Create a new password
            </div>
            <div class='card-block'>
              <form>
                <div class='form-group col-12'>
                  <div class='row'>
                    <div class='col-12'>
                      <label>Password</label>
                    </div>
                  </div>
                  <input type={this.state.type} class='form-control' id='password' name='password'
                    value={this.state.password} onChange={this.handleChange} />
                  {this.state.type === 'password' ? (<img className='iconhidelog' src={icon_hide} alt='Eye' onClick={() => this.showHidePassword()} />) : (<img className='iconshowlog' src={icon_show} alt='Eye' onClick={() => this.showHidePassword()} />)}

                </div>

                <div class='form-group col-12'>
                  <button onClick={this.updatePassword} type='button' className='btn-class'><span >CREATE PASSWORD</span></button>
                </div>


              </form>
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
    getId: state.getTwilio.getTwilioUser
    // getValidateForm: state.getValidate.getValidate

  }
}

export default withRouter(connect(mapStateToProps, { updateUser })(Createnewpassword));