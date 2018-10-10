import React from 'react';
import '../../../css/style.scss';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import Help from './Help'
import question from '../../../assets/question.svg';
import LogoHeader from './logoHeader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return(
    <React.Fragment>
        <div className='header-main'>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
    {props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'? (<div className='setup-header'>Set up Two-Factor Authentication</div>) : <LogoHeader/>}
                        <div className='col-md-6 col-sm-6 header-contact'>
                           <img className='question' src={question} alt='Contact'/>
                           <span className='header-tel-no'>{props.property.telephonenumber}</span>
                            <span className='header-line'></span>
                            <span className='header-help'><Help/></span>
                            <span>
                              {props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'? (<Link to='/twofactor' className='close'></Link> ): ''}
                            </span>
                            <button hidden={props.property.path.split('/')[1] === 'twofactor'||props.property.path.split('/')[1] === 'twofactordetails'||props.property.path.split('/')[1] === 'validatemail'||props.property.path.split('/')[1] === 'twofactorauth'||props.property.path.split('/')[1] === 'twiliosuccess'} style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup'?<Link to='/' style={styles.headerTextButton}>LOGIN</Link>
                            :props.property.path.split('/')[1] === 'logintwofact'||props.property.path.split('/')[1] === 'loginsuccess'?<Link to='/' style={styles.headerTextButton}>SIGN OUT</Link>
                            :<Link to='/signup' style={styles.headerTextButton}>SIGNUP</Link>} </span></button>
                            </div>
                    </div>
                </nav>
            </div>

        
    </React.Fragment>
)
}

export default Header;

