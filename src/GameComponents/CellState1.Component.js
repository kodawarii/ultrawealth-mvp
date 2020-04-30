import React, {Component} from 'react';

import './Cell.css';

export default class CellState1 extends Component  {
  render(){
    return (
      <div className="CellState1"> 
        <div className="CellState1-Type"> {this.props.data.type} </div>

        <div className="CellState1-Status">
          <div className="progressCircle-Outer-Animation">
            <div className="progressCircle"> 
              <div className="CellState1-progressText"> {this.props.data.progress}% </div>
            </div>
          </div>
        </div>

        <div className="CellState1-Info"> 
          <div className="CellState1-foundText"> 
            <span className="CellState1-foundText1"> FOUND </span> 
            <span className="CellState1-foundText2"> {this.props.data.found} </span>
          </div>
        </div>
      </div>
    );
  }
}
