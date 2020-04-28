import React, {Component} from 'react';

import TitleNav from '../DisplayComponents/TitleNav.Component';

export default class Inventory extends Component  {
  render(){
    return (
      <div className="Inventory">
        <TitleNav page={"Inventory"}/>
        Inventory Screen Component Works
      </div>
    );
  }
}
