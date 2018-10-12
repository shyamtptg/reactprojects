import React, { Component } from 'react';



class Help extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    };
    this.handleOutsideClick= this.handleOutsideClick.bind(this);
  }

  // handleMouseHover() {
  //   this.setState(this.toggleHoverState);
  // }

  // toggleHoverState(state) {
  //   return {
  //     isHovering: !state.isHovering,
  //   };
  // }
/*addeddcode*/
handleClick() {  
}
handleOutsideClick(e) {
  // ignore clicks on the component itself
  if (this.node.contains(e.target)) {
    return;
  }  
  this.toggleBtn();
}
toggleBtn=()=>{

  if (!this.state.show) {
    // attach/remove event handler
    document.addEventListener('click', this.handleOutsideClick, false);
  } else {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  this.setState(prevState => ({
     show: !prevState.show,
  }));   
    }

/*addeddcode end*/

 /* toggleBtn=()=>{
    
this.setState((prevState) => {
  return {
    show: !prevState.show
  }
});
  } */
  render() {
    return (
      <React.Fragment>
      <div className="help-class">
        <span style={{color:"#0195D4"}} ref={node => { this.node = node; }} onClick={()=>this.toggleBtn()}>
          Help
        </span>
       
      </div>
      {this.state.show === true ?
        <table className={window.location.pathname=== '/validatemail' ? 'help-box1 borderless' : 'help-box borderless'}>
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