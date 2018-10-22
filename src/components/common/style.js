import variables from '../../css/variables.scss';


const Button = {
  height: '46px',
  width: '100%',
  border: '1px solid',
  cursor:'pointer',
  borderColor:variables.darkcolor,
  borderRadius: '3px',
  background: `linear-gradient(180deg, ${variables.darkcolor} 0%,  ${variables.darkcolor} 100%)`,
  fontFamily:variables.fontFamilyProx
}

 const headerButton = {
  height: '40px',
  width: '100px',
  marginTop:'12px', 
  marginRight:'27.5px',
  marginBottom:'12px', 
  marginLeft:'26.5px',
  color:variables.darkcolor,
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
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
  fontFamily:'Proxima Nova'
}
export const styles = {
  Button: Button,
  textOnButton: textOnButton,
  headerTextButton:headerTextButton,
  headerButton:headerButton

}