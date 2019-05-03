import React,{Component} from  'react';
import './Dice.css'

class Dice extends Component{  
    render(){

    return(
        <div className="Dice">
        <i className={` Dice-icons fas fa-dice-${this.props.show} ${this.props.rolling?"animated bounce shake":" "}`}></i>
        </div>
    );
}
}

export default Dice;