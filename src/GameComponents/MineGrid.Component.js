import React, {Component} from 'react';

import './MineGrid.css';

import Cell from './Cell.Component';
import AddCell from './AddCell.Component';

export default class MineGrid extends Component  {
  
  getCells(){
    return this.props.cellsOpen.map((cellData, i) => { // Needs to be a arrow function to access this.props (if we use function() then 'this' is binded to that function, not globular)
        return <Cell 
        data={cellData} 
        key={i}
        index={i}
        start={this.props.start} />;
    });
  }

  render(){
    return (
      <div className="MineGrid">
        <div className="MineGrid-wrapper field">
         {this.getCells()}
         <div> <AddCell addCell={this.props.addCell}/> </div>
        </div>
      </div>
    );
  }
}
