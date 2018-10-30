import React, { Component } from 'react';
import { styles } from '../../common/style';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import variables from '../../../css/variables.scss';
import '../login.scss';



class Forgotcheckmail extends Component {
  
  render() {
    
    var user;
   
    for ( const key in this.props.updateuser['emails'] ){
      user=this.props.updateuser['emails'][key]['value'];
     }
    
     return (

      <React.Fragment>
        
          <div className='forgot-check-mail'>
            <h3>Check your email</h3>
              
                <form>
                  <div className='form-group'>
                    <div className='row'>
                      <div className='col-12'>
                        <p>An email with instructions to recover your username was sent to your email address {user}<br/>
                          if no email is received within ten minutes,please check your email spam folder, try again or contact support</p>
                          
                   
                      </div>
                    </div>
                  </div>
                 

                  <div className='form-group offset-4 col-4'>
                    <button type='button' style={styles.Button} onClick={() => this.forgotUsername}><span style={styles.textOnButton}><Link to='/login' style={{color:'white'}}>LOG INTO ACCOUNT</Link></span></button>
                  </div>
                  <div className='form-group col-12'>
                    <div className='row'>
                     
                      <div className='col-12'>
                        <label style={{ color: variables.strongblu,cursor:'pointer',paddingRight:'10px',borderRight:`1px solid ${variables.strongblu}` }}>Resend email</label>
                        <label style={{ color: variables.strongblu,cursor:'pointer',paddingLeft:'10px' }}><Link to='/forgotusername'>Email was sent to wrong email address</Link></label>
                      </div>
                       </div>
                    </div>
                 

                </form>
              
            
          </div>
        
      </React.Fragment>

    )
  }

}
Forgotcheckmail.propTypes = {
  updateUser: PropTypes.any
 
}
const mapStateToProps = (state) => {
  return {
    updateuser: state.updateUser.updateUser
    

  }
}

export default withRouter(connect(mapStateToProps,null)(Forgotcheckmail));

