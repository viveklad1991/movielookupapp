
import React from 'react';
import   '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'

function Header() {
    
    
  return (
     <div>
       
        <image  ></image>
        <img src={logo} width="400" height="200" /><br/>
        <h3>React Test</h3>
                <button  type="button" class="btn btn-info"  src='/Histry'  >React </button>
                
     </div>
     
  )
}

export default Header