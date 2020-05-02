import React, {Component} from 'react';

import './AddMenu.css';

import Tab from './Tab.Component';

export default class AddMenu extends Component  {
  
  // this.props.userdata.{username, cash, level, cellsOpen, items, assets}

  render(){
    let assets = this.props.userdata.assets;
    let materialAssets = [];
    let estateAssets = [];

    for(let i = 0; i < assets.length; i++){
        switch(assets[i].type){
            case "material":
                materialAssets.push(assets[i]);
                break;
            case "estate":
                estateAssets.push(assets[i]);
                break;
            default:
                console.log(">> That Asset Type does not exist");
        }
    }

    return (
      <div className="AddMenu"> 
        <div className="top">
          <div className="title">My Assets</div>
          <div className="exit" onClick={this.props.exitAddMenu}>✕</div>
        </div>
        
        <div className="mid">  
          <div className="mid-table">
            <div> Current Cash </div>
            <div> 200,000 </div>
            <div> Total to Invest </div>
            <div> 120,000 </div>
            <div> NET </div>
            <div className="NetInvest"> 80,000 </div>
          </div>
          <div className="mid-AddBtn"><button className="AddCellsBtn">Add Cells</button></div>
        </div>

        <div className="bot">
          <Tab type="History" addCell={this.props.addCell} />
          <Tab type="Material Skills" assets={materialAssets} addCell={this.props.addCell} />
          <Tab type="Estate Skills" assets={estateAssets} addCell={this.props.addCell} />
        </div>
      </div>
    );
  }
}
