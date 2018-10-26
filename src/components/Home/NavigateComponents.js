import React from 'react';
import { Route,Switch } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import ForgotPassword from '../Login/ForgotPassword';
import ValidateEmail from '../SignUp/validateEmail';
import Login from '../Login/Login';
import TwoFactor from '../TwoFactor/TwoFactor';
import TwoFactorDetails from '../TwoFactor/TwoFactorDetails';
import TwoFactorAuth from '../TwoFactor/TwoFactorAuth';
import TwilioSuccess from '../TwoFactor/TwilioSuccess';
import LogintwoFactor from '../TwoFactor/logintwofact';
import LoginSuccess from '../Login/loginsuccess';
import Forgotusername from '../Login/Recoverusername/Forgotusername';
import Forgotcheckmail from '../Login/Recoverusername/Forgotcheckmail';
import validatEmailTemplate from '../Emailtemplates/validatEmailTemplate';
import PasswordSuccessChanged from '../Emailtemplates/passwordSuccess';
import ForgotPasswordcheckmail from '../Login/Forgotpasswordcheckmail';
import Createnewpassword from '../Login/Createpassword';

const Home = () => {
  return (
    <React.Fragment>
     <Switch>  
         <Route exact path='/' component={Login}/>
         <Route path='/signup' component={SignUp}/>
         <Route path='/forgotpassword' component={ForgotPassword}/>
         <Route path='/validatemail' component={ValidateEmail}/>
         <Route path='/twofactor' component={TwoFactor}/>
         <Route path='/twofactordetails' component={TwoFactorDetails}/>
         <Route path='/twofactorauth' component={TwoFactorAuth}/>
         <Route path='/twiliosuccess' component={TwilioSuccess}/>
         <Route path='/logintwofact' component={LogintwoFactor}/>
         <Route path='/loginsuccess' component={LoginSuccess}/>
         <Route path='/forgotusername' component={Forgotusername}/>
         <Route path='/forgotcheckmail' component={Forgotcheckmail}/>
         <Route path='/validatetemplate' component={validatEmailTemplate}/>
         <Route path='/passwordSuccess'  component={PasswordSuccessChanged}/>
         <Route path='/forgotpassword'  component={ForgotPassword}/>
         <Route path='/forgotpasswordcheckmail'  component={ForgotPasswordcheckmail}/>
         <Route path='/createpassword'  component={Createnewpassword}/>
         <Route path='/login' component={() => window.location = 'https://myinno.myglu.com/'}/>

      </Switch>
    </React.Fragment>
  )
}
export default Home;