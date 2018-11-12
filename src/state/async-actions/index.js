import * as geojson from './geo-json'
import * as overlays from './overlays'
import * as wms from './wms'

export default {
  ...overlays,
  geojson,
  wms
}