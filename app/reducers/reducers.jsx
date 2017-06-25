var moment = require('moment');
var uuid = require('node-uuid');
var _ = require('lodash');


export var closeoutReducer = (state = {}, action) => {
  var newState =  _.cloneDeep(state);
  switch (action.type) {
      case 'SET_BEGINNING_TILL':
          newState.beginningtil = action.beginningtil || 0.00;
          return newState;
      default:
          return state;
  }
};
