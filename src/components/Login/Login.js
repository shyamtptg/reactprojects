import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../common/style';
import { login } from '../../redux/actions/getUserLogin'
import { connect } from 'react-redux';
import validate from 'validate.js';
// // import Header from '../common/Header';
// import { Route,Switch} from 'react-router-dom';
// import SignUp from './SignUp'
import { withRouter } from 'react-router';
import SuccessMessage from '../common/SuccessMessage/SuccessMessage';
import Errormessage from '../common/Errormessage/Errormessage';

// import { token } from '../actions/tokenAction';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      errors: {
        userName: '',
        password: ''

      },
      touched: {
        userName: false,
        password: false

      },
      isSubmitted: false
    }

    this.constraints = {
      userName: {
        presence: {
          allowEmpty: false
        }
      },
      password: {
        presence: {
          allowEmpty: false
        }
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    this.setState({
      ...this.state,
      isSubmitted: true
    }, () => {
      this.setState({
        touched: {
          userName: false,
          email: false,
          password: false
        }
      });
    });

    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('scope', 'token openid');
    data.append('username', `${this.state.userName}`);
    data.append('password', `${this.state.password}`);
    this.props.login(data, this.props);
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
  componentDidMount() {

  }


  componentWillReceiveProps(nextProps) {

  }
  render() {
    const formErrors = validate(this.state, this.constraints);

    return (

      <div className='card login-box col-sm-5'>
        <div className='card-header'>
          LOGIN TO YOUR ACCOUNT
           </div>
        {(this.props.user === 200) ?
          <SuccessMessage success="Login Successful"/> : (this.props.user === 401) ?
            <Errormessage error="Invalid Username or Password" /> : ''}
        <div className='card-block'>
          <form>
            <div className='form-group col-12'>
              <div className="row label-text">
                <div className="col-6">
                  <label>Username</label>
                </div>
                <div className="col-6">
                  <Link to="#">Forgot username ?</Link>
                </div>
              </div>
              <input type='text' className={(this.state.isSubmitted && !this.state.touched.userName&&formErrors&&formErrors.userName) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'} id='userName' name='userName' value={this.state.userName}
                onChange={this.handleChange} />
            </div>
            <div className='form-group col-12'>
              <div className="row label-text">
                <div className="col-6">
                  <label>Password</label>
                </div>
                <div className="col-6">
                  <Link to="/forgotpassword">Forgot password ?</Link>
                </div>
              </div>
              <input type='password' className={(this.state.isSubmitted && !this.state.touched.password&&formErrors&&formErrors.password) ? 'form-control form-control-lg error-broder' : 'form-control form-control-lg'} id='pwd' name='password' value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <div className='form-group col-12'>
              <button className="loginbtn" onClick={this.login} type='button' style={styles.Button}><span style={styles.textOnButton}>Login</span></button>
            </div>
            <div className="col-12 donthvacnt">
              <span>Don't have an account ?</span><Link to='/signup'> SignUp</Link>

            </div>
          </form>
        </div>

      </div>


    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.getUser



  }
}
export default withRouter(connect(mapStateToProps, { login })(Login));
