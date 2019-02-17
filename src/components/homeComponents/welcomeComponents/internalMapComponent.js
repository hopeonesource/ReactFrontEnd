<<<<<<< Updated upstream

import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
const TOKEN = 'pk.eyJ1IjoidGdlcnRpbiIsImEiOiJYTW5sTVhRIn0.X4B5APkxkWVaiSg3KqMCaQ';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class InternalMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 2.8,
            bearing: 0,
            pitch: 0,
            width: 1200,
            height: 500,
          }
        };
      }

    render() {
        const {viewport} = this.state;

        return (
              <MapGL style={{textAlign: 'left'}}
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={TOKEN}>
                <div className="nav" style={navStyle}>
                  <NavigationControl/>
                </div>
              </MapGL>
            );
    }

}
=======
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoidGdlcnRpbiIsImEiOiJYTW5sTVhRIn0.X4B5APkxkWVaiSg3KqMCaQ'

class Application extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount () {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render () {
    const { lng, lat, zoom } = this.state
    const style = {margin: 'auto', textAlign: 'left', width: '1200px', height: '400px'}
    return (
      <div>
        <div>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
          <div style={style} ref={el => this.mapContainer = el} />


        </div>
      </div>
    )
  }
}

export default Application
>>>>>>> Stashed changes
