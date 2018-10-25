import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { styles } from '../common/style';
import validate from 'validate.js';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../../redux/actions/updateUserAction';


class TwoFactorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      mobileNo: '',
      
      errors: {
        country: undefined,
        mobileNo: undefined

      },
      touched: {
        country: false,
        mobileNo: false

      },
      isSubmitted: false
    }
    this.constraints = {
      country: {
        presence: {
          allowEmpty: false
        }

      },
      mobileNo: {
        presence: {
          allowEmpty: false
        }
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
  twoFactorDetails() {
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
      "addresses": [{

        "country": this.state.country

      }],
      "phoneNumbers": [{ "value": this.state.mobileNo, "type": "mobile" }]
     

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
        <div className='two-fact-card col-sm-12 col-md-7 col-lg-5'>
          <div className='Success'>
            <div className='card'>
              <div className='card-header two-fact-auth'>
                Provide your phone number
              </div>
              <div className='card-block'>
                <form className="twofactdetails">
                  <div className='form-group col-12'>
                  <div className='row'>
                  <div className='col-12 '>
                    <p className="twofactdetails">You will receive a security code at this number every time you 
                       sign in.Standard messaging rates will apply.
                     </p>
                  </div>
                  </div>
                  </div>
                  <div className='form-group col-12'>
                    <div className='row'>
                      <div className="col-6">
                        <label>Country Code</label>
                      </div>
                    </div>
                    <select className="form-control input-select" id="country" name="country" value={this.state.country} placeholder="select"
                      onChange={this.handleChange} autoFocus={true}>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates 971</option>
                      <option>Unite states +1</option>
                      <option>United Kingdom44</option>
                      <option>IN</option>

                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <div className="row label-text">
                      <div className="col-6">
                        <label>Mobile number</label>
                      </div>
                    </div>
                    <input type='text' className="form-control" id='mobileNo' name='mobileNo' value={this.state.mobileNo}
                      onChange={this.handleChange} />


                  </div>
                  <div className='form-group col-12'>
                    <button className='Enable2FA' type='button' style={styles.Button} onClick={() => this.twoFactorDetails()}><span style={styles.textOnButton}>CONTINUE</span></button>
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
TwoFactorDetails.propTypes = {
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

export default withRouter(connect(mapStateToProps, { updateUser })(TwoFactorDetails));

