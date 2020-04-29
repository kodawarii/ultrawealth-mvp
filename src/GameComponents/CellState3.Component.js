import React, {Component} from 'react';

import './Cell.css';

export default class CellState3 extends Component  {
  render(){
    return (
      <div className="CellState3"> 
        <div className="CellState3-Type"> {this.props.data.type} </div>
        <div className="CellState3-Warning"> Axe must be equipped / More Gold is required </div>
      </div>
    );
  }
}
