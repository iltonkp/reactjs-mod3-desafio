import React, { Component } from 'react';

import MapGl from 'react-map-gl';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -8.027993,
      longitude: -34.875826,
      zoom: 14,
    },
  };

  render() {
    const { viewport } = this.state;

    return (
      <MapGl
        {...viewport}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        onViewportChange={vPort => this.setState({ viewport: vPort })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWx0b25rcCIsImEiOiJjanc1OGZyd3ExbjJmNDBwc3gxYzdrNDZvIn0.Vo1lSJqSOWzyi8KUMeKFeg"
      />
    );
  }
}

export default Main;
