import React, {Component} from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from './ScreenComponents/Main.Component';
import Inventory from './ScreenComponents/Inventory.Component';

// Mock Data
import getUserData from './MockData/user1';
import getUserData2 from './MockData/user2';

export default class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      userdata: getUserData2()
    }
  }

  async start(index, price){
    let currUserData = this.state.userdata;

    // Pay price to do a mining job
    currUserData.cash -= price;

    // Mining state so set to state 1
    currUserData.cellsOpen[index].state = 1;
     
    //// Support Function for mock scenario
    let sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //// Mocking a mining scenario
    for (let i = 0; i <= 100; i++) {
        if (i !== 0) await sleep(10); //@TODO Random Time Range for WOOD
        currUserData.cellsOpen[index].progress = i;
        currUserData.cellsOpen[index].found = i*8; // @TODO Random Num Range for WOOD
        this.setState({userdata: currUserData});
    }

    // Finnished mining so set state to 2
    currUserData.cellsOpen[index].state = 2;
    this.setState({userdata: currUserData});
  }

  addCell(data){
    // Asset Schema: data.{type, id, cost, level, amountToInvest}
    let currUserData = this.state.userdata;

    currUserData.cellsOpen.push({
      type: data.id,
      state: 0,
      progress: 0,
      found: 0,
      amountInvested: data.amountToInvest
    });

    currUserData.cash -= data.cost;
    
    this.setState({userdata: currUserData});
  }

  collectItems(index, name, value){
    // Add value to inventory items to that item, 'name'
    let currUserData = this.state.userdata;
    let currUserItems = currUserData.items;

    for(let i = 0; i < currUserItems.length; i++){
      if(currUserItems[i].id === name) currUserItems[i].quantity += value;
    }

    // Reset index cell to state 0
    let currUserCellsOpen = currUserData.cellsOpen;
    currUserCellsOpen[index].state = 0;

    // Update App state with new user details
    this.setState({userdata: currUserData});
  }

  render(){
    return (
      <div className="App">
        <HashRouter>
          <Switch>

            <Route 
            exact path='/' 
            component={ 
              () => 
              <Main 
              userdata={this.state.userdata} 
              start={this.start.bind(this)}
              collectItems={this.collectItems.bind(this)}
              addCell={this.addCell.bind(this)} 
              /> 
            } 
            />

            <Route 
            exact path='/inventory' 
            component={ 
              () => 
              <Inventory 
              userdata={this.state.userdata}
              /> 
            } 
            />

          </Switch>
        </HashRouter>
      </div>
    );
  }
}
