import React from 'react';
import {Link} from 'react-router-dom';
import './css/topnav.css'

const NavPage = () => {
  return(
    <div className="topnav">
      <nav>
          <ul>
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
             <Link to="/login"><span>Login</span></Link>
          </li>
          <li>
             <Link to="/Register"><span>Register</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavPage;