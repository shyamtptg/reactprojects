import React from 'react';
import logo from '../../../assets/logo.png';
import '../../../css/style.scss';
import { styles } from '../style';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
    <React.Fragment>
        <div className='header-main'>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='col-md-8 logo-header'>
                            <div className='navbar-header'>
                                <div className='navbar-brand'>
                                    <img className='logo' src={logo} alt='NextGen Bank' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 header-contact'>
                           <span className='header-tel-no'>{props.property.telephonenumber}</span>
                            <span className='header-line'></span>
                            <span className='header-help'>Help</span>
                            <button style={styles.headerButton}><span style={styles.headerTextButton}>{props.property.path.split('/')[1] === 'signup'?<Link to='/'>LOGIN</Link>:<Link to='/signup'>SIGNUP</Link>} </span></button>
                            </div>
                    </div>
                </nav>
            </div>

        
    </React.Fragment>
)
}

export default Header;

