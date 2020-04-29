import React, {Component} from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Main from './ScreenComponents/Main.Component';
import Inventory from './ScreenComponents/Inventory.Component';
import getUserData from './MockData/user1';

export default class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      userdata: getUserData()
    }
  }

  render(){
    return (
      <div className="App">
        <HashRouter>
          <Switch>

            <Route 
            exact path='/' 
            component={ () => <Main userdata={this.state.userdata}/> } 
            />

            <Route 
            exact path='/inventory' 
            component={ () => <Inventory userdata={this.state.userdata}/> } 
            />

          </Switch>
        </HashRouter>
      </div>
    );
  }
}
