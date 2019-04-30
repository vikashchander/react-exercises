import React, { Component } from 'react';
import Coin from "./Coin";
import {choice} from './helper';

class Coinflip extends Component {
    static defaultProps={
        title:"Let's flip a coin!",
        coins:[
            {slide:"head", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {slide:"tail"  , imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" }
        ],
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin :null,
            nFlips:0,
            nHead: 0,
            nTails :0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
  generate(){
      const newCoin = choice(this.props.coins);
      console.log(newCoin);
      this.setState(st=>{
         return{
           currCoin: newCoin,
           nFlips :   st.nFlips+1,
           nHead :  st.nHead + (newCoin.slide==="head" ?1:0),
           nTails :  st.nTails +     (newCoin.slide==="tail" ?1:0)
         };
         
      });
 }

   handleClick(e){
       this.generate();
   }


    render() {
      return (
        <div>
        <h2>{this.props.title}</h2>
        
      {  this.state.currCoin  && <Coin info={this.state.currCoin} /> }
        <button onClick={this.handleClick} >Flip Here</button>
        <p>
                 out of  {this.state.nFlips} flips, there have been  {this.state.nHead}
                 heads  and {this.state.nTails} tails 
        </p>
        </div>
      );
    }
}
export default Coinflip;