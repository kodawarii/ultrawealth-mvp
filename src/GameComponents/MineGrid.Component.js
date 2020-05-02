import React, {Component} from 'react';

import './MineGrid.css';

import Cell from './Cell.Component';
import AddCell from './AddCell.Component';

export default class MineGrid extends Component  {

  //this.props.cellsOpen.[cellData.{class, type, state, progress, found, amountInvested}]
  //this.props.start
  //this.props.collectItems
  //this.props.openAddMenu
  
  getCells(){
    return this.props.cellsOpen.map((cellData, i) => { // Needs to be a arrow function to access this.props (if we use function() then 'this' is binded to that function, not globular)
        return <Cell 
        data={cellData} 
        key={i}
        index={i}
        start={this.props.start} 
        collectItems={this.props.collectItems}
        />;
    });
  }

  render(){
    return (
      <div className="MineGrid">
        <div className="MineGrid-wrapper field">
         {this.getCells()}
         <div> <AddCell openAddMenu={this.props.openAddMenu} /> </div>
        </div>
      </div>
    );
  }
}
