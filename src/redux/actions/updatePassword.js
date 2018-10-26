import { UPDATE_USER,UPDATE_USER_URL} from '../constants/constant';
import axios from 'axios';


export const updateUser = (data,token,id,context) => (dispatch) => {
  const header = {
    'Content-type':'application/json',
    'Authorization':`Bearer ${token}`,
    'code':`${id}`
   }
axios.put(UPDATE_USER_URL,data,{headers:header}).then(res=>{
 
     dispatch({
            type:UPDATE_USER,
            data: res.data
        });
      
        if(res){
          context.history.push('/');
        }
      }).catch(error => {
      });
    }