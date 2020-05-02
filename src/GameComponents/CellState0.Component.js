import React, {Component} from 'react';

import './Cell.css';

export default class CellState0 extends Component  {

  // Cell Schema: this.props.data.{class, type, state, progress, found, amountInvested}
  // this.props.index
  // this.props.start

  start(){
    this.props.start(this.props.index, this.props.data.amountInvested);
  }

  render(){
    return (
      <div className="CellState0"> 
        <div className="CellState0-Type"> {this.props.data.type} </div>
        <div className="CellState0-Btn"> 
          <button className="StartBtn" onClick={this.start.bind(this)}>
            START 
          </button>
        </div>
      </div>
    );
  }
}
