import React,{Component} from 'react';
import './css/register.css'
import './css/login.css'
class Register extends React.Component
{
    render(){
        return(
            <div className="register-div">
            <h1> New User </h1>
            <form>
              <input type="text" placeholder="FirstName" className="textbox" id="firstName"/><br />
              <input type="text" placeholder="LastName" className="textbox" id="lastName"/><br />
              <input type="text" placeholder="Email" className="textbox" id="email"/><br />
              <input type="text" placeholder="UserName" className="textbox" id="userName"/><br />
              <input type="password" placeholder="Password" className="textbox" id="password"/><br />
              <input type="password" placeholder="Re-Enter Password" className="textbox" id="retypepassword"/><br />
              <button className="custom-button">Register</button>
            </form>
            </div>
        );
    }
}
export default Register