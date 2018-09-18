import validate from 'validate.js';
import { GET_VALIDATE} from '../../redux/constants/constant';
 
 export const validateCheck = (name,state,constraints)=>(dispatch)=> {
   var errorObj;
  const validJsErrors = validate(state,constraints);
  const errorKeys = validJsErrors ? Object.keys(validJsErrors) : {};
  if (validJsErrors) {
    Object.entries(validJsErrors)
      .forEach((key) => {
        errorObj = { ...state.errors };
        if (!errorKeys.includes(name)) {
        //   errorObj[name] = '';
        //   dispatch({
        //     type:GET_VALIDATE,
        //     data: errorObj
        // });

          // this.setState({
          //   errors: errors
          // });
        } else if (key[0] === name && key[1].length > 0) {
          errorObj[name] = key[1][0];
          dispatch({
            type:GET_VALIDATE,
            data: errorObj
        });

          //SignUp(errorObj);
          // this.setState({
          //   errors: errors
          // });
        }
      });
      return errorObj
  }
}
