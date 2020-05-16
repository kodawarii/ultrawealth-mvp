import React, {Component} from 'react';

import './Main.css';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import DataDisplay from '../GameComponents/DataDisplay.Component';
import MineGrid from '../GameComponents/MineGrid.Component';
import AddMenu from '../GameComponents/AddMenu.Component';
import EnrichMenu from '../GameComponents/EnrichMenu.Component';

export default class Main extends Component  {

  //this.props.openInventory

  //this.props.userdata.{username, cash, level, cellsOpen, items, assets} 
  //this.props.addCell
  //this.props.start
  //this.props.collectItems

  constructor(props){
    super(props);

    this.state = {
      cart: [],
      isAddMenuOpen: false,
      isEnrichMenuOpen: false
    }
  }

  removeFromCart(){
    let list = [];
    this.setState({cart: list});
  }

  addToCart(assetData){
    let list = [];
    list.push(assetData);
    this.setState({cart: list});
  }

  openEnrichMenu(){
    this.setState({isEnrichMenuOpen: true});
    this.setState({isAddMenuOpen: false});
  }

  exitEnrichMenu(){
    this.setState({isEnrichMenuOpen: false});
    this.setState({isAddMenuOpen: false});
  }

  openAddMenu(){
    this.setState({isAddMenuOpen: true});
    this.setState({isEnrichMenuOpen: false});
  }

  exitAddMenu(){
    this.setState({isAddMenuOpen: false});
    this.setState({isEnrichMenuOpen: false});
  }

  render(){
    let MainComponentsClassNames = "MainComponents ";
    let AddMenuComponentClassNames = "HideAddMenuComponent ";
    let EnrichMenuComponentClassNames= "HideEnrichMenuComponent ";
    let TitleNavComponentClassNames = "TitleNavComponent ";

    if(this.state.isAddMenuOpen){
      EnrichMenuComponentClassNames= "HideEnrichMenuComponent ";
      MainComponentsClassNames = "HideMainComponents ";
      AddMenuComponentClassNames = "AddMenuComponent ";
    }
    else if(this.state.isEnrichMenuOpen){
      MainComponentsClassNames = "HideMainComponents ";
      AddMenuComponentClassNames = "HideAddMenuComponent ";
      EnrichMenuComponentClassNames= "EnrichMenuComponent ";
    }
    else{
      AddMenuComponentClassNames = "HideAddMenuComponent ";
      EnrichMenuComponentClassNames= "HideEnrichMenuComponent ";
      MainComponentsClassNames = "MainComponents ";
    }

    return (
      <div className="Main">
        <div className={TitleNavComponentClassNames}>
          <TitleNav 
          />
        </div>

        <div className={MainComponentsClassNames}>
          <DataDisplay 
          cash={this.props.userdata.cash}
          />
          
          <MineGrid 
          cellsOpen={this.props.userdata.cellsOpen}
          start={this.props.start}
          collectItems={this.props.collectItems}
          openAddMenu={this.openAddMenu.bind(this)}
          />
        </div>

        <div className={AddMenuComponentClassNames}>
          <AddMenu
          userdata={this.props.userdata}
          exitAddMenu={this.exitAddMenu.bind(this)}
          //addCell={this.props.addCell}
          openEnrichMenu={this.openEnrichMenu.bind(this)}
          addToCart={this.addToCart.bind(this)}
          />
        </div>

        <div className={EnrichMenuComponentClassNames}>
          <EnrichMenu
          userdata={this.props.userdata}
          exitEnrichMenu={this.exitEnrichMenu.bind(this)}
          openAddMenu={this.openAddMenu.bind(this)}
          removeFromCart={this.removeFromCart.bind(this)}
          dataList={this.state.cart}
          addCell={this.props.addCell}
          />
        </div>

      </div>
    );
  }
}
