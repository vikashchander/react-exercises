import React, { Component } from 'react';
import {choice}  from './helper';
import Dice from "./Dice";
import './DiceRoller.css'

class DiceRoller extends Component{
    static defaultProps={
        dices :[
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
        ]
    };
    constructor(props){
        super(props);
        this.state={dice1 :'two', dice2 :'two', rolling:false };
        this.handleClick = this.handleClick.bind(this);
    }
 
     generate(){
      const newDice = choice(this.props.dices);
      const newSecondDice = choice(this.props.dices);
      this.setState({dice1:newDice,dice2:newSecondDice, rolling:true});
       setTimeout(()=>{
         this.setState({rolling:false});
       },1000);
    }
    handleClick(e){
       this.generate();
    }

    render() {
      return (
        <div className="DiceRoller">
          <Dice show={this.state.dice1}  rolling={this.state.rolling}/>
          <Dice show={this.state.dice2} rolling={this.state.rolling}/>
          <br/>
          <button  onClick={this.handleClick} disabled={this.state.rolling}>
            {this.state.rolling?"Rolling  ..." :"Rolling Dice" }
          </button>
        </div>
      )
    }
}

export default DiceRoller;