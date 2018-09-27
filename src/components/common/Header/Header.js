import React from 'react';
import logo from '../../../assets/logo.png';
import '../../../css/style.scss';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import Help from './Help'
import question from '../../../assets/question.svg';

const Header = (props) => {
    return(
    <React.Fragment>
        <div className='header-main'>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='col-md-6 logo-header'>
                            <div className='navbar-header'>
                                <div className='navbar-brand'>
                                    <img className='logo' src={logo} alt='NextGen Bank' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 header-contact'>
                           <img className="question" src={question} alt='Contact'/>
                           <span className='header-tel-no'>{props.property.telephonenumber}</span>
                            <span className='header-line'></span>
                            <span className='header-help'><Help/></span>
                            <button hidden={props.property.path.split('/')[1] === 'TwoFactor'||props.property.path.split('/')[1] === 'TwoFactorDetails'||props.property.path.split('/')[1] === 'validateEmail'||props.property.path.split('/')[1] === 'TwoFactorAuth'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup'?<Link to='/' style={styles.headerTextButton}>LOGIN</Link>:<Link to='/signup' style={styles.headerTextButton}>SIGNUP</Link>} </span></button>
                            </div>
                    </div>
                </nav>
            </div>

        
    </React.Fragment>
)
}

export default Header;

