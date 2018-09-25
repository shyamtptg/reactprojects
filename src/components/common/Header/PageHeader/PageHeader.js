import React from 'react';
import '../../../TwoFactor/Twofactor.scss'
import {PageHeaderRoutes} from './PageHeaderContent';
const PageHeader = (props) => {
  const path = props.pathName;
 return(
<div className="container signup-header">
         {/* <h1 className='page-header text-center'>{path.split('/')[1] === 'signup'? 'Now take the next step to financial freedom' : 'Welcome Back to Bank' }</h1> */}
         <h1 className='page-header text-center'>{path.split('/')[1] === 'signup'?PageHeaderRoutes.PageHeader.signUpRoute :path.split('/')[1] === 'validateEmail'?(<div>{PageHeaderRoutes.PageHeader.validateEmailRoute}</div>):path.split('/')[1] === 'TwoFactor'?(<div className="Congrats-Header">{PageHeaderRoutes.PageHeader.sucessvalidateRoute}</div>):PageHeaderRoutes.PageHeader.loginRoute}</h1>
 
          </div>)
}
export default PageHeader;