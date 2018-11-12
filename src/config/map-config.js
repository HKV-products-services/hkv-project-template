import baselayerConfig from './baselayer-config'
import mapDefaults from './map-defaults'
import overlaysConfig from './overlays-config'

export default {
  ...mapDefaults,
  ...baselayerConfig,
  ...overlaysConfig
}