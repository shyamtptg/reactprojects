import React,{Component} from 'react';
import {Errorstyle} from './Errorstyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//Number in header
class Errormessage extends Component{
  render(){
    return(
       <div style={Errorstyle.Errormessage}>
       <div style={Errorstyle.ErrorIcon}>
       <div style={Errorstyle.checkIcon}>  <FontAwesomeIcon icon={faExclamationTriangle} style={{color: 'white', fontSize: '20px'}}/></div>
       
        </div>
        <div style={Errorstyle.errorContent}> {this.props.error}</div>
      </div>
     )
    }
}




export default Errormessage;