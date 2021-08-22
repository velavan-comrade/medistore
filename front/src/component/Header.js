import React, { Component } from 'react'

import logo from '../img/logo.jpg'
import './Header.css';
import Login from './Login';

export class Header extends Component {

constructor(props){
    super(props)
    this.state={
        isLogin:false,
        userName:'ll',
        result:false,
        show:false
    }
}

getUser=(con)=>{
    this.setState({userName:con})
}
getId=(con)=>{
   
    this.setState({result:con});
   
}
showHandler=(con)=>{
    this.setState({show:con})
}
    render() {
        const {result,userName,show}=this.state; 
        
        return (
            <div className="header">
               <img src={logo} alt="logo" id="logo"></img>
                &nbsp;<span id="title" >MediStore</span>
               <input type="text" id="header-input"></input>
               {show?<Login show={this.showHandler} getUser={this.getUser}  getId={this.getId}/>:null}
                {console.log("ss")}
               {
               result?<span>{userName}</span>:
               <button onClick={()=>{this.setState({show:true})}}>Login</button>}
            </div>
        )
    }
}

export default Header
