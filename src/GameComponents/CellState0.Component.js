import React, {Component} from 'react';

import './Cell.css';

export default class CellState0 extends Component  {
  render(){
    return (
      <div className="CellState0"> 
        <div className="CellState0-Type"> {this.props.data.type} </div>
        <div className="CellState0-Btn"> <button className="StartBtn"> START </button> </div>
      </div>
    );
  }
}
