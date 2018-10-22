import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { styles } from '../../common/style';
// import { withRouter } from 'react-router';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';




class PasswordSuccessChanged extends Component {

  render() {
    return (
    <React.Fragment>
     <table style={{width: '100%',
                    maxWidth: '800px', 
                    margin: '0px auto', 
                    display: 'table',
                    boxShadow: '0 0 2px rgba(0,0,0,0.2)',
                    backgroundColor: '#fff', 
                    fontFamily: 'Open Sans', 
                    letterSpacing: '0.03em'}}>
        <tr>
            <td style={{height: '210px',
                        backgroundColor: '#06408b',
                        position: 'relative'}}>
                <h1 style={{color: '#fff',
                            textAlign:'center',
                            fontSize: '22px',
                            lineHeight: '30px',
                            margin: '0px',
                            padding: '20px 0px',
                            fontWeight: 'normal',
                            marginTop: '-105px'}}>
                    <span>NextGen</span>
                    <span style={{fontWeight:'100',
                                  marginLeft: '1px'}}>Bank</span>
                </h1>
                <table style={{width: '600px', 
                              margin: '0px auto', 
                              display:'table',
                              position:'absolute',
                              left:'100px',
                               background:'#fff',
                               padding: '25px 40px',
                               boxShadow:'0 0 6px rgba(0,0,0,0.4)'}}>
                    <tr>
                        <td style={{fontSize:'16px',
                                    textAlign: 'center',
                                    paddingBottom:'20px',
                                    fontWeight:'600',
                                    color:'#333',
                                    paddingTop:'10px'}}>Password Successfully changed</td>
                    </tr>
                    <tr>
                        <td style={{color: '#555555', 
                                    textAlign:'center',
                                    fontSize: '12px',
                                    lineHeight: '20px'}}>Hi John, </td>
                    </tr>
                    <tr>
                        <td style={{color: '#555555',
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    lineHeight: '20px'}}>
                            You have successfully changed the password on: <br/>
                           
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingTop:'10px'}}><button type='button' style={{
                                    display:'table',
                                    color:'#fff',
                                    margin:'0px auto',
                                    backgroundColor:'#06408b',
                                    border:'1px solid #002F87',
                                    borderRadius:'3px',
                                    textAlign:'center',
                                    fontSize:'14px',
                                    lineHeight:'30px',
                                    width:'300px',
                                    fontWeight:'300'}} >LOG IN TO YOUR ACCOUNT </button></td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'center',
                                   fontSize:'12px',
                                   lineHeight:'22px',
                                   color:'#555555',
                                   padding:'20px 0px'}}>   
                            If you made this change, you dont need to do anything more<br/>
                            you can use your new password to access your account.<br/>
                            If you did not reset your password.please <span style={{color:'#0195D4'}}>contact us immediately</span>    

                        </td>
                    </tr>
                    
                   
                    <tr>
                        <td style={{color:'#555555',
                                    textAlign:'center',
                                    fontSize: '12px',
                                    lineHeight:'25px',paddingBottom:'20px'}}>
                                    Regards, <br/>
                            NextGenBank support team
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table style={{marginTop:'200px',
                               paddingBottom:'20px',
                               marginLeft: '100px',
                               marginRight: '100px'}}>
                    <tr>
                        <td style={{textAlign:'center',
                                    fontSize:'12px',
                                    lineHeight:'14px',
                                    color:'#888'}}>
                            &copy; 2018 Nextgen Investment Advisors. All Rights Reserved.
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'center',
                                    fontSize: '12px',
                                    lineHeight:'14px',
                                    color: '#888'}}>
                            NextGen Investment Advisors is a registered investment Adviser under the rules of the SEC. All data provided by Xignite.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

      </React.Fragment>
    )
  }
}

export default PasswordSuccessChanged;