import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL from 'react-map-gl';


MAPBOX_TOKEN.accessToken = 'pk.eyJ1IjoidGdlcnRpbiIsImEiOiJYTW5sTVhRIn0.X4B5APkxkWVaiSg3KqMCaQ';

class InternalMap extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
        lng: 5,
        lat: 34,
        width: 400,
        height: 400,
        zoom: 1.5
    };
}
  

  componentDidMount() {
   const { lng, lat, zoom } = this.state;

   const map = new ReactMapGL.Map({
     container: this.mapContainer,
     style: 'mapbox://styles/mapbox/streets-v9',
     center: [lng, lat],
     zoom
   });


 }

  


  render() {

    const {lng, lat, zoom} = this.state;

    return (
      <div>
        <div>
          onViewportChange={(viewport) => this.setState({viewport})}
          width="100%"
          height="100%"
        </div>
          
          <div ref={el => this.mapContainer = el} />
      </div>
    );

  }

}


export default InternalMap;
