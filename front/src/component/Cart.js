import React, { Component } from 'react'
import axios from 'axios';
export class Cart extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:9000/addcart").then((response)=>{
            console.log(response);
            this.setState({data:response.data.data})
        }).catch(e=>{console.log(e)})
    }
    confirm=()=>{
        axios.put("http://localhost:9000/addcart").then((response)=>{
            console.log(response)
        }).catch(e=>{console.log(e)})
    }
    render() {
        return (
            <div>
                {this.state.data.map(t=><div>{t.status}</div>)}
                <button onClick={this.confirm}>Place Order</button>
            </div>
        )
    }
}

export default Cart
