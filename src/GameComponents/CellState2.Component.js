import React, {Component} from 'react';

import './Cell.css';

export default class CellState2 extends Component  {
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
            <div className="CellState2-collectText"> 
              <span className="CellState2-collectText1"> COLLECT </span> 
              <span className="CellState2-collectText2"> {this.props.data.found} </span>
            </div>
          </div>
      </div>
    );
  }
}
