import React,{Component} from 'react';
import {Errorstyle} from './Errorstyle';

//Number in header
class Errormessage extends Component{
  render(){
    return(
       <div style={Errorstyle.Errormessage}>
       <div style={Errorstyle.ErrorIcon}>
       
        </div>
        <div style={Errorstyle.errorContent}> {this.props.error}</div>
      </div>
     )
    }
}




export default Errormessage;