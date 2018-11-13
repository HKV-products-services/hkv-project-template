import { combineReducers } from 'redux'

import mapConfig from './map-config'
import overlays from './overlays'
import vega from './vega'

export default combineReducers({
  mapConfig,
  overlays,
  vega
})