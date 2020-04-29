import React, {Component} from 'react';

import './Cell.css';

export default class CellState2 extends Component  {
  render(){
    return (
      <div className="CellState2"> 
        <div className="CellState2-Type"> {this.props.data.type} </div>
        <div className="CellState2-Img">  gif  </div>
        <div className="CellState2-Btn">  <button> Collect </button>  </div>
        <div className="CellState2-Status"> COMPLETE {this.props.data.progress}% </div>
        <div className="CellState2-Info"> FOUND: {this.props.data.found} </div>
      </div>
    );
  }
}
