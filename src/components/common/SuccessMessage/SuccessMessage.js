import React, { Component } from 'react';
import { Successtyle } from './SuccessStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


class SuccessMessage extends Component {

  render() {
    return (
      <div style={Successtyle.SuccessMessage}>
        <div style={Successtyle.SuccessIcon}>
          <div style={Successtyle.checkIcon}>  <FontAwesomeIcon icon={faCheck} style={{color: 'white', fontSize: '20px'}}/></div>
        </div>
        <div style={Successtyle.SuccessContent}> {this.props.success} </div>
      </div>
    )
  }
}




export default SuccessMessage;