import React, {Component} from 'react';

import './Cell.css';

export default class CellState1 extends Component  {
  render(){
    return (
      <div className="CellState1"> 
        <div className="CellState1-Type"> {this.props.data.state} </div>
        <div className="CellState1-Img">  gif  </div>
        <div className="CellState1-Status"> MINING {this.props.data.progress}% </div>
        <div className="CellState1-Info"> FOUND: {this.props.data.found} </div>
      </div>
    );
  }
}
