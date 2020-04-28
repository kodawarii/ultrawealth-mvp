import React, {Component} from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Main from './ScreenComponents/Main.Component';
import Inventory from './ScreenComponents/Inventory.Component';

export default class App extends Component  {
  render(){
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component = { Main } />
            <Route exact path='/inventory' component={ Inventory } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
