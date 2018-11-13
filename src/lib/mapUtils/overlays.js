import L from 'leaflet'

export function addGeojson(map, layer) {
  const mapLayer = L.geoJSON(layer.data, {
    style: layer.style,
    pointToLayer: (_, latlng) => {
      switch(layer.style.type) {
        case 'circle':
          return L.circleMarker(latlng)
        default:
          return L.marker(latlng)
      }

    }
  })

  map.addLayerObject(layer.key, mapLayer)
  if (layer.active) {
    mapLayer.addTo(map)
  }
}

export function addWms(map, layer) {
  const mapLayer = L.tileLayer.wms(layer.url, {
    layers: `${layer.workspace}:${layer.layer}`,
    styles: layer.style,
    format: 'image/png',
    transparent: true,
    opacity: 1
  })

  map.addLayerObject(layer.key, mapLayer)

  if (layer.active) {
    mapLayer.addTo(map)
  }
}

export default function(map, layer) {
  if(map.hasLayerObject(layer)) return

  switch(layer.type) {

    case 'geojson':
      return addGeojson(map, layer)

    case 'wms':
      return addWms(map, layer)

    default:
      return undefined
  }
}