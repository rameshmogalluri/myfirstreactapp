import React,{Component, component} from 'react';
import './register.css'
import './login.css'
class Register extends React.Component
{
    render(){
        return(
            <div className="register-div">
            <container>
            <h1> New User </h1>
            <form>
              <input type="text" placeholder="FirstName" className="textbox" id="firstName"/><br />
              <input type="text" placeholder="LastName" className="textbox" id="lastName"/><br />
              <input type="text" placeholder="Email" className="textbox" id="email"/><br />
              <input type="text" placeholder="UserName" className="textbox" id="userName"/><br />
              <input type="password" placeholder="Password" className="textbox" id="password"/><br />
              <input type="password" placeholder="Retype-Password" className="textbox" id="retypepassword"/><br />
              <button className="custom-button">Register</button>
            </form>
            </container>
            </div>
        );
    }
}
export default Register