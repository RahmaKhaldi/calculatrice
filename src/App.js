import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
         eq:"", 
        result: ""
    }
}
addEquation = (e) =>{
      console.log(e.target.name)
        this.setState({
            eq: this.state.eq + e.target.name,result:e.target.name
        })
      }


calculate = () => {
    try {
      
        this.setState({
            result:(eval(this.state.eq))
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
      eq:"",
      result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.eq.slice(0, -1)
    })
};

  render() {
    
    return (
      <div>
        
         <div className="calculator-body" >
                <h1 style={{Color :"red"}}> Calculator</h1>
              
              <p>{this.state.result}</p>
            </div>

      <div className="button" style={{alignContent:"center" }}>
  
     
      <button name="(" onClick={this.addEquation}>(</button>
      <button name="CE" onClick={this.backspace}className="r">CE</button>
      <button name=")" onClick={this.addEquation}>)</button>
      <button name="C" onClick={this.reset}className="r">C</button><br/>
     

      <button name="1" onClick={this.addEquation} className="btn btn-default">1</button>
      <button name="2" onClick={this.addEquation}className="btn btn-default">2</button>
      <button name="3" onClick={this.addEquation}className="btn btn-default">3</button>
      <button name="+" onClick={this.addEquation}className="bt">+</button><br/>

      <button name="4" onClick={this.addEquation}className="btn btn-default">4</button>
      <button name="5" onClick={this.addEquation}className="btn btn-default">5</button>
      <button name="6" onClick={this.addEquation}className="btn btn-default">6</button>
      <button name="-" onClick={this.addEquation}className="bt">-</button><br/>
      
      <button name="7" onClick={this.addEquation}className="btn btn-default">7</button>
      <button name="8" onClick={this.addEquation}className="btn btn-default">8</button>
      <button name="9" onClick={this.addEquation}className="btn btn-default">9</button>
      <button name="*" onClick={this.addEquation}className="bt">x</button><br/>
     
      <button name="." onClick={this.addEquation}className="btn btn-default">.</button>
      <button name="0" onClick={this.addEquation}className="btn btn-default">0</button>
      <button name="=" onClick={this.calculate}className="egal">=</button>
      <button name="/" onClick={this.addEquation}className=" bt">÷</button>
      
  </div>
  
<div>
           
        </div>
</div>
         );
  }
}

export default App;
