import React from 'react';
import ReactDOM from 'react-dom';
import Statement from './components/Statement2';
import Balance from './components/Balance';
import {Provider} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalBalance: 5725,
      transactions: {
        '8/22': [{
          name: 'Xfinity',
          amount: 89.99
        }, {
          name: 'Check #1235',
            amount: 894.99
        }],
        '8/21': [{
          name: 'Mike & Ike Bakery',
          amount: 30
        }, {
          name: 'Check #1234',
            amount: 1050
        }],

        '8/15': [{
          name: 'Dry Cleaning',
          amount: 25
        }]
      }
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'left'}}>Checking account detailed activity:</h2>
        <Balance totbalance={this.state.totalBalance} />
        <Statement data={this.state}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
