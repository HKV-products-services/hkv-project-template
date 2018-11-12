import { combineReducers } from 'redux'

import geoJson from './geojson'
import wms from './wms'

export default combineReducers({
  geoJson,
  wms
})