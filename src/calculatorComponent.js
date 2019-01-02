import React,{Component} from 'react';
import Calcul from './Calcul';
import {CalculetteScientifique} from './Calcul';


export default class calculatorComponent extends Component{
constructor(props){
  super(props);   
    this.scientifique = new Calcul();
    console.log('CALCUL', this.scientifique);
    this.state = {
      num1: "",
      num2: "",
      total: 0,
      operator: "add"
    }
}

handleChange(e){
  this.setState({
    operator : e.target.value
  })  
}

handleChangeInputOne(e){
  this.setState({
      num1 : e.target.value
  })
}

handleChangeInputTwo(e){
  this.setState({
    num2 : e.target.value
  })
}


lanceCalculette(){
  if(this.state.operator == "add"){
    let total =  this.calculette.addition(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "sub"){
    let total =  this.calculette.soustract(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "mult"){
    let total =  this.calculette.multiplicate(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "div"){
    let total =  this.calculette.divide(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "modulo"){
    let total =  this.calculette.modulo(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
}

  render(){
    return(
      <div className="container">
        <input type="number" placeholder="enter a number" onChange={this.handleChangeInputOne.bind(this)}></input>
        <select onChange={this.handleChange.bind(this)} value={this.state.operator} >
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
          <option value="modulo">%</option>

          <option value="sin">sin</option>
          <option value="log">ln</option>
          <option value="racine">racine</option>
        </select>
        <input type="number" placeholder="enter a number" onChange={this.handleChangeInputTwo.bind(this)}></input>
        <button onClick={this.lanceCalculette.bind(this)}>calcul</button>
        <p>{this.state.total}</p>
      </div>
    )
  }
}