import React, { Component } from 'react';
import { Successtyle } from './SuccessStyle';
import iconsuccess from '../../../assets/icon_success.svg';

class SuccessMessage extends Component {

  render() {
    return (
      <div style={Successtyle.SuccessMessage}>
        <div style={Successtyle.SuccessIcon}>
          <div style={Successtyle.checkIcon}><img src={iconsuccess} alt="success"/></div>
        </div>
        <div style={Successtyle.SuccessContent}> {this.props.success} </div>
      </div>
    )
  }
}




export default SuccessMessage;