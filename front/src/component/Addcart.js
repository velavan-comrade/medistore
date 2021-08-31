import React, { Component } from 'react'
import axios from 'axios';
import './Addcart';
import ReactDom from 'react-dom';
export class Addcart extends Component {
    constructor(props)
    {
        super(props) 
        this.state={
            data3:[],
            quantity:1,
            price:0,
            ss:false
        }
    }
    addc=e=>{
       e.preventDefault();
        const data=new FormData();
        data.append("user","vel");
        data.append("id",this.props.id);
        data.append("quantity",this.state.quantity)
        data.append("price",this.state.price);
        console.log(data);
        console.log(e)
        axios.post("http://localhost:9000/addcart",data).then((response)=>{
            console.log(response)
        }).catch(e=>{console.log(e)})
    }
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
     compoundDidMount()
    {
        this.setState({ss:true})
        console.log(this.props.id)
        axios.get("http://localhost:9000/productid?id="+this.props.id).then((response)=>{
        console.log(response);
        this.setState({data3:response.data.data});
        console.log(this.state.data3);
        }).catch(e=>{console.log(e)})
    }
    render() {
        const { data3,quantity,ss }=this.state;
       if(ss){}else{this.compoundDidMount()}
        return ReactDom.createPortal(
            <div>
                {console.log(this.props.id)}
                {data3.map(t=>
                    <form>
                    <img src={`nn`} alt={t.productName}></img><br></br>
                    Desc:<p>{t.description}</p><br></br>
                    Price:<span name="price">{t.price}</span>
                    <input type="number" name="quantity" value={quantity} onChange={this.changeHandler}/>
                    <button onClick={this.addc}>Add</button><button onClick={this.props.close.bind(this,false)}>close</button>
                </form>
                )}
            </div>
        ,document.getElementById("portss"))
    }
}

export default Addcart
