import React,{Component, component} from 'react';
import './login.css'

class Login extends Component
{
    login(event) {
        let email=document.getElementById("email");
        let password=document.getElementById("password"); 

        if(email || password === '')
             return false;
        
    }
   render(){
       return(
           <div className="login-div">
              <container>
                    <form>
                        <input type="text" placeholder="Enter your Email" className="login-text" id="email"/><br />
                        <input type="password" placeholder="Enter your Password" className="login-text" id="password"/><br />
                        <button className="login-button" onClick={this.login}>Login</button> <a href="#">New User</a>
                    </form>
                    
              </container>
           </div>
       );
   }
}
export default Login;