import { combineReducers } from 'redux'

import * as actions from '../actions'

const { ADD_GEOJSON_LAYER, HIDE_LAYER, REMOVE_GEOJSON_LAYER, SHOW_LAYER } = actions

function layers(state=[], action) {
  switch(action.type) {

    case ADD_GEOJSON_LAYER:
      return [ ...state, action.layer ]

    case HIDE_LAYER:
      return state.map(layer => {
        if(layer.key === action.layerKey) {
          layer.active = false
        }
        return layer
      })

    case REMOVE_GEOJSON_LAYER:
      return state.filter(layer => layer.key !== action.layer.key)

    case SHOW_LAYER:
      return state.map(layer => {
        if(layer.key === action.layerKey) {
          layer.active = true
        }
        return layer
      })

    default:
      return state
  }
}

export default combineReducers({
  layers
})