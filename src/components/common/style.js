import variables from '../../css/variables.scss';


const Button = {
  // height: 'auto',
  // width: 'auto',
  // color: `${variables.whitecolor}`,
  // fontFamily:'inherit',
  // fontSize:'20px',
  // fontWeight:'600',
  // lineHeight: '28px',
  // textAlign: 'center'
  height: '46px',
  width: '100%',
  border: '1px solid',
  borderColor:variables.darkcolor,
  borderRadius: '3px',
  background: `linear-gradient(180deg, ${variables.darkcolor} 0%,  ${variables.darkcolor} 100%)`
}

 const headerButton = {
  height: '40px',
  width: '100px',
  marginTop:'12px', 
  marginRight:'27.5px',
  marginBottom:'12px', 
  marginLeft:'26.5px',
  border: `1px solid ${variables.darkcolor}`,
  borderRadius: '3px',
  backgroundColor:variables.whitecolor
}
 const headerTextButton={
  height: '16px',	
  width: '46px',	
  color: variables.darkcolor,	
  fontFamily: variables.fontFamily,	
  fontSize: '13px',	
  fontWeight: 600,	
  lineHeight: '16px',	
  textAlign: 'center',
  textDecoration:'none'
 
}
 const textOnButton = {
  color: variables.whitecolor,
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '28px',
  textAlign: 'center'
}
export const styles = {
  Button: Button,
  textOnButton: textOnButton,
  headerTextButton:headerTextButton,
  headerButton:headerButton

}