import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'

import asyncActions from '../state/async-actions'

import MapLayout from '../components/MapLayout'

const HKVMap = dynamic(import('../components/HKVMap'), {
  ssr: false
})

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  // Called when the map is loaded
  // mapObject contains a refrence to the map instance
  setMap = (mapObject) => {
    const { geoJsonLayers, wmsLayers } = this.props.mapConfig
    const layers = [ ...geoJsonLayers, ...wmsLayers ]

    this.mapObject = mapObject

    layers
      .forEach(layer => {
        this.props.dispatch(asyncActions.addOverlay(this.mapObject, layer))
      })
  }

  render() {
    const { mapConfig } = this.props
    return (
      <MapLayout>
        <HKVMap
          setMap={ this.setMap }
          mapConfig={ { ...mapConfig } }
        />
      </MapLayout>
    )
  }
}

export default connect(state => state)(Page)