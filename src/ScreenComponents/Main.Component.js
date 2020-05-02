import React, {Component} from 'react';

import './Main.css';

import TitleNav from '../DisplayComponents/TitleNav.Component';
import DataDisplay from '../GameComponents/DataDisplay.Component';
import MineGrid from '../GameComponents/MineGrid.Component';
import AddMenu from '../GameComponents/AddMenu.Component';

export default class Main extends Component  {

  //this.props.openInventory

  //this.props.userdata.{username, cash etc} 
  //this.props.addCell
  //this.props.start
  //this.props.collectItems

  constructor(props){
    super(props);

    this.state = {
      isAddMenuOpen: false
    }
  }

  openAddMenu(){
    this.setState({isAddMenuOpen: true});
  }

  exitAddMenu(){
    this.setState({isAddMenuOpen: false});
  }

  render(){

    
    let MainComponentsClassNames = "MainComponents";
    let AddMenuComponentClassNames = "HideAddMenuComponent";
    let TitleNavComponentClassNames = "TitleNavComponent";

    if(this.state.isAddMenuOpen){
      MainComponentsClassNames = "HideMainComponents";
      AddMenuComponentClassNames = "AddMenuComponent";
    }
    else{
      MainComponentsClassNames = "MainComponents";
      AddMenuComponentClassNames = "HideAddMenuComponent";
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
          openInventory={this.props.openInventory}
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
          addCell={this.props.addCell}
          />
        </div>

      </div>
    );
  }
}
