import React, {Component} from 'react';

import './MineGrid.css';

import Cell from './Cell.Component';
import AddCell from './AddCell.Component';

export default class MineGrid extends Component  {
  
  getCells(){
    return this.props.cellsOpen.map(function(cellData, i){
        return <Cell data={cellData} key={i} />;
    });
  }

  render(){
    return (
      <div className="MineGrid">
        <div className="MineGrid-wrapper field">
         {this.getCells()}
         <div> <AddCell /> </div>
        </div>
      </div>
    );
  }
}
