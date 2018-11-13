import { combineReducers } from "redux";
import vegaSpecs from '../../config/vegaSpecs'

import * as actions from '../actions'

const { SET_VEGA_SPECIFICATION } = actions;

function specs(state = vegaSpecs, action) {  
  switch (action.type) {
    case SET_VEGA_SPECIFICATION:
      return action.specification 

    default:
      return state;
  }
}

export default combineReducers({
  specs
});
