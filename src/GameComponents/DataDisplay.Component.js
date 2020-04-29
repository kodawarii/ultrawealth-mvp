import React, {Component} from 'react';

import './DataDisplay.css';

export default class DataDisplay extends Component  {

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  render(){
    return (
      <div className="DataDisplay">
        <div className="DataDisplay-1Data">
          <ul className="DataDisplay-1Data-ul">
            <li className="cash">
                <div className="DataDisplay-Header">Cash</div>
                <div className="DataDisplay-Figure">${this.numberWithCommas(this.props.cash)}</div> 
                <div className="DataDisplay-Figure2"> +$500 (+5.04%) </div>
            </li>
          </ul>
        </div>        
        <div className="DataDisplay-2Buttons">
          <ul className="DataDisplay-2Buttons-ul">
            <li><button className="DataDisplay-btn"> Inventory </button></li>
            <li><button className="DataDisplay-btn"> Equips </button></li>
            <li><button className="DataDisplay-btn"> Assets </button></li>
            <li><button className="DataDisplay-btn"> SHOP </button></li>
          </ul>
        </div>
      </div>
    );
  }
}
