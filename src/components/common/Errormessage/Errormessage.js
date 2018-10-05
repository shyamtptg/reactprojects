import React,{Component} from 'react';
import {Errorstyle} from './Errorstyle';
import iconwarning from '../../../assets/icon_warning.svg';


//Number in header
class Errormessage extends Component{
  render(){
    return(
       <div style={Errorstyle.Errormessage}>
       <div style={Errorstyle.ErrorIcon}>
       <div style={Errorstyle.checkIcon}><img src={iconwarning} alt="success"/></div>
       
        </div>
        <div style={Errorstyle.errorContent}> {this.props.error}</div>
      </div>
     )
    }
}




export default Errormessage;