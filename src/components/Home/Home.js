import React from 'react';
import PageHeader from '../common/Header/PageHeader/PageHeader';
import PhoneHeader  from '../common/Header/phoneHeader';
import NavigateComponent from './NavigateComponents';
import Footer from '../common/Footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
      {window.location.pathname === '/validatetemplate'||window.location.pathname === '/passwordSuccess'?'':<PhoneHeader/>}
      {window.location.pathname === '/twiliosuccess'||window.location.pathname === '/twofactordetails'||window.location.pathname === '/loginsuccess'||window.location.pathname === '/forgotusername'||window.location.pathname === '/forgotcheckmail'||window.location.pathname === '/validatetemplate'||window.location.pathname === '/passwordSuccess'||window.location.pathname === '/forgotpassword'||window.location.pathname ==='/createpassword'? '' :   (<PageHeader pathName ={window.location.pathname}/>)}
      <div className='container'>
        <div className='row form-body'>
          <NavigateComponent/>
        </div>
      </div>
      {window.screen.width < 768 || window.location.pathname === '/'|| window.location.pathname === '/signup'|| window.location.pathname === '/validatemail'||window.location.pathname === '/twofactor'? <Footer/> : ''}
    </React.Fragment>
  )
}
export default Home;