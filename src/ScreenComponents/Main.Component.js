import React, {Component} from 'react';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import DataDisplay from '../GameComponents/DataDisplay.Component';
import MineGrid from '../GameComponents/MineGrid.Component';

export default class Main extends Component  {
  render(){
    return (
      <div className="Main">
        <TitleNav page={"Main"}/>
        <DataDisplay />
        <MineGrid />
      </div>
    );
  }
}
