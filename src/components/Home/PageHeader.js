import React from 'react';
const PageHeader = (props) => {
  const path = props.pathName;
 return(
<div id='signup-header' className="container">
         {/* <h1 className='page-header text-center'>{path.split('/')[1] === 'signup'? 'Now take the next step to financial freedom' : 'Welcome Back to Bank' }</h1> */}
         <h1 className='page-header text-center'>{path.split('/')[1] === 'signup'?'Now take the next step to financial freedom' :path.split('/')[1] === 'validateEmail'?(<div>Register Successful</div>):'Welcome Back to Bank' }</h1>
 
          </div>)
}
export default PageHeader;