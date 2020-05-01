import React, {Component} from 'react';

import './Cell.css';

export default class CellState0 extends Component  {

  // this.props.data.{type, state, progress, found}
  // this.props.index
  // this.props.start

  start(){
    this.props.start(this.props.index, 1000);
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
