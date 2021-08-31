import React, { Component } from 'react'
import axios from 'axios';
import './Home.css';
import Banners from './Banners';
import Footer from './Footer';
import Addcart from './Addcart';


 class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            img:"",
            data1:[],
            id:"",
            adds:false
        }
    }
   
    componentDidMount()
    {
        axios.get("http://localhost:9000/product").then((response)=>{
            console.log(response.data.img)
            this.setState({img:response.data.img})
            this.setState({data1:response.data.data});
            console.log(this.state.data1);
           
        }).catch(e=>{console.log(e)})
    }
  changeAdd=(con)=>{
      console.log(con)
        this.setState({adds:con});
  }
  
  
    render() {
       const { adds , id}=this.state;
        const listt =this.state.data1;
       return(<div>
           <div>
               <Banners></Banners>
           </div>
           <div> {adds?<Addcart id={id} close={this.changeAdd}/>:null}</div>
           <table cellspacing="20px"><tr>
              
            {listt.map(t=>
                    <td >
                    
                     <div key={t.productId} className="card" onClick={this.addCart}>
                         <img  src={`data:image/jpeg;buffer,${t.img.data}`} alt={t.productName}></img>
                        <div className="container"><button onClick={()=>{this.setState({id:t.productId});this.setState({adds:true})}}>Add to cart</button></div>
                    </div>
                    
                    </td>
                   
            )}
            </tr>
            </table>
            <div>
            <Footer />
            </div>
       </div>)
    }
 }

export default Home;
