import React, {Component} from 'react';

import './TitleNav.css';

export default class TitleNav extends Component  {
  render(){
    return (
      <div className="TitleNav">        
        <div> ULTRA WEALTH ({this.props.page})  </div>
        <div> NAV MENU </div>
      </div>
    );
  }
}
