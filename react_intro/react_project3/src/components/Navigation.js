import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css"
function Navigation(){
  return(     
  <div className="about__container">
    <Link className='links' to='/'>Home</Link>
    <Link className='links' to='/about'>About</Link>
  </div>
  )
}
export default Navigation