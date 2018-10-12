import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { styles } from '../../common/style';
import validate from 'validate.js';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../../../redux/actions/updateUserAction';


class Forgotusername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',


      errors: {
        email: undefined,

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
    this.handleChange = this.handleChange.bind(this);
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
          country: false,
          mobileNo: false
        }
      });
    });

    const data =
    {
      "emails": [{
        "value": this.state.email
      }]

    }
    this.props.updateUser(data, this.props.userDetails['access_token'], this.props.userResponse['id'], this.props);


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
                      <div className="col-6">
                        <label>Email address</label>
                      </div>
                    </div>
                    <input type='email' className="form-control" id='email' name='email' value={this.state.email}
                      onChange={this.handleChange} />
                  </div>

                  <div className='form-group col-12'>
                    <button type='button' style={styles.Button} onClick={() => this.forgotUsername}><span style={styles.textOnButton}>CONTINUE</span></button>
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

export default withRouter(connect(mapStateToProps, { updateUser })(Forgotusername));

