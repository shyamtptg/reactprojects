import React from 'react';
import '../../../css/style.scss';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import Help from './Help'
import question from '../../../assets/question.svg';
import LogoHeader from './logoHeader';
import logonew from '../../../assets/logonew.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <React.Fragment>
            <div className='header-main'>
                <nav className='navbar navbar-expand-md mobilenav'>
                {props.property.path.split('/')[1] === ''||props.property.path.split('/')[1] === 'signup'||props.property.path.split('/')[1] === 'validatemail'?(<Link className='navbar-brand logo' to=''> <img src={logonew} alt='logo'/>
                    </Link>):props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'twofactor' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess'?(<div className='setup-header'>Set up Two-Factor Authenti</div>)
                    :props.property.path.split('/')[1] === 'forgotusername' ? (<div className='recover-username'>Recover username</div>):(<div className='recover-username'>Reset Password</div>)}
                       
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                        <i className='fa fa-bars' aria-hidden='true'></i>
                        <i className='fa fa-times' aria-hidden='true'></i>
                    </button>
                    <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                        <ul className='navbar-nav'>
                            <li className='needhelp'>
                                <Link to=''>Need help?</Link>
                            </li>
                            <li className='nav-item call'>
                                <span>Call:</span>
                                <span>800-800-800</span>
                            </li>
                            <li className='nav-item'>
                                <span>Email:</span>
                                <span><Link to='mailto:support@jemstep.com'>support@jemstep.com</Link></span>
                            </li>
                            <li className='nav-item'>
                                <span>Learn More:</span>
                                <span><Link to=''>NextGen Bank FAQs</Link></span>
                            </li>
                            <li hidden={props.property.path.split('/')[1] === 'validatemail'||props.property.path.split('/')[1] ==='twofactor'||props.property.path.split('/')[1] ==='twofactorauth'||props.property.path.split('/')[1] ==='twiliosuccess'} className='login'>
                            <p>{props.property.path.split('/')[1] === ''
                               ?<Link to='/signup'>Sign Up</Link>
                               :props.property.path.split('/')[1] ==='twofactordetails'?<Link to='/twofactor'>Cancel Setup 2FA</Link>:<Link to='/'>Log In</Link>}</p>
                               
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className='navbar navbar-inverse webnav'>
                    <div className='container-fluid'>
                        {props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' ? (<div className='setup-header'>Set up Two-Factor Authentication</div>) : props.property.path.split('/')[1] === 'forgotusername' ? (<div className='recover-username'>Recover username</div>):props.property.path.split('/')[1] === 'forgotpassword'||props.property.path.split('/')[1] === 'createpassword' ?(<div className='recover-username'>Reset Password</div>): <LogoHeader />}
                        <div className='col-md-6 col-sm-6 header-contact'>
                            <img className='question' src={question} alt='Contact' />
                            <span className='header-tel-no'>{props.property.telephonenumber}</span>
                            <span className='header-line'></span>
                            <span className='header-help'><Help /></span>
                            <span>
                                {props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'forgotusername' || props.property.path.split('/')[1] === 'forgotcheckmail'||props.property.path.split('/')[1] === 'forgotpasswordcheckmail'||props.property.path.split('/')[1] === 'forgotpassword' || props.property.path.split('/')[1] === 'loginsuccess'||props.property.path.split('/')[1] === 'createpassword' ? (<Link to='/twofactor' className='close'></Link>) : ''}
                            </span>
                            <button className='button-header' hidden={props.property.path.split('/')[1] === 'twofactor' || props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'validatemail' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'forgotusername' || props.property.path.split('/')[1] === 'forgotcheckmail' || props.property.path.split('/')[1] === 'loginsuccess'||props.property.path.split('/')[1] === 'forgotpassword'||props.property.path.split('/')[1] === 'forgotpasswordcheckmail'||props.property.path.split('/')[1] === 'createpassword'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup' ? <Link to='/login' style={styles.headerTextButton}>LOG IN</Link>
                                : props.property.path.split('/')[1] === 'logintwofact' ? <Link to='/' style={styles.headerTextButton}>SIGN OUT</Link>
                                    : <Link to='/signup' style={styles.headerTextButton}>SIGNUP</Link>} </span></button>
                        </div>
                    </div>
                </nav>
            </div>


        </React.Fragment>
    )
}

export default Header;


