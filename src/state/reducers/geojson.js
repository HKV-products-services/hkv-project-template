import { combineReducers } from 'redux'

import * as actions from '../actions'

const { ADD_GEOJSON_LAYER, REMOVE_GEOJSON_LAYER } = actions

function layers(state=[], action) {
  switch(action.type) {

    case ADD_GEOJSON_LAYER:
      return [ ...state, action.layer ]

    case REMOVE_GEOJSON_LAYER:
      return state.filter(layer => layer.key !== action.layer.key)

    default:
      return state
  }
}

export default combineReducers({
  layers
})