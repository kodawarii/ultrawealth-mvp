import React, {Component} from 'react';

import './Asset.css';

export default class Tab extends Component  {

  // Asset = Actual Cell Item e.g. GOLD
  
  // Asset Schema: this.props.data.{type, id, cost, level, amountToInvest}
  // this.props.key
  // this.props.index
  //// this.props.addCell // <div><span className=" AddAssetButton" onClick={this.addCell.bind(this, data)}>+</span></div> :: now deprecated
  // this.props.openEnrichMenu
  // this.props.addToCart

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  addCell(data){    
    this.props.addCell(data);
  }

  selectAsset(){
    this.props.openEnrichMenu();
    this.props.addToCart(this.props.data);
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
          <div className="DATA_LEVEL asset-font">{data.level}</div>
          <div className="DATA_ID asset-font">{data.id}</div>
          <div className="DATA_COST asset-font number">${data.cost}</div>
          <div className="SELECT_BUTTON asset-font"><button onClick={this.selectAsset.bind(this)}> Select </button> </div>
      </div>
    );
  }
}
