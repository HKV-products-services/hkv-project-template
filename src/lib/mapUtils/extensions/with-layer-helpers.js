export function withLayerHelpers(map) {
  map.__layerObjects = {}

  map.addLayerObject = (layerKey, layer) => {
    map.__layerObjects[layerKey] = layer
  }

  map.hasLayerObject = (layer) => {
    return map.__layerObjects[layer.key]
  }

  map.getLayerObject = (layerKey) => {
    return map.__layerObjects[layerKey]
  }

  map.layerObjectKeys = () => {
    return Object.keys(map.__layerObjects)
  }

  return map
}