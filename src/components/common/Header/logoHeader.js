import React,{Component} from 'react';
import logo from '../../../assets/logo.png';


//Number in header
class LogoHeader extends Component{
  render(){
  return(
    <div className='col-md-6 logo-header'>
    <div className='navbar-header'>
        <div className='navbar-brand'>
            <img className='logo' src={logo} alt='NextGen Bank' />
        </div>
    </div>
</div>
     )
    }
}

export default LogoHeader;