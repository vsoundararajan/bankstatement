var redux = require('redux');
var {closeoutReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        beginningtil: closeoutReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

