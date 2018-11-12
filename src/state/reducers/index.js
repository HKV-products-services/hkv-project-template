import { combineReducers } from 'redux'

import mapConfig from './map-config'
import overlays from './overlays'

export default combineReducers({
  mapConfig,
  overlays,
})