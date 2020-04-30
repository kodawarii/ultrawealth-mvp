import React, {Component} from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Main from './ScreenComponents/Main.Component';
import Inventory from './ScreenComponents/Inventory.Component';

// Mock Data
import getUserData from './MockData/user1';
import getUserData2 from './MockData/user2';
import mine1 from './MockData/mining1';
import mine2 from './MockData/mining2';

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
        if (i !== 0) await sleep(1000);
        currUserData.cellsOpen[index].progress = i;
        this.setState({userdata: currUserData});
    }

    // Finnished mining so set state to 2
    currUserData.cellsOpen[index].state = 2;
    this.setState({userdata: currUserData});
  }

  addCell(){
    let currUserData = this.state.userdata;

    currUserData.cellsOpen.push({
      type: "wood",
      state: 0,
      progress: 0,
      found: 0
    });
    
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
              addCell={this.addCell.bind(this)} 
              start={this.start.bind(this)} 
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
