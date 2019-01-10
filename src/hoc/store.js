import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent, reducers) {
  class decoreWithStore extends Component {
    componentWillMount() {
      // eslint-disable-next-line
      // console.log('Will Mount HOC', reducers);
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    // eslint-disable-next-line
    if (reducers.length === 0) console.error("There' no reducer here, fix it!", reducers);

    const reducerMap = {};

    reducers.forEach(reducer => {
      reducerMap[reducer] = state[reducer];
    });

    return reducerMap;
  }

  return connect(mapStateToProps)(decoreWithStore);
}
