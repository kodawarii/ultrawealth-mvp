import React, {Component} from 'react';

import './Cell.css';

export default class CellState2 extends Component  {

  // this.props.data.{type, state, progress, found}
  // this.props.index
  // this.props.collectItems

  collectItems(){
    this.props.collectItems(this.props.index, this.props.data.type, this.props.data.found);
  }

  render(){
    return (
      <div className="CellState2"> 
        <div className="CellState2-Type"> {this.props.data.type} </div>

          <div className="CellState2-Status">
              <div className="progressCircle2"> 
                <div className="CellState2-progressText"> {this.props.data.progress}% </div>
              </div>
          </div>

          <div className="CellState2-Info"> 
            <div className="CellState2-collectText" onClick={this.collectItems.bind(this)}> 
              <span className="CellState2-collectText1"> COLLECT </span> 
              <span className="CellState2-collectText2"> {this.props.data.found} </span>
            </div>
          </div>
      </div>
    );
  }
}
