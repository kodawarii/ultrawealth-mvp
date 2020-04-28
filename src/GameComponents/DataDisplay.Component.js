import React, {Component} from 'react';

import './DataDisplay.css';

export default class DataDisplay extends Component  {

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  render(){
    return (
      <div className="DataDisplay">
        <div className="cash"> Cash: ${this.numberWithCommas(this.props.cash)} </div>
        <div className="inventory"> <button className="btn-inventory"> Inventory </button> </div>
      </div>
    );
  }
}
