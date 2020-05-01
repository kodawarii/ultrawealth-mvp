import React, {Component} from 'react';

import './TileGrid.css';

import Tile from './Tile.Component';

// this.props.userdata.{data, username, cash, level, cellsOpen, items}

export default class TileGrid extends Component  {

  getTiles(){
    return this.props.userdata.items.map((tileData, i) => {
        return <Tile
        tileData={tileData}
        key={i}
        index={i}
        />
    })
  }

  render(){
    return (
      <div className="TileGrid">
        <div className="TileGridTitle"> Items  | Total {this.props.userdata.items.length}</div>
        {this.getTiles()}
      </div>
    );
  }
}
