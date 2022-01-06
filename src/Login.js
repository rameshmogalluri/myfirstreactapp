import React,{Component, component} from 'react';
import './login.css'

class Login extends React.Component
{
    Login(event) {
        let email=document.getElementById("email");
        let password=document.getElementById("password"); 

        if(email || password === '')
             return false;
        
    }
   render(){
       return(
           <div className="login-div">
              <container>
                  <h1>User Login</h1>
                    <form>
                        <input type="text" placeholder="Enter your Email" className="textbox" id="email"/><br />
                        <input type="password" placeholder="Enter your Password" className="textbox" id="password"/><br />
                        <button className="custom-button" onClick={this.Login}>Login</button>
                    </form>
                    
              </container>
           </div>
       );
   }
}
export default Login