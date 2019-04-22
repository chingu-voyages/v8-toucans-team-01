import React, { Component } from 'react';
import Title from "../title/Title";
import "./Map.css"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
	state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
    	<section><div className="text-center">
         <Title name="Our Ideal Office Location" />
      </div>
<div className="text-center"
 style={{ height: 500}}>
      	<Map style={{height: 500}}
        google={this.props.google}
        zoom={17}
        initialCenter={{
         lat: 48.8584,
         lng: 2.294694
        }}
      ><Marker
          onClick={this.onMarkerClick}
          name={'The Eiffel Tower'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map></div></section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDBiU8O294WXpBql_lLoQjNxd4sd9s911g'
})(MapContainer);
