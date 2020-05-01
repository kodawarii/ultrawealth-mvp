import React, {Component} from 'react';

import './Cash.css';

// this.props.userdata.{data, username, cash, level, cellsOpen, items}

export default class Cash extends Component  {
  render(){
    return (
      <div className="Cash">
        Cash ${this.props.userdata.cash}
      </div>
    );
  }
}
