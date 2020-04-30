import React, {Component} from 'react';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import DataDisplay from '../GameComponents/DataDisplay.Component';
import MineGrid from '../GameComponents/MineGrid.Component';

export default class Main extends Component  {
  render(){
    return (
      <div className="Main">
        
        <TitleNav 
        />
        
        <DataDisplay 
        cash={this.props.userdata.cash}
        />
        
        <MineGrid 
        cellsOpen={this.props.userdata.cellsOpen} 
        addCell={this.props.addCell} 
        start={this.props.start}
        />

      </div>
    );
  }
}
