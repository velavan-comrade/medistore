import React, { Component } from 'react'
import axios from 'axios';

export class Order extends Component {
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        axios.get()
    }
    render() {
        console.log(this.props)
        return (
       <div></div>
        )}
}

export default Order





