import React, { Component } from 'react';
import {choice} from './helper';

import './Box.css'

class Box extends Component{
    
    constructor(props){
        super(props);
        this.state = {colorsBox :choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }
    
colorsPicker(){
    let newColor;
    do{
        newColor = choice(this.props.colors);
    }while(newColor === this.state.colorsBox);
    this.setState({colorsBox: newColor});
}

handleClick(e){
    this.colorsPicker();
}

    render() {
      return (
        <div className='Box' style={{backgroundColor:this.state.colorsBox}} 
          onClick ={this.handleClick}
        /> 
          
        )
    }
}

export default Box;
