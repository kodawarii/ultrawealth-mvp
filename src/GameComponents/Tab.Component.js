import React, {Component} from 'react';

import './Tab.css'

import Asset from'./Asset.Component';

export default class Tab extends Component  {
  
  // this.props.type
  // Asset[] Schema: this.props.assets[].{type, id, cost, level, amountToInvest}

  getAssets(){
    return this.props.assets.map((assetData, i) => {
        return <Asset 
        data={assetData} 
        key={i}
        index={i}
        addCell={this.props.addCell}
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
                <div className="asset-row-header">L E V E L</div>
                <div className="asset-row-header">A S S E T</div>
                <div className="asset-row-header"></div>
                <div className="asset-row-header">C O S T</div>
            </div>

            <div>{assets}</div>
        </div>
      </div>
    );
  }
}
