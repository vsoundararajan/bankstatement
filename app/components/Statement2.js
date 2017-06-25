import React from 'react';

import uuid from 'uuid';
import Notesinput from './Notesinput';


class Statement extends React.Component  {
  constructor(props){
    super(props);
    this.state = props;
    this.handleAddNotes = this.handleAddNotes.bind(this);
  }
  prepareRow(date, row, runningBalance){ // flag to add amount to balance
     let rowElements = [];
     let keyid = 1;
     let amount = 0;
     let name = "";
     //let runningBalance = this.state.data.totalBalance;

     rowElements.push(<td key={keyid++} style={{textAlign: 'left', width: '75px'}}>{date}</td>);
     for(let element in row){

       if(element === 'amount'){
         rowElements.push(<td key={keyid++} style={{textAlign: 'right', width: '95px'}}>{'-$' + (row[element]).toFixed(2)}</td>);
         amount = row[element];
       }else{
         rowElements.push(<td key={keyid++} style={{textAlign: 'left', width: '375px'}}>{row[element]}</td>);
         name = row[element];
       }

     }
     rowElements.push(<td key={keyid++} style={{textAlign: 'right', width: '50px'}}>Processed</td>);
     rowElements.push(<td key={keyid++} style={{textAlign: 'right', width: '95px'}}>${runningBalance.toFixed(2)}</td>);
     rowElements.push(<td key={keyid++} style={{textAlign: 'right', width: '275px'}}><Notesinput amount={amount} name={name} date={date} addNotes={this.handleAddNotes}/></td>);
     return rowElements;
  }
  renderRows(){
    let retArray = [];
    if(this.state.data.transactions){
      let i = 0;
      let firstTime = true;
      let runningBalanceToDisplay = this.state.data.totalBalance;
      let amountToAddToBalance = 0;
      for(let item in this.state.data.transactions){
        this.state.data.transactions[item].map( (row) => {
          console.log("row at renderRows", row);
          if(firstTime){
            runningBalanceToDisplay += amountToAddToBalance;
            amountToAddToBalance = row.amount;
            firstTime = false;
          }else{
            runningBalanceToDisplay += amountToAddToBalance;
            amountToAddToBalance = row.amount;
          }
          retArray.push(
            <tr key={i++}>
                {this.prepareRow(item, row,runningBalanceToDisplay)}
            </tr>
          )
        });
      }
    }
    return retArray;
  }

  handleAddNotes(name, date, amount, newNotes){
    console.log(name, date, amount, newNotes);
    for(let item in this.state.data.transactions){
      this.state.data.transactions[item].map( (row) => {
        if(row.name === name && row.amount === amount && item === date){
          row["notes"] = newNotes;
          console.log("new State", this.state.data);
        }
      });
    }
  }
  render(){
    return(
        <table className="pure-table" style={{textAlign:'center', margin:'auto', width: '100%'}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Avl Bal.</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
              {this.renderRows()}
          </tbody>
        </table>
    );
  }
}


export default Statement;
