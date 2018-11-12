import L from 'leaflet'

import { setBaselayers } from './baselayers'
import { withLayerHelpers } from './extensions/with-layer-helpers'

export function createMap(element, config, loadCallback) {
  const map = L.map(element)

  withLayerHelpers(map)

  map._layerKeys = []
  map.on('load', (event) => {
    setBaselayers(map, config.baseLayers)
    loadCallback(event.target)
  })
  map.setView(config.center, config.zoom)

  return map
}