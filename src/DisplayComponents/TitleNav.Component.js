import React, {Component} from 'react';

import './TitleNav.css';

export default class TitleNav extends Component  {
  render(){
    return (
      <div className="TitleNav">   
        <div className="wrapper"> 
            <div className="col Padding"> 
                <div></div>
            </div>
            <div className="col Title"> 
                <div> U L T R A  W E A L T H ({this.props.page})  </div>
            </div>
            <div className="col MenuBtn"> 
                <div> ☰ </div>
            </div>
        </div>     
      </div>
    );
  }
}
