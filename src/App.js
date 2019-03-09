import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      result:"",texte:"",
      texte2:""
    }
  }
  changeValue =(event) =>{
    const field =event.target.name;
    const text =event.target.value;
    this.setState({[field]:text})
  }
  show=()=>{
    this.setState({result:this.state.texte+" " + this.state.texte2})


  }
  render() {
    return (
      <div>
      <h1>hello rahma</h1>
      Text 1:<input type="text" onChange={this.changeValue} name="texte"></input><br/>
      Text 2:<input type="text" onChange={this.changeValue} name="texte2"></input>
      <button onClick={this.show}>show</button>
      <p>{this.state.result}</p>
      </div>
        
    );
  }
}

export default App;
