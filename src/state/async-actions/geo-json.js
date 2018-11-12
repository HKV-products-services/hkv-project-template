import * as actions from '../actions'
import { addLayer } from '../../lib/mapUtils'
import { fetchGeoJson } from '../../lib/fetch-geojson'

export function add(map, layer) {
  return async function(dispatch) {
    const layers = await fetchGeoJson(layer.url)
    const geoJsonLayers = layers.features
      .map(feature => ({
        ...layer,
        groupId: layer.key,
        key: `${layer.key}-${feature.id}`,
        data: feature
      }))

    geoJsonLayers.forEach(layer => {
      if(map.hasLayerObject(layer)) return

      addLayer(map, layer)
      dispatch({ type: actions.ADD_GEOJSON_LAYER, layer })
    })

    return geoJsonLayers
  }
}

export function remove(map, layer) {
  return function(dispatch) {
    console.log('Remove a geojson layer')
  }
}

export function setStyle(map, layerKey, style) {
  return function(dispatch) {
    const layerObject = map.getLayerObject(layerKey)
    if(layerObject) {
      layerObject.setStyle(style)
    }
  }
}