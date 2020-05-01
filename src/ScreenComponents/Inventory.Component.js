import React, {Component} from 'react';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import BannerTitle from '../InventoryComponents/BannerTitle.Component';
import Cash from '../InventoryComponents/Cash.Component';
import TileGrid from '../InventoryComponents/TileGrid.Component';

// this.props.userdata = {data, username, cash, level, cellsOpen, items}

export default class Inventory extends Component  {
  render(){
    return (
      <div className="Inventory">
        <TitleNav page={"Inventory"}/>
        <BannerTitle />
        <Cash userdata={this.props.userdata} />
        <TileGrid userdata={this.props.userdata} />
      </div>
    );
  }
}
