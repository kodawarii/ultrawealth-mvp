import React, {Component} from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Main from './ScreenComponents/Main.Component';
import Inventory from './ScreenComponents/Inventory.Component';
import getUserData from './MockData/user1';
import getUserData2 from './MockData/user2';

export default class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      userdata: getUserData2()
    }
  }

  start(index){
    let currUserData = this.state.userdata;

    currUserData.cellsOpen[index].state = 1;

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
