import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../common/style';



class TwoFactorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      mobileNo: '',

      errors: {
        countryCode: undefined,
        mobileNo: undefined

      },
      touched: {
        countryCode: false,
        mobileNo: false

      },
      isSubmitted: false
    }
    this.constraints = {
      countryCode: {
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
    }
    );


  }

  render() {

    return (
      <React.Fragment>
        <div className='two-fact-card col-md-5'>
          <div className='Success'>

            <div className='card'>

              <div className='card-block'>
                <form>
                  <div className='form-group col-12'>
                    <div className='row'>
                      <div className="col-6">
                        <label>Country Code</label>
                      </div>
                    </div>
                    <select className="form-control input-select" id="countryCode" name="countryCode" value={this.state.countryCode} placeholder="select"
                      onChange={this.handleChange} >
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates 971</option>
                      <option>Unite states +1</option>
                      <option>United Kingdom44</option>

                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <div className="row label-text">
                      <div className="col-6">
                        <label>MobileNo</label>
                      </div>
                    </div>
                    <input type='text' className="form-control" id='mobileNo' name='mobileNo' value={this.state.mobileNo}
                      onChange={this.handleChange} />


                  </div>
                  <div className='form-group col-12'>
                    <button className='Enable2FA' type='button' style={styles.Button}><span style={styles.textOnButton}>ENABLE 2FA</span></button>
                  </div>
                  <div className='col-8 offset-5'>
                    <p className="skip"><Link to='/'>Skip</Link></p>

                  </div>
                  <div className='col-8 offset-2'>
                    <p className="edit-two-fact">Edit Two factor authentication settings</p>

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
export default TwoFactorDetails;