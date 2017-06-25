/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var Navigation = require('./Nav.jsx');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

var Main = React.createClass({
    getInitialState: function(){
      var token = localStorage.getItem('token');
      var userid = localStorage.getItem('userid');
      var authorized = false;
      if(token){
          authorized = true;
      }
      return(
        {
            authorized: authorized,
            authorization: token,
            userid: userid
        }
      )
    },
    setAuthorizedState: function(data){
        this.setState(data, function(){
            browserHistory.push("/closeout");
        });
    },
    render: function() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child,
                { authorized: this.state.authorized, setAuthorizedState: this.setAuthorizedState, authorization: this.state.authorization, userid: this.state.userid}
            )
        );
        return (
            <div>
                <Navigation authorized={this.state.authorized} setAuthorizedState={this.setAuthorizedState}  />
                <div className="row">
                    <div className="columns medium-12 large-12 small-centered">
                        {childrenWithProps}
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Main;

/*
 {this.props.children}
 */