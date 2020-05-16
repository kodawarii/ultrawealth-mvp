import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './DataDisplay.css';

import * as functions from '../Helpers/Functions';

//@TODO: Move buttons out into separate component, makes no sense to have it within DataDisplay component

export default class DataDisplay extends Component  {

  // this.props.cash

  render(){
    return (
      <div className="DataDisplay">
        <div className="DataDisplay-1Data">
          <ul className="DataDisplay-1Data-ul">
            <li className="cash">
                <div className="DataDisplay-Header">Cash</div>
                <div className="DataDisplay-Figure">${functions.numberWithCommas(this.props.cash)}</div> 
                <div className="DataDisplay-Figure">${functions.convertLongNum(this.props.cash)}</div> 
                <div className="DataDisplay-Figure2"> +$500 (+5.04%) </div>
            </li>
          </ul>
        </div>        
        <div className="DataDisplay-2Buttons">
          <ul className="DataDisplay-2Buttons-ul">
            <li><Link to={'/inventory'}><button className="DataDisplay-btn"> Inventory </button></Link></li>
            <li><button className="DataDisplay-btn"> Equips </button></li>
            <li><button className="DataDisplay-btn"> Assets </button></li>
            <li><button className="DataDisplay-btn"> SHOP </button></li>
          </ul>
        </div>
      </div>
    );
  }
}
