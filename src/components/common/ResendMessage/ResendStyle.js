// import { relative } from 'path';

const resendMessage={
  height:'65px',
  border:'1px solid #0252C3',
 position:'relative',
 bottom:'20px'
}

const resendIcon={
  height:'64px',
  width: '66px',
  backgroundColor: '#0252C3',
  display:'inline-block',
  float:'left'
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
  // float:'left'
  display:'inline-block',
    color:'#0252C3',
  marginLeft:'7px',
  position:'absolute',
  top:'18px'
}



export const ResendStyle ={
  resendMessage:resendMessage,
  resendIcon:resendIcon,
  errorContent: errorContent,
  checkIcon: checkIcon
}