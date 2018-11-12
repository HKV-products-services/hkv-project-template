import * as actions from '../actions'
import { addLayer } from '../../lib/mapUtils'

export function add(map, layer) {
  return function(dispatch) {
    if(map.hasLayerObject(layer)) return

    addLayer(map, layer)
    dispatch({ type: actions.ADD_WMS_LAYER, layer })
    return layer
  }
}

export function remove() {
  return function(dispatch) {
    console.log('Remove the WMS layer')
  }
}