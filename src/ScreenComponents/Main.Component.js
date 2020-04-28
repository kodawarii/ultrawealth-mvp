import React, {Component} from 'react';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import DataDisplay from '../GameComponents/DataDisplay.Component';
import MineGrid from '../GameComponents/MineGrid.Component';

export default class Main extends Component  {

  constructor(props){
    super(props);

    this.state = {
      cash: 10000
    }
  }

  render(){
    return (
      <div className="Main">
        <TitleNav page={"Main"}/>
        <DataDisplay cash={this.state.cash}/>
        <MineGrid />
      </div>
    );
  }
}
