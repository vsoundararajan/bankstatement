import React from 'react';

class Balance extends React.Component {
  constructor(props){
    super(props);
    this.state =  props;
  }

  getToday(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    return today = dd+'/'+mm+'/'+yyyy;
  }
  render(){
    return(
       <h3 style={{textAlign: 'left'}}>Balance Summary: ${this.state.totbalance.toFixed(2)} (available as of {this.getToday()})</h3>
    );
  }
}


export default Balance;
