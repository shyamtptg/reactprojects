import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class validatEmailTemplate extends Component {

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
                                    paddingTop:'10px'}}>Just one more step...</td>
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
                                    fontSize: '12px',
                                    lineHeight: '20px'}}>
                            You have successfully signed up with NextgenBank. <br/>
                            We just need to validate your email address to activate your account.<br/>
                            Your security code is :
                        </td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'26px',
                                    color:'#06408b',
                                    lineHeight:'30px',
                                    textAlign:'center',
                                    padding:'15px 0px 10px 0px',
                                    fontWeight:'600'}}>867564</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'center',
                                   fontSize:'12px',
                                   lineHeight:'22px',
                                   color: '#888'}}>
                            This security code will be valid for the next 24 hours.
                        </td>
                    </tr>
                    <tr>
                        <td style={{color:'#555555',
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    lineHeight: '20px',
                                    paddingTop: '20px'}}>
                            <Link to='' style={{textDecoration:'none',
                                                color:'#7979fd'}}>Click here</Link> to enter security code and validate your email address.
                        </td>
                    </tr>
                    <tr>
                        <td style={{color:'#555555',
                                    textAlign:'center',
                                    fontSize: '12px',
                                    lineHeight: '20px',
                                    padding:'20px 0px'}}>
                            It is also your final step in the sign up process.<br/>
                            If you have not signed up with NextgenBank, Please ignore this email.
                        </td>
                    </tr>
                    <tr>
                        <td style={{color:'#555555',
                                    textAlign:'center',
                                    fontSize: '12px',
                                    lineHeight:'30px',paddingBottom:'20px'}}>
                                    Regards, <br/>
                            NextGenBank support team
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table style={{marginTop:'325px',
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

export default validatEmailTemplate;