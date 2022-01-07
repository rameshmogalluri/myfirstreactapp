import React,{Component} from 'react';
import './css/login.css'

class Login extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          fields: {},
          errors: {},
        };
      }
     formSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) {
            alert(" Hai..Welcome");
          } else {
            alert("Invalid user");
          }

    }

    handleChange=(field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
      }

    validate=()=>{
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields["email"]) {
            isFormValid = false;
            errors["email"] = "Cannot be empty";
          }

         if (!fields["password"]) {
            isFormValid = false;
            errors["password"] = "Cannot be empty";
          }
         /*if(typeof fields["email"] !== "undefined" && typeof fields["password"] !== "undefined"){
         if(!(fields["email"].value === "admin" && fields["password"].value === "admin"))
         {
            isFormValid = false;  
         }
        }*/
        this.setState({ errors: errors });
        return isFormValid;
     }
   render(){

       return(
           <div className="login-div">
                  <h1>User Login</h1>
                    <form onSubmit={this.formSubmit.bind(this)}>
                        <input type="text" placeholder="Enter your Email" className="textbox" id="email" refs="email" onChange={this.handleChange.bind(this,"email")}  value={this.state.fields["email"]}/>
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span><br />
                        <input type="password" placeholder="Enter your Password" className="textbox" id="password" refs="password" onChange={this.handleChange.bind(this,"password")} value={this.state.fields["password"]}/>
                        <span style={{ color: "red" }}>{this.state.errors["password"]}</span><br />
                        <button className="custom-button">Login</button>
                    </form>
           </div>
       );
   }
}
export default Login