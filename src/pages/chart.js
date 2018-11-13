import dynamic from "next/dynamic"
import React from "react"
import { connect } from "react-redux"

import asyncActions from '../state/async-actions'

const HKVVega = dynamic(import("../components/HKVVega"), {
  ssr: false
});

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  // Called when the chart is loaded
  // viewObject contains a refrence to the chart instance
  setView = (viewObject) => {

    // ViewObject reference
    this.viewObject = viewObject;

    // Change data for the chart(example)
    // this.props.dispatch(
    //   getVegaData(
    //     this.viewObject,
    //     "source",
    //     "https://dmws.hkvservices.nl/hydra-ws/entry.asmx/Call?function=hkvservices.haas.GetBelasting&parameters={database:%27HR_Meren_HaaS%27,traject:%278-4%27,randvoorwaardeId:0,bertype:0,zichtjaar:2015,profieltype:%271-op-3%20profiel%27,overslagdebiet:5,normtype:0}"
    //   )
    // )

    // Listener to a signal handler of the chart
    this.props.dispatch(
      asyncActions.addSignalHandler(
        this.viewObject,
        {
          signalName: "tooltip", callback: this.tooltip
        })
    )
  }

  tooltip = (name, value) => {
    console.log("name: ", name)
    console.log("value: ", value)
  }

  render() {
    const { vega } = this.props
    return (
      <HKVVega
        ref={this.hkvVegaRef}
        setView={this.setView}
        specs={vega.specs.barChart} />
    )
  }
}

export default connect(state => state)(Page)