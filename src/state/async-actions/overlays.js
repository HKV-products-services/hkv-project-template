import * as actions from '../actions'
import * as geojson from './geo-json'
import * as wms from './wms'

export function addOverlay(map, layer) {
  return async function(dispatch) {
    if(layer.type === 'geojson') {
      return dispatch(geojson.add(map, layer))
    } else if(layer.type === 'wms') {
      return dispatch(wms.add(map, layer))
    }
  }
}

export function addOverlayHandler(map, layerKey, { event, callback }) {
  return function(dispatch) {
    const layer = map.getLayerObject(layerKey)
    if(layer) {
      layer.on(event, callback)
    }
  }
}

export function removeOverlay(map, layer) {
  return function(dispatch) {
    const mapLayer = map.getLayerObject(layer.key)
    if(mapLayer) {
      map.removeLayer(mapLayer)
      const action = layer.type === 'geojson'
        ? 'REMOVE_GEOJSON_LAYER'
        : 'REMOVE_WMS_LAYER'

      dispatch({ type: action, layer })
    }
  }
}

export function removeOverlayHandler(map, layerKey, { event, callback }) {
  return function(dispatch) {
    const layer = map.getLayerObject(layerKey)

    if(layer) {
      layer.off(event, callback)
    }
  }
}

export function showLayer(map, layerKey) {
  return function(dispatch) {
    const layer = map.getLayerObject(layerKey)

    if(layer) {
      map.addLayer(layer)
      dispatch({ type: actions.SHOW_LAYER, layerKey })
    }
  }
}

export function hideLayer(map, layerKey) {
  return function(dispatch) {
    const layer = map.getLayerObject(layerKey)

    if(layer) {
      map.removeLayer(layer)
      dispatch({ type: actions.HIDE_LAYER, layerKey })
    }
  }
}

export function zoomToOverlay(map, layerKey) {
  return function(dispatch) {
    const layer = map.getLayerObject(layerKey)
    map.fitBounds(layer.getBounds())
  }
}
