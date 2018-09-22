import React from 'react';
import logo from '../../../assets/logo.png';
import '../../../css/style.scss';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import Help from '../Header/Help';

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
                            <span className='header-help'><Help/></span>
                            <button className="header" style={styles.headerButton}><span>{props.property.path.split('/')[1] === 'signup'?<Link to='/' style={styles.headerTextButton}>LOGIN</Link>:<Link to='/signup' style={styles.headerTextButton}>SIGNUP</Link>} </span></button>
                            </div>
                    </div>
                </nav>
            </div>

        
    </React.Fragment>
)
}

export default Header;

