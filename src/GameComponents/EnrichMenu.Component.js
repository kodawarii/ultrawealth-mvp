import React, {Component} from 'react';

import './EnrichMenu.css';

export default class EnrichMenu extends Component  {

  // this.props.userdata.{username, cash, level, cellsOpen, items, assets}
  // this.props.exitEnrichMenu
  // this.props.openAddMenu
  // this.props.removeFromCart
  // this.props.dataList[].{type, id, cost, level, amountToInvest} // will always have 1 item though

  constructor(props){
    super(props);

    this.state = {
        amountToInvest: 0
    }
  }

  addCell(){
    let curr = this.props.dataList[0];
    curr.amountToInvest = this.state.amountToInvest;
    this.props.addCell(curr);
  }

  plusInvest(){
    let curr = this.state.amountToInvest;
    curr += 1000;
    this.setState({amountToInvest: curr});
  }

  minusInvest(){
    let curr = this.state.amountToInvest;
    curr -= 1000;
    this.setState({amountToInvest: curr});
  }

  removeFromCartBACK(){
    this.props.openAddMenu();
    this.props.removeFromCart();
  }

  removeFromCartEXIT(){
    this.props.exitEnrichMenu();
    this.props.removeFromCart();
  }

  render(){
    // Setting Default data for initial rendering
    let data = {
        type: 'DEFAULT',
        id: 'DEFAULT',
        cost: 'DEFAULT',
        level: 'DEFAULT',
        amountToInvest: 'DEFAULT'
    };
    // Getting proper data when actually using AddMenu -> EnrichMenu
    if(this.props.dataList.length > 0) data = this.props.dataList[0];

    // Btn Settings
    let isPlusDisabled;
    let isMinusDisabled;
    if(this.state.amountToInvest <= 100 ) isMinusDisabled = true;
    else isMinusDisabled = false;
    if(this.state.amountToInvest >= this.props.userdata.cash) isPlusDisabled = true;
    else isPlusDisabled = false;

    return (
      <div className="EnrichMenu"> 
        <div className="EnrichMenu-Top">
          <div onClick={this.removeFromCartBACK.bind(this)}> Back </div>
          <div> Adding Asset </div>
          <div onClick={this.removeFromCartEXIT.bind(this)}>✕</div>
        </div>
        <div className="EnrichMenu-Mid">
            <div className="EnrichMenu-Mid-currentCash">
              <div> Current Cash </div>
              <div> ${this.props.userdata.cash} </div>
            </div>
            <div className="EnrichMenu-Mid-assetDetails">
              <div> {data.id} </div>
              <div> Cost to Add: (${data.cost}) </div>
              <div className="dummyBox"> XXX </div>
            </div>
            <div className="EnrichMenu-Mid-investAmount">
              <div> Amount to Invest: </div>
              <div> 
                <button onClick={this.minusInvest.bind(this)} disabled={isMinusDisabled}>-</button> 
                &nbsp;{this.state.amountToInvest}&nbsp;
                <button onClick={this.plusInvest.bind(this)} disabled={isPlusDisabled}>+</button>
              </div>
            </div>
            <div className="EnrichMenu-Mid-AddBtn"><button onClick={this.addCell.bind(this)}> Add </button></div>
        </div>
      </div>
    );
  }
}
