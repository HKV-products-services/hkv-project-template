let setBaselayers
let createMap
let addLayer

if(typeof window !== 'undefined') {
  setBaselayers = require('./baselayers').setBaselayers
  createMap = require('./createMap').createMap
  addLayer = require('./overlays').default
}

export {
  setBaselayers,
  createMap,
  addLayer
}