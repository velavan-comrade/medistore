import React, { Component } from 'react'
import axios from 'axios';
import './Home.css';
import Banners from './Banners';
import Footer from './Footer';
import { BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import Order from './Order';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


 class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            img:"",
            data1:[]
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
    addCart=()=>{
     
    }
  
    render() {
       
        const listt =this.state.data1;
        var img="";
       return(<div>
           <div>
               <Banners></Banners>
           </div>
           <table cellspacing="20px"><tr>
            {listt.map(t=>
           
            <Link to={`/order/${t.productId}`}>
                    <td >
                    
                     <div key={t.productId} className="card" onClick={this.addCart}>
                         <img  src={`data:image/jpeg;buffer,${t.img.data}`} alt="ee"></img>
                        <div className="container"></div>
                    </div>
                    
                    </td>
                    </Link>
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
