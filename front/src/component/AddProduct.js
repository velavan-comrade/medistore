import React, { Component } from 'react'
import axios from 'axios';
import './AddProduct.css'

 class AddProduct extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              pname:'',
              uses:'',
              imge:'',
              price:'',
              desc:''
         }
     }
     changeHandler=e=>{
         this.setState({[e.target.name]:e.target.value})
     }
     addImg=e=>{
         this.setState({imge:e.target.files[0]})
     }
     submitHandler=e=>{
         e.preventDefault()
         const data=new FormData();
         data.append("imge",this.state.imge);
         data.append("pname",this.state.pname);
         data.append("price",this.state.price);
         data.append("desc",this.state.desc);
         data.append("uses",this.state.uses);

         console.log(data)
         axios.post('http://localhost:9000/product',data).then(response=>{console.log(response)})
            .catch(err=>{
                console.log(err)
            })
         
     }
     
    render() {
        const {pname,price,uses,desc}=this.state;
        return (
            
            <div className="card-add" >
                <form>
                    <input type="text" name="pname" value={pname} placeholder="Product Name"onChange={this.changeHandler}></input><br></br>
                    <input type="decimal" name="price" value={price} placeholder="Price" onChange={this.changeHandler}></input><br></br>
                    <input type="text" name="uses" value={uses} placeholder="What for?" onChange={this.changeHandler}></input><br></br>
                    <input type="text" name="desc" value={desc} placeholder="Description" onChange={this.changeHandler}></input><br></br>
                    <input type="file" name="imge" id="button" onChange={this.addImg}  /><br></br>
                    <button id="button1" onClick={this.submitHandler}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddProduct
