import L from 'leaflet'

export function setBaselayers(map, layers) {
  layers.forEach(layer => {
    L.tileLayer(layer.url, {
      attribution: layer.attribution
    }).addTo(map)
  })
}