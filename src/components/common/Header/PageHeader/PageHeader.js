import React from 'react';
import '../../../TwoFactor/Twofactor.scss'
import { connect } from 'react-redux';
import {PageHeaderRoutes} from './PageHeaderContent';
import { withRouter } from 'react-router';
const PageHeader = (props) => {
  const path = props.pathName;
  var user;
  var phoneNumber;
  for ( const key in props.getPhoneNumber['emails'] ){
    phoneNumber=props.getPhoneNumber['phoneNumbers'][key]['value'];
    var splitphone = phoneNumber.substr(-4, phoneNumber.length)
    phoneNumber = phoneNumber[0]+ '*******' + splitphone;
   
 }
  
  
  console.log("phone",phoneNumber);
  
  for ( const key in props.userResponse['emails'] ){
     user=props.userResponse['emails'][key]['value'];
     var splitmail = user.split('@')
     user = splitmail[0].charAt(0)+ '*****' + splitmail[0].substr(-2,  splitmail[0].length)+ '@'+splitmail[1];
    
  }
 return(
   
<div className="container signup-header">
         {/* <h1 className='page-header text-center'>{path.split('/')[1] === 'signup'? 'Now take the next step to financial freedom' : 'Welcome Back to Bank' }</h1> */}
         <h1 className='page-header text-center'>
         {path.split('/')[1] === 'signup'?PageHeaderRoutes.PageHeader.signUpRoute 
         :path.split('/')[1] === 'validateEmail'?
         (<div><h2>{PageHeaderRoutes.PageHeader.validateEmailRoute}</h2><p className="header-content">{PageHeaderRoutes.PageHeader.validateEmailRouteContent1.replace('j@gmail',user)}</p><p className="header-content">{PageHeaderRoutes.PageHeader.validateEmailRouteContent2}</p></div>)
         :path.split('/')[1] === 'TwoFactor'?(<div className="Congrats-Header">{PageHeaderRoutes.PageHeader.sucessvalidateRoute}</div>)
         :path.split('/')[1] === 'TwoFactorDetails'?(<div className="Two-Factor-Details"><h2>{PageHeaderRoutes.PageHeader.twofactorAuthenticationRoute}</h2><p className="header-content">{PageHeaderRoutes.PageHeader.twofactorContent1}</p><p className="header-content">{PageHeaderRoutes.PageHeader.twofactorContent2}</p></div>)
         :path.split('/')[1] === 'TwoFactorAuth'?(<div><h2>{PageHeaderRoutes.PageHeader.checkyourcode}</h2><p className="two-fact-validate">{PageHeaderRoutes.PageHeader.checkvalidateContent.replace('number',phoneNumber)}</p><p className="two-fact-validate">{PageHeaderRoutes.PageHeader.checkwithtime}</p></div>)
         :path.split('/')[1] === 'logintwofact'?(<div><h2>{PageHeaderRoutes.PageHeader.checkyourcode}</h2><p className="two-fact-validate">{PageHeaderRoutes.PageHeader.checkvalidateContent.replace('number',phoneNumber)}</p><p className="two-fact-validate">{PageHeaderRoutes.PageHeader.checkwithtime}</p></div>)
         :PageHeaderRoutes.PageHeader.loginRoute}</h1>
 
          </div>)
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.signup.userSignupDetails,
    getPhoneNumber:state.updateUser.updateUser
 }
}
export default withRouter(connect(mapStateToProps,null)(PageHeader));
