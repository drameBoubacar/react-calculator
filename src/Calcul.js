export default class Calcul {
  constructor(){
  }
  addition(a,b){
    return a + b;
  }
  multiplicate(a, b){
    return a * b;
  }
  divide(a, b){
    return a / b;
  }
  soustract(a, b){
    return a - b;
  }
  modulo(a, b){
    if(b === 0){
      return 'modulo par 0 impossible';
    }
    else{
      return a % b;
    }
  }
}

class CalculetteScientifique extends Calcul {
  constructor(){
    super();
    this.addition
  }
  sinus(a, b){
    return Math.sin(a)* b
  }
  logarithme(a, b){
    return Math.log(b) / Math.log(a);
  }
  racineCarre(a){
    return Math.sqrt(a);
  }
  average(tab){
    let total = 0;
    for(i=0; i<tab.length; i++){
      total += tab[i];
    }
    let result = total / tab.length
    return result;
  }
}

export {CalculetteScientifique};