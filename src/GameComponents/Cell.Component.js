import React, {Component} from 'react';

import CellState0 from './CellState0.Component';
import CellState1 from './CellState1.Component';
import CellState2 from './CellState2.Component';
import CellState3 from './CellState3.Component';

import './Cell.css';

export default class Cell extends Component  {
  
  // Cell Schema: this.props.data.{class, type, state, progress, found, amountInvested}
  // this.props.key = index of that data in openCells[] // cant use as props
  // this.props.index = index of that data in openCells[] // so use this instead
  // this.props.start = start() mining in App.js

  render(){
    let cell;

    switch(this.props.data.state){
      case 0:
        cell = <CellState0 data={this.props.data} index={this.props.index} start={this.props.start} />
        break;
      case 1:
        cell = <CellState1 data={this.props.data} />
        break;
      case 2:
        cell = <CellState2 data={this.props.data} index={this.props.index} collectItems={this.props.collectItems} />
        break;
      case 3:
        cell = <CellState3 data={this.props.data} />
        break;
      default:
        console.log("> That State does not exist");
        break;
    }

    return (
      <div className="Cell"> 
        {cell}
      </div>
    );
  }
}
