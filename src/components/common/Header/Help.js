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
        {/* <ReactTooltip id='global' place="bottom">
        <div><div>Email:<span>Support@Jemstep.com</span></div><div>Learn More:<span>NextGenBank FAQ's</span></div></div>
        </ReactTooltip> */}
       
      </div>
      {this.state.show === true ?
        <div className="help-box">
         <p>Email:jemstep.com</p>
         <p>Learn More:NextGen Bank FAQ's</p>
        </div>
        :""}
        </React.Fragment>
    );
  }
}

export default Help;