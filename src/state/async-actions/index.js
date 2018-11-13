import * as geojson from './geo-json'
import * as overlays from './overlays'
import * as wms from './wms'
import * as vega from './vega'

export default {
  ...overlays,
  geojson,
  wms,
  ...vega
}