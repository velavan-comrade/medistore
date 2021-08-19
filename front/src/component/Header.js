import React, { Component } from 'react'
import logo from '../img/logo.jpg'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header">
               <img src={logo} alt="logo" id="logo"></img>
                &nbsp;<span id="title" >MediStore</span>
               <input type="text" id="header-input"></input>
            </div>
        )
    }
}

export default Header
