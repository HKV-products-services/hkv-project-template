import React from 'react'

import { addLayer, createMap, setBaselayers } from '../../lib/mapUtils'

import './index.css'

class HKVMap extends React.Component {

  constructor(props) {
    super(props)
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    const { mapConfig } = this.props
    const config = { ...mapConfig.mapDefaults, baseLayers: mapConfig.baseLayers }

    createMap(this.mapRef.current, config, this.props.setMap)
  }

  render() {
    return (
      <div ref={ this.mapRef }></div>
    )
  }
}

export default HKVMap