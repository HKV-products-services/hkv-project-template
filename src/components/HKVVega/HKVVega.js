import React from "react";
import { createVega } from "../../lib/vegaUtils";

import "./index.css";

class HKVVega extends React.Component {
  constructor(props) {
    super(props);
    this.vegaRef = React.createRef();
  }

  componentDidMount() {
    const { specs, setView } = this.props    
    createVega(this.vegaRef.current, specs, setView)
  }

  render() {
    return <div ref={this.vegaRef} />;
  }
}

export default HKVVega;
