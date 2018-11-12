import { combineReducers } from 'redux'

import * as actions from '../actions'
import mapConfig from '../../config/map-config'

const { SET_BASELAYERS, SET_GEOJSON, SET_MAP_DEFAULT, SET_WMS } = actions
let geojson, wms

if(mapConfig.overlays && mapConfig.overlays.length) {
  geojson = mapConfig.overlays.filter(overlay => overlay.type === 'geojson')
  wms = mapConfig.overlays.filter(overlay => overlay.type === 'wms')
} else {
  geojson = []
  wms = []
}

const defaults = {
  center: mapConfig.center,
  zoom: mapConfig.zoom
}

function baseLayers(state=mapConfig.baselayers, action) {
  switch(action.type) {
    case SET_BASELAYERS:
      return action.layers

    default:
      return state
  }
}

function geoJsonLayers(state=geojson, action) {
  switch(action.type) {
    case SET_GEOJSON:
      return action.layers

    default:
      return state
  }
}

function mapDefaults(state=defaults, action) {
  switch(action.type) {
    case SET_MAP_DEFAULT:
      return { ...state, [ action.property ]: action.value }
    default:
      return state
  }
}

function wmsLayers(state=wms, action) {
  switch(action.type) {
    case SET_WMS:
      return action.layers

    default:
      return state
  }
}

export default combineReducers({
  baseLayers,
  geoJsonLayers,
  mapDefaults,
  wmsLayers
})