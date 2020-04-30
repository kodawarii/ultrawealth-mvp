import React, {Component} from 'react';

import './AddCell.css';

export default class AddCell extends Component{
  render(){
    return (
      <div className="AddCell">   
        <div className="AddCellWrapper"> 
          <div className="thePlus" onClick={this.props.addCell}> + </div>
        </div>
      </div>
    );
  }
}