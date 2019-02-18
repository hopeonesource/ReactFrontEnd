
import React, {Component} from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';
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

    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    render() {
        const {viewport} = this.state;

        return (
              <ReactMapGL style={{textAlign: 'left'}}
                {...viewport}
                onViewportChange={this._updateViewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={TOKEN}>

                <div style={{position: 'absolute', right: 0}}>
                  <NavigationControl onViewportChange={this._updateViewport} />
                </div>

              </ReactMapGL>
            );
    }

}
