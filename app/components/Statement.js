import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import uuid from 'uuid';
import Notesinput from './Notesinput';


class Statement extends React.Component  {
  constructor(props){
    super(props);
    this.state = props;
  }
  prepareRow(date, row){
     var rowElements = [];
     var keyid = 1;
     rowElements.push(<TableRowColumn key={keyid++}>{date}</TableRowColumn>);
     for(let element in row){
       if(element === 'amount'){
         rowElements.push(<TableRowColumn key={keyid++}>{'$' + (row[element]).toFixed(2)}</TableRowColumn>);
       }else{
         rowElements.push(<TableRowColumn key={keyid++}>{row[element]}</TableRowColumn>);
       }

     }
     rowElements.push(<TableRowColumn key={keyid++}><Notesinput /></TableRowColumn>);
     return rowElements;
  }
  renderRows(){
    let retArray = [];
    if(this.state.data.transactions){
      let i = 0;
      for(let item in this.state.data.transactions){
        this.state.data.transactions[item].map( (row) => {
          retArray.push(
            <TableRow key={i++}>
              {this.prepareRow(item, row)} // in this case item is date
            </TableRow>
          )
        });
      }
    }
    console.log('retArray', retArray);
    return retArray;
  }
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Notes</TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody>
              {this.renderRows()}
            </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}


export default Statement;
