import React,{Component} from 'react';
import {Successtyle} from './SuccessStyle';


class SuccessMessage extends Component{
  
  render(){
    return(
       <div style={Successtyle.SuccessMessage}>
       <div style={Successtyle.SuccessIcon}>
       
        </div>
        <div style={Successtyle.SuccessContent}> {this.props.success}</div>
      </div>
     )
    }
}




export default SuccessMessage;