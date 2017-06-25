/**
 * Created by soundararajanvenkatasubramanian on 11/4/16.
 */
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var styles = {
    "h3color" : "#6495EA"
}

var  Main = (props) =>{

    return (
        <div>
        <h1 className="text-center" style={{color: styles.h3color}}>Home page</h1>
            <h4></h4>
        </div>
    );

};

export default connect(
    (state) => {
        return {
            beginningtil: state.beginningtil
        }
    }
)(Main)

