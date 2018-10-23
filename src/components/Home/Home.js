import React from 'react';
import PageHeader from '../common/Header/PageHeader/PageHeader';
import PhoneHeader  from '../common/Header/phoneHeader';
import NavigateComponent from './NavigateComponents';
import Footer from '../common/Footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
      {window.location.pathname === '/validatetemplate'||window.location.pathname === '/passwordSuccess'?'':<PhoneHeader/>}
      {window.location.pathname === '/twiliosuccess'||window.location.pathname === '/twofactordetails'||window.location.pathname === '/loginsuccess'||window.location.pathname === '/forgotusername'||window.location.pathname === '/forgotcheckmail'||window.location.pathname === '/validatetemplate'||window.location.pathname === '/passwordSuccess'||window.location.pathname === '/forgotpassword'? '' :   (<PageHeader pathName ={window.location.pathname}/>)}
      <div className='container'>
        <div className='row form-body'>
          <NavigateComponent/>
        </div>
      </div>
      {window.location.pathname === '/twiliosuccess'||window.location.pathname === '/twofactordetails'||window.location.pathname === '/loginsuccess'||window.location.pathname === '/forgotusername'||window.location.pathname === '/forgotcheckmail'||window.location.pathname === '/validatetemplate'||window.location.pathname === '/passwordSuccess'||window.location.pathname === '/forgotpassword'? '' :   <Footer/>}
    </React.Fragment>
  )
}
export default Home;