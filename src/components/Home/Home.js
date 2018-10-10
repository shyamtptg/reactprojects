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
      {window.location.pathname === '/twiliosuccess'||window.location.pathname === '/twofactordetails'||window.location.pathname === '/loginsuccess'? '' :   (<PageHeader pathName ={window.location.pathname}/>)}
      <div className='container'>
        <div className='row form-body'>
          <NavigateComponent/>
        </div>
      </div>
      {window.location.pathname === '/twiliosuccess'||window.location.pathname === '/twofactordetails'||window.location.pathname === '/loginsuccess'? '' :   <Footer/>}
    </React.Fragment>
  )
}
export default Home;