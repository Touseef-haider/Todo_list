import React, { Component } from 'react';
import './style.css'
class Contents extends Component {
    state = { 
        FruitArray:[]
     }
     componentDidMount=()=>{
         document.getElementById('input').focus()
     }
     handleChange=()=>{
        if(document.getElementById('input').value===""){alert('Please write something in the input box')}    
        else{
        const FruitArray=[...this.state.FruitArray]; 
        FruitArray.push(this.demoinput.value);
        this.setState({
             FruitArray
         })
        document.getElementById('input').value="";
        document.getElementById('input').focus()
        }
     }
     handleRemove=(id)=>{
        const FruitArray=[...this.state.FruitArray]; 
        let index =FruitArray.indexOf(id);
        FruitArray.splice(index,1)
        this.setState({
            FruitArray
        })
    }
    render() { 
        let color = 'red orange';
        this.state.FruitArray.length===0?color='red':color='orange'
        return ( 
            <div>
                <div className="contents">
                    <input type="text" name="input" id="input" ref={input=>this.demoinput=input}/><br/>    
                    <button onClick={this.handleChange}>Click To add Item in list</button><br/><br/>
                    <ul>{this.state.FruitArray.map(item=>
                        <li key={item}>{item} 
                        <button id={item} ref={item=>this.item=item} onClick={()=>this.handleRemove(item)}>Remove</button>
                        </li>)}
                    </ul>
                    <h1 className="Items">Number of Items</h1>
                    <h1 className={color}>
                    {
                        this.state.FruitArray.length==0?'ZERO':this.state.FruitArray.length
                    }
                    </h1>
                </div>
            </div>
         );
    }
}
 
export default Contents;