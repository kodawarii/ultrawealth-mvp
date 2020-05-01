import React, {Component} from 'react';

import './Tile.css';

// this.props.tileData.{id, quantity}

export default class Tile extends Component  {
  render(){
    return (
      <div className="Tile">
        <div className="item-name"> {this.props.tileData.id} </div>
        <div className="item-amount"> {this.props.tileData.quantity} </div>
      </div>
    );
  }
}
