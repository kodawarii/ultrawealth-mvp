import React, {Component} from 'react';

import './AddMenu.css';

import Tab from './Tab.Component';

export default class AddMenu extends Component  {
  
  // this.props.userdata.{username, cash, level, cellsOpen, items, assets}
  // this.props.exitAddMenu
  // this.props.addCell
  // this.props.openEnrichMenu
  // this.props.addToCart

  constructor(props){
    super(props);

    this.state = {

    }
  }

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
        <div className="AddMenu-top">
          <div className="title">My Assets</div>
          <div className="exit" onClick={this.props.exitAddMenu}>✕</div>
        </div>
        
        <div className="AddMenu-mid">  
          <div className="mid-table">
            <div> Current Cash </div>
            <div className="number"> ${this.props.userdata.cash} </div>
          </div>
        </div>

        <div className="AddMenu-bot">
          <Tab 
            type="History" 
            addCell={this.props.addCell} />

          <Tab 
            type="Material Skills" 
            assets={materialAssets} 
            //addCell={this.props.addCell}
            openEnrichMenu={this.props.openEnrichMenu}
            addToCart={this.props.addToCart}
            />

          <Tab 
            type="Estate Skills" 
            assets={estateAssets} 
            //addCell={this.props.addCell}
            openEnrichMenu={this.props.openEnrichMenu}
            addToCart={this.props.addToCart}
            />

        </div>
      </div>
    );
  }
}
