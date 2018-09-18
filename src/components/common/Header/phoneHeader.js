import React,{Component} from 'react';
import Header from '../Header/Header';
import data from '../../../data/data.json';

//Number in header
class PhoneHeader extends Component{
  render(){
  const pathnumber = {
    path: window.location.pathname,
  ...data
  }
  
  return(
       <Header property={pathnumber}/>
     )
    }
}




export default PhoneHeader;