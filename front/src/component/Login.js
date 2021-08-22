import React, { Component } from 'react';
import axios from 'axios'
import ReactDom from 'react-dom';
import './Login.css'
export class Login extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      uname:'',
      password:'',
      message:'',
    }
  }
 verify=()=>{
   console.log(this.state.uname);
    axios.get("http://localhost:9000/customer?uname="+JSON.stringify(this.state.uname)+"&pwd="+JSON.stringify(this.state.password))
    .then((response)=>{
      if(response.message=="verified")
      {
        this.setState({message:"success"});
        this.props.getName.bind(this,this.state.uname);
        this.props.show.bind(this,false);
        this.props.getId.bind(this,true);
      }
      else{
          this.setState({message:"User Name and Password are wrong"})
      }
    }).catch((e)=>console.log(e));

  }

 changeHandler=e=>{
 this.setState({[e.target.name]:e.target.value})
 }
    render() {
        return ReactDom.createPortal(
       
            <div className="login-box">
              <span id="err">{this.state.message}</span>
              
                        <h2>Login</h2>
                   
            <div className="user-box">
                <input type="text" name="uname"  onChange={this.changeHandler} required/>
                <label>Username</label>
        </div>
    <div className="user-box">
      <input type="password" name="password"  onChange={this.changeHandler} required="true"/>
      <label>Password</label>
    </div>
    <button onClick={this.verify}>Submit</button><button onClick={this.props.show.bind(this,false)}>Cancel</button>
 
</div>
       , document.getElementById("login"))
    }
}

export default Login
