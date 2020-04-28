import React, {Component} from 'react';

import './MineGrid.css';

import Cell from './Cell.Component';

export default class MineGrid extends Component  {
  render(){
    return (
      <div className="MineGrid">
        <div className="MineGrid-wrapper field">
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
         <Cell></Cell>
        </div>
      </div>
    );
  }
}
