import variables from '../../../css/variables.scss';

const resendMessage={
  height:'65px',
  border:`1px solid ${variables.brightblue}`,
 position:'relative',
 bottom:'20px'
}

const resendIcon={
  height:'64px',
  width: '66px',
  backgroundColor: variables.brightblue,
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
    color: variables.brightblue,
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