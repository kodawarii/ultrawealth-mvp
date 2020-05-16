import React, {Component} from 'react';

import './Asset.css';

export default class Tab extends Component  {

  // Asset = Actual Cell Item e.g. GOLD
  
  // Asset Schema: this.props.data.{type, id, cost, level, amountToInvest}
  // this.props.key
  // this.props.index
  // this.props.addCell // <div><span className=" AddAssetButton" onClick={this.addCell.bind(this, data)}>+</span></div> :: now deprecated
  // this.props.updateTotal
  // this.props.updateCart

  constructor(props){
    super(props);

    this.state = {
      isMinusInvestDisabled: false,
      isMinusQtyDisabled: false,
      isAddInvestDisabled: false,
      isAddQtyDisabled: false,
      invest: 100,
      qty: 0
    }
  }

  updateInvestBtnStatus(){
    if(this.state.invest < 100) this.setState({isMinusInvestDisabled: true});
    else this.setState({isMinusInvestDisabled: false});
  }

  updateQtyBtnStatus(){
    if(this.state.qty < 1) this.setState({isMinusQtyDisabled: true});
    else this.setState({isMinusQtyDisabled: false});
  }

  minusQty(){
    let curr = this.state.qty;
    this.setState({qty: --curr});

    this.updateQtyBtnStatus();
    this.props.updateCart("minus", 0, this.props.data.type);
  }

  /*
      {
      type: data.id,
      state: 0,
      progress: 0,
      found: 0,
      amountInvested: data.amountToInvest
      }
  */

  minusInvest(val){
    let curr = this.state.invest;
    this.setState({invest: curr - val});

    this.updateInvestBtnStatus();
    this.props.updateTotal(this.state.invest);
  }

  addQty(){
    let curr = this.state.qty;
    this.setState({qty: ++curr});

    this.updateQtyBtnStatus();
    this.props.updateCart("add", 0, this.props.data.type);
  }

  addInvest(val){
    let curr = this.state.invest;
    this.setState({invest: curr + val});

    this.updateInvestBtnStatus();
    this.props.updateTotal(this.state.invest);
  }

  addCell(data){    
    this.props.addCell(data);
  }

  render(){
    let commonBtnClassNames = "common-btn ";
    let minusBtnClassNames = "minus-sign-btn ";
    let addBtnClassNames = "add-sign-btn "

    let minusInvestBtnClassNames = commonBtnClassNames + minusBtnClassNames;
    let minusQtyBtnClassNames = commonBtnClassNames + minusBtnClassNames;
    let addInvestBtnClassNames = commonBtnClassNames + addBtnClassNames;
    let addQtyBtnClassNames = commonBtnClassNames + addBtnClassNames;

    let data, rowClassNames="asset-row";
    if(this.props.data!==undefined){
        data = this.props.data;

        if(data.type === "material"){
            rowClassNames += " asset-row-material"
        }

        if(data.type === "estate"){
            rowClassNames += " asset-row-estate"
        }
    }

    return (
      <div className={rowClassNames}>
          <div className="DATA_LEVEL asset-font">{data.level}</div>
          <div className="DATA_ID asset-font">{data.id}</div>

          <div className="AMOUNT_TO_INVEST asset-font with-btns number"> 
            <button disabled={this.state.isMinusInvestDisabled} className={minusInvestBtnClassNames} onClick={this.minusInvest.bind(this, 100)}>-</button> 
            &nbsp;${this.state.invest}&nbsp;
            <button className={addInvestBtnClassNames} onClick={this.addInvest.bind(this, 100)}>+</button> 
          </div>

          <div className="QTY_TO_INVEST asset-font with-btns"> 
            <button disabled={this.state.isMinusQtyDisabled} className={minusQtyBtnClassNames} onClick={this.minusQty.bind(this)}>-</button> 
            &nbsp;{this.state.qty}&nbsp;
            <button className={addQtyBtnClassNames} onClick={this.addQty.bind(this)}>+</button> 
          </div>

          <div className="DATA_COST asset-font number">${data.cost}</div>
      </div>
    );
  }
}
