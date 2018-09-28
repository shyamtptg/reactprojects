// import { relative } from "path";

const Errormessage={
  height:"65px",
  border:"1px solid #FF6633",
 position:'relative'
}

const ErrorIcon={
  height:"64px",
  width: "66px",
  backgroundColor: "#FF6633",
  display:'inline-block',
  float:"left"
}
const checkIcon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  height: '64px',
  width: '66px',
}

const errorContent= {
  // display: 'inline-block',
  // color:'#FF6633',
  // marginLeft: '7px',
  // float:"left"
  display:"inline-block",
    color:"rgb(255, 102, 51)",
  marginLeft:"7px",
  position:"absolute",
  top:"3px"
}



export const Errorstyle ={
  Errormessage:Errormessage,
  ErrorIcon:ErrorIcon,
  errorContent: errorContent,
  checkIcon: checkIcon
}