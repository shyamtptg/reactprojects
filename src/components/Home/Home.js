import React from 'react';
import PageHeader from './PageHeader';
import PhoneHeader  from '../common/Header/phoneHeader';
import Login from '../Login/Login';
import { Route,Switch } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import ForgotPassword from '../Login/ForgotPassword';
import ValidateEmail from '../SignUp/validateEmail';
import Footer from '../common/Footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
     <PhoneHeader/>
     <PageHeader pathName ={window.location.pathname}/>
      <div className='container'>
        
        <div className='row form-body'>
        <Switch>  
         <Route exact path='/' component={Login}/>
         <Route path='/signup' component={SignUp}/>
         <Route path='/forgotpassword' component={ForgotPassword}/>
         <Route path='/validateEmail' component={ValidateEmail}/>
      </Switch>
     
            </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}
export default Home;