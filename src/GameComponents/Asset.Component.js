import React, {Component} from 'react';

import './Asset.css';

export default class Tab extends Component  {
  
  // Asset Schema: this.props.data.{type, id, cost, level, amountToInvest}
  // this.props.key
  // this.props.index
  // this.props.addCell

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
          <div>{data.level}</div>
          <div>{data.id}</div>
          <div><span className=" AddAssetButton" onClick={this.addCell.bind(this, data)}>+</span></div>
          <div>{data.cost}</div>
      </div>
    );
  }
}
