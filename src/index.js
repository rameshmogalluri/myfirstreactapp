import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login' 
import Register from './Register';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter as Router,
         Route,Link,Routes} from 'react-router-dom'; 

ReactDOM.render( 
  <Router> 
    <div> 
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/login">Login</Link>
          </li>
          <li>
             <Link to="/Register">Register</Link>
          </li>
        </ul>
    <Routes>
    <Route path="/"  element={<App />} />  
    <Route path="/login" element={<Login />} />  
    <Route path="/Register" element={<Register />} />   
    </Routes>
    </div>
  </Router>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
