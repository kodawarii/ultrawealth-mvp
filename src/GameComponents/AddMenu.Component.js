import React, {Component} from 'react';

import './AddMenu.css';

import Tab from './Tab.Component';

export default class AddMenu extends Component  {
  
  // this.props.userdata.{username, cash, level, cellsOpen, items, assets}
  // this.props.exitAddMenu
  // this.props.addCell

  constructor(props){
    super(props);

    this.state = {
      cart: [],
      totalInvest: 0
    }
  }

  updateCart(actionT, cell, cellType){
    console.log("Before: ");
    console.log(this.state.cart);

    let curr = this.state.cart;
    if(actionT === "add"){
      curr.push(cell);
      this.setState({cart: curr});
    }
    else if(actionT == "minus"){
      curr.splice(0, 1);
      this.setState({cart: curr});
    }
    else{
      console.log("> Cant do that transaction");
    }

    console.log("");
    console.log("After: ");
    console.log(this.state.cart);
  }

  updateTotal(val){
    this.setState({totalInvest: val});
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
        <div className="top">
          <div className="title">My Assets</div>
          <div className="exit" onClick={this.props.exitAddMenu}>✕</div>
        </div>
        
        <div className="mid">  
          <div className="mid-table">
            <div> Current Cash </div>
            <div className="number"> ${this.props.userdata.cash} </div>
            <div> Total to Invest </div>
            <div className="number"> ${this.state.totalInvest} </div>
            <div> NET Cash </div>
            <div className="NetInvest number"> ${this.props.userdata.cash - this.state.totalInvest} </div>
          </div>
          <div className="mid-AddBtn"><button className="AddCellsBtn">Add Cells ({this.state.cart.length}) </button></div>
          <div> Select Divider: h k m b t</div>
        </div>

        <div className="bot">
          <Tab 
            type="History" 
            addCell={this.props.addCell} />

          <Tab 
            type="Material Skills" 
            assets={materialAssets} 
            addCell={this.props.addCell} 
            updateTotal={this.updateTotal.bind(this)} 
            updateCart={this.updateCart.bind(this)}/>

          <Tab 
            type="Estate Skills" 
            assets={estateAssets} 
            addCell={this.props.addCell} 
            updateTotal={this.updateTotal.bind(this)} 
            updateCart={this.updateCart.bind(this)}/>

        </div>
      </div>
    );
  }
}
