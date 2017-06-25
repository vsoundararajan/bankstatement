/**
 * Created by soundararajanvenkatasubramanian on 11/20/16.
 */
var React = require('react');
var axios = require('axios');

const ROOT_URL = "https://mycloseoutserver.herokuapp.com";

var SIGNIN_URL = ROOT_URL + "/signin";

var SignIn = React.createClass({
    signin:  function(){

      var payload = {email: this.refs.emailfield.value.trim(), password: this.refs.passwordfield.value.trim() };
        axios.post(SIGNIN_URL, payload )
            .then( response => {
                this.props.setAuthorizedState({authorized: true, authorization: response.data.token, userid: response.data.userid});
                // If request is good...
                // - Update state to indicate user is authenticated
                // - Save the JWT token
                console.log("response.data: ", response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userid', response.data.userid);
                // - redirect to the routes '/closeout'

            }).catch( (err) => {
                 alert("Bad Credentials");
               });

    },
    render: function() {
        return(
            <div>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Emaill</label>
                            <input type="text" placeholder="Enter your email" ref="emailfield"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Password</label>
                            <input type="password" ref="passwordfield"></input>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <button className="button success" onClick={this.signin}>Signin</button>
                        </div>
                    </div>
            </div>
        );
    }
});


module.exports = SignIn;

/*

 console.log(payload);
 axios.post(SIGNIN_URL, payload).then( function (response, reject){
 this.props.setAuthorizedState({authorized: true});
 console.log(response);
 debugger;
 }).catch( function(err){
 res.status(422).send(err);
 });
 */