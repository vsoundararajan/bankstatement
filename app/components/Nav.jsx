/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('Not yet wired up');
    },
    signout: function(){
        //this.props.setAuthorizedState(false);
        localStorage.removeItem('token');
        this.props.setAuthorizedState({authorized: false});
        browserHistory.push("signin");
    },
    render: function() {
     if(this.props.authorized){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            <img height="10" src="./images/icon.png"/>
                        </li>
                        <li>
                            <IndexLink to="/closeout" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Closeout</IndexLink>
                        </li>
                        <li>
                            <Link to="/b2bentry" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>B2BEntry</Link>
                        </li>
                        <li>
                            <Link to="/query" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Query</Link>
                        </li>

                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <button className="button danger" onClick={this.signout}>Signout</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
     }else{
         return(
             <div className="top-bar">
                 <div className="top-bar-left">
                     <ul className="menu">
                         <li className="menu-text">
                             <img height="10" src="./images/icon.png"/>
                         </li>
                         <li>
                             <IndexLink to="/signin" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Signin</IndexLink>
                         </li>
                     </ul>
                 </div>

             </div>
         );
     }
    }
});


module.exports = Navigation;


