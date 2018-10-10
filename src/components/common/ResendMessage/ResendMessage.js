import React,{Component} from 'react';
import {ResendStyle} from './ResendStyle';
import security from '../../../assets/security.svg';


//Number in header
class Resendmessage extends Component{
  render(){
    return(
       <div style={ResendStyle.resendMessage}>
       <div style={ResendStyle.resendIcon}>
       <div style={ResendStyle.checkIcon}><img src={security} alt="Resend"/></div>
       
        </div>
        <div style={ResendStyle.errorContent}> {this.props.error}</div>
      </div>
     )
    }
}




export default Resendmessage;