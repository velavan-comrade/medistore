import React, { Component } from 'react'

export class Newuser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             mobile:'',
             gender:'',
             mail:'',
             pass:''
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
        data.append("imge",this.state.gender);
        data.append("name",this.state.name);
        data.append("mail",this.state.mail);
        data.append("pass",this.state.pass);
        data.append("mobile",this.state.mobile);

        console.log(data)
        axios.post('http://localhost:9000/customer',data).then(response=>{console.log(response)})
           .catch(err=>{
               console.log(err)
           })
        
    }
    
   render() {
       const {name,mail,mobile,pass}=this.state;
       return (
           
           <div className="card-new" >
               <form>
                   <input type="text" name="name" value={name} placeholder="Product Name"onChange={this.changeHandler} /><br></br>
                   <input type="text" name="mail" value={mail} placeholder="mail" onChange={this.changeHandler} /><br></br>
                   <input type="number" name="mobile" value={mobile} placeholder="mobile" onChange={this.changeHandler} /><br></br>
                   <input type="text" name="pass" value={pass} placeholder="password" onChange={this.changeHandler} /><br></br>
                   <input type="radio" name="gender" value="Male" onSelect={this.changeHandler}/>Male
                   <input type="radio" name="gender" value="Female" onSelect={this.changeHandler} />Female    <br></br>
                       <button id="button1" onClick={this.submitHandler}>Add</button>
               </form>
           </div>
       )
   }
}

export default Newuser
