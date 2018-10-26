
import variables from '../../../css/variables.scss';
const SuccessMessage = {
  height: '65px',
  // width: '416px',
  border: `1px solid ${variables.lightGreen}`,
  position: 'relative',
  fontFamily:'Proxima Nova'
}

const SuccessIcon = {
  height: '64px',
  width: '66px',
  backgroundColor: variables.lightGreen,
  display: 'inline-block'
}

const SuccessContent = {
  display: 'inline-block',
  color:variables.lightGreen,
  marginLeft: '5%',
  width: 'calc(100% - 66px)',
  position: 'absolute',
  paddingTop: '4%'
}
const checkIcon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  height: '64px',
  width: '66px',
}

export const Successtyle = {
  SuccessMessage: SuccessMessage,
  SuccessIcon: SuccessIcon,
  SuccessContent: SuccessContent,
  checkIcon: checkIcon
}