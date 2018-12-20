import React,{Component} from 'react';
import Calcul from './Calcul';

const calculette = new Calcul();

export default class calculatorComponent extends Component{
  constructor(props){
    super(props);   
    console.log('addition', calculette);
    this.state = {
      num1: "",
      num2: "",
      total: 0,
      operator: ""
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
  var total =  calculette.addition(+this.state.num1, +this.state.num2);
   this.setState({ 
     total : this.state.total = total
   })
  }
  else if(this.state.operator == "sub"){
    var total =  calculette.soustract(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "mult"){
    var total =  calculette.multiplicate(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
  else if(this.state.operator == "div"){
    var total =  calculette.divide(+this.state.num1, +this.state.num2);
    this.setState({ 
      total : this.state.total = total
    })
  }
}

  render(){
    return(
      <div>
        <input type="number" placeholder="enter a number" onChange={this.handleChangeInputOne.bind(this)}></input>
        <select onClick={this.handleChange.bind(this)}>
          <option></option>
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
        <input type="number" placeholder="enter a number" onChange={this.handleChangeInputTwo.bind(this)}></input>
        <button onClick={this.lanceCalculette.bind(this)}>calcul</button>
        <p>{this.state.total}</p>
      </div>
    )
  }
}