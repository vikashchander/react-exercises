import React , {Component} from 'react';

import Box from './Box';
import './Boxcontainer.css';

class Boxcontainer extends Component{
  static defaultProps={
      maxBox : 16,
      allColors :['tomato','blue','cyan','fuchsia'] 
  }

  
    render() {
        const boxes = Array.from({length: this.props.maxBox}).map(()=>
            <Box colors={this.props.allColors}/>
        )
     return(
        <div className='Boxcontainer'>
          {boxes}
        </div>
     );

  }
}

export default  Boxcontainer;