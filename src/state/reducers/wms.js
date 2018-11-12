import { combineReducers } from 'redux'

import * as actions from '../actions'

const { ADD_WMS_LAYER, ADD_WMS_LAYERS } = actions
const REMOVE_WMS_LAYER = 'REMOVE_WMS_LAYER'

function layers(state=[], action) {
  switch(action.type) {

    case ADD_WMS_LAYER:
      return [ ...state, action.layer ]

    case ADD_WMS_LAYERS:
      return [ ...state, ...action.layers ]

    case REMOVE_WMS_LAYER:
      return state.filter(layer => layer.key !== action.layer.key)

    default:
      return state
  }
}

export default combineReducers({
  layers
})