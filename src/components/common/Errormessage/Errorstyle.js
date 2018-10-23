import variables from '../../../css/variables.scss';

const Errormessage={
  height:'65px',
  border:`1px solid ${variables.orange}`,
  position:'relative',
  fontFamily:'Proxima Nova'
}

const ErrorIcon={
  height:'64px',
  width: '66px',
  backgroundColor: variables.orange,
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
  
  display:'inline-block',
    color: variables.orange,
  marginLeft:'7px',
  position:'absolute',
  top:'10%'
}



export const Errorstyle ={
  Errormessage:Errormessage,
  ErrorIcon:ErrorIcon,
  errorContent: errorContent,
  checkIcon: checkIcon
}