import React, { Component } from 'react';



class Help extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    };
  }

  // handleMouseHover() {
  //   this.setState(this.toggleHoverState);
  // }

  // toggleHoverState(state) {
  //   return {
  //     isHovering: !state.isHovering,
  //   };
  // }
  toggleBtn=()=>{
    
this.setState((prevState) => {
  return {
    show: !prevState.show
  }
});

  }
  render() {
    return (
      <React.Fragment>
      <div className="help-class">
        <span style={{color:"#0195D4"}} onClick={()=>this.toggleBtn()}>
          Help
        </span>
       
      </div>
      {this.state.show === true ?
        <table className="help-box borderless">
        <tbody><tr><td>Email:</td><td>support@jemstep.com</td></tr>
        <tr><td>Learn More:</td><td>NextGenBank FAQ's</td></tr>
        </tbody>
       </table>
       :""}
        </React.Fragment>
    );
  }
}

export default Help;