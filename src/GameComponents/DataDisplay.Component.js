import React, {Component} from 'react';

import './DataDisplay.css';

export default class DataDisplay extends Component  {
  render(){
    return (
      <div className="DataDisplay">
        <div> Cash: $10,000 </div>
        <div> <button className="btn-inventory"> Inventory </button> </div>
      </div>
    );
  }
}
