import React, {Component} from 'react';

import './Tab.css'

import Asset from'./Asset.Component';

export default class Tab extends Component  {

  // Tab = SKILL e.g. Material Skill
  
  // this.props.type
  // Asset[] Schema: this.props.assets[].{type, id, cost, level, amountToInvest}
  // this.props.addCell
  // this.props.openEnrichMenu
  // this.props.addToCart

  getAssets(){
    return this.props.assets.map((assetData, i) => {
        return <Asset 
        data={assetData} 
        key={i}
        index={i}
        //addCell={this.props.addCell}
        openEnrichMenu={this.props.openEnrichMenu}
        addToCart={this.props.addToCart}
        />;
    });
  }

  render(){
    let assets;
    if(this.props.assets !== undefined) assets = this.getAssets();

    return (
      <div>
        <div className="tab"> 
          <div className="skill">{this.props.type}</div>
          <div className="dropdownArrow">▾</div>
        </div>
        
        <div className="assetList">
            <div className="assetListHeader">
                <div className="asset-row-header">LEVEL</div>
                <div className="asset-row-header">ASSET</div>
                <div className="asset-row-header">COST</div>
                <div className="asset-row-header"> </div>
            </div>

            <div>{assets}</div>
        </div>
      </div>
    );
  }
}
