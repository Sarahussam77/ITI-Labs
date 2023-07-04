import { Component } from "react";
import "./ClassComp.css";
class ElementsClass extends Component{
    getData = (e)=>{
            this.setState({name:e.target.value})        
    };
    resetInput = (e) => {
        this.setState({ name: "" });
      }
    constructor(){
        super();
        this.state = {
            name:""
        }
       
    }
    render(){
        return(
            <div>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.getData}
                />
               
                <p>{this.state.name}</p>
                <button onClick={this.resetInput}>Reset</button>
              </div>
        )
    }
}

export default ElementsClass;
