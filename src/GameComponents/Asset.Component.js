import React, {Component} from 'react';

import './Asset.css';

export default class Tab extends Component  {

  // Asset = Actual Cell Item e.g. GOLD
  
  // Asset Schema: this.props.data.{type, id, cost, level, amountToInvest}
  // this.props.key
  // this.props.index
  // this.props.addCell // <div><span className=" AddAssetButton" onClick={this.addCell.bind(this, data)}>+</span></div> :: now deprecated

  addCell(data){    
    this.props.addCell(data);
  }

  render(){
    let data, rowClassNames="asset-row";
    if(this.props.data!==undefined){
        data = this.props.data;

        if(data.type === "material"){
            rowClassNames += " asset-row-material"
        }

        if(data.type === "estate"){
            rowClassNames += " asset-row-estate"
        }
    }

    return (
      <div className={rowClassNames}>
          <div className="asset-font">{data.level}</div>
          <div className="asset-font">{data.id}</div>
          <div className="asset-font">{data.cost}</div>
          <div className="asset-font"> -0+ </div>
          <div className="asset-font"> -0+ </div>
      </div>
    );
  }
}
