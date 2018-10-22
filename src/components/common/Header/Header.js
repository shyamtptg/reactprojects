// import React from 'react';
// import '../../../css/style.scss';
// import { styles } from '../style';
// import { Link } from 'react-router-dom';
// import Help from './Help'
// import question from '../../../assets/question.svg';
// import LogoHeader from './logoHeader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimes} from '@fortawesome/free-solid-svg-icons';

// const Header = (props) => {
//     return(
//     <React.Fragment>
//         <div className='header-main'>
//             <nav className='navbar navbar-inverse'>
//                 <div className='container-fluid'>
//     {props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'? (<div className='setup-header'>Set up Two-Factor Authentication</div>) :props.property.path.split('/')[1] === 'forgotusername'?(<div className='recover-username'>Recover username</div>): <LogoHeader/>}
//                         <div className='col-md-6 col-sm-6 header-contact'>
//                            <img className='question' src={question} alt='Contact'/>
//                            <span className='header-tel-no'>{props.property.telephonenumber}</span>
//                             <span className='header-line'></span>
//                             <span className='header-help'><Help/></span>
//                             <span>
//                               {props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'||props.property.path.split('/')[1] === 'forgotusername'||props.property.path.split('/')[1] === 'forgotcheckmail'||props.property.path.split('/')[1] === 'loginsuccess'? (<Link to='/twofactor' className='close'></Link> ): ''}
//                             </span>
//                             <button hidden={props.property.path.split('/')[1] === 'twofactor'||props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'validatemail'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'||props.property.path.split('/')[1] === 'forgotusername'||props.property.path.split('/')[1] === 'forgotcheckmail'||props.property.path.split('/')[1] === 'loginsuccess'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup'?<Link to='/' style={styles.headerTextButton}>LOG IN</Link>
//                             :props.property.path.split('/')[1] === 'logintwofact'?<Link to='/' style={styles.headerTextButton}>SIGN OUT</Link>
//                             :<Link to='/signup' style={styles.headerTextButton}>SIGNUP</Link>} </span></button>
//                             </div>
//                     </div>
//                 </nav>
//             </div>

        
//     </React.Fragment>
// )
// }

// export default Header;
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
                    <Link className='navbar-brand logo' to=''>
                        <img src={logonew} alt='logo'/>
                    </Link>
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
                            <li className='login'>
                                <button hidden={props.property.path.split('/')[1] === 'twofactor' || props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'validatemail' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'forgotusername' || props.property.path.split('/')[1] === 'forgotcheckmail' || props.property.path.split('/')[1] === 'loginsuccess'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup' ? <Link to='/' style={styles.headerTextButton}>Log In</Link>
                                    : props.property.path.split('/')[1] === 'logintwofact' ? <Link to='/' style={styles.headerTextButton}>Sign Out</Link>
                                        : <Link to='/signup' style={styles.headerTextButton}>Sign Up</Link>} </span></button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className='navbar navbar-inverse webnav'>
                    <div className='container-fluid'>
                        {props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' ? (<div className='setup-header'>Set up Two-Factor Authentication</div>) : props.property.path.split('/')[1] === 'forgotusername' ? (<div className='recover-username'>Recover username</div>) : <LogoHeader />}
                        <div className='col-md-6 col-sm-6 header-contact'>
                            <img className='question' src={question} alt='Contact' />
                            <span className='header-tel-no'>{props.property.telephonenumber}</span>
                            <span className='header-line'></span>
                            <span className='header-help'><Help /></span>
                            <span>
                                {props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'forgotusername' || props.property.path.split('/')[1] === 'forgotcheckmail' || props.property.path.split('/')[1] === 'loginsuccess' ? (<Link to='/twofactor' className='close'></Link>) : ''}
                            </span>
                            <button hidden={props.property.path.split('/')[1] === 'twofactor' || props.property.path.split('/')[1] === 'twofactordetails' || props.property.path.split('/')[1] === 'validatemail' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'twofactorauth' || props.property.path.split('/')[1] === 'twiliosuccess' || props.property.path.split('/')[1] === 'forgotusername' || props.property.path.split('/')[1] === 'forgotcheckmail' || props.property.path.split('/')[1] === 'loginsuccess'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup' ? <Link to='/' style={styles.headerTextButton}>LOG IN</Link>
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


