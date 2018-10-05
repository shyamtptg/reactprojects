import React from 'react';
import PageHeader from '../common/Header/PageHeader/PageHeader';
import PhoneHeader  from '../common/Header/phoneHeader';
import NavigateComponent from './NavigateComponents';
import Footer from '../common/Footer/Footer';

const Home = () => {
  console.log(window.location.pathname);
  return (
    <React.Fragment>
      <PhoneHeader/>
      {window.location.pathname === '/TwilioSuccess'||window.location.pathname === '/TwoFactorDetails'? '' :   (<PageHeader pathName ={window.location.pathname}/>)}
      <div className='container'>
        <div className='row form-body'>
          <NavigateComponent/>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}
export default Home;