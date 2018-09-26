import React from 'react';
import { Route,Switch } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import ForgotPassword from '../Login/ForgotPassword';
import ValidateEmail from '../SignUp/validateEmail';
import Login from '../Login/Login';
import TwoFactor from '../TwoFactor/TwoFactor';
import TwoFactorDetails from '../TwoFactor/TwoFactorDetails';

const Home = () => {
  return (
    <React.Fragment>
     <Switch>  
         <Route exact path='/' component={Login}/>
         <Route path='/signup' component={SignUp}/>
         <Route path='/forgotpassword' component={ForgotPassword}/>
         <Route path='/validateEmail' component={ValidateEmail}/>
         <Route path='/TwoFactor' component={TwoFactor}/>
         <Route path='/TwoFactorDetails' component={TwoFactorDetails}/>
      </Switch>
    </React.Fragment>
  )
}
export default Home;