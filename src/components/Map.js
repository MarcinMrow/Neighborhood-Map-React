import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs} from 'google-maps-react';

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    // selectedCafe: null //
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    const { cafe, locations, actualMarker } = this.props;

    console.log(locations);

    const style = {
      width: '100%',
      height: '100%'
    }

    // check this
    const markers = this.props.locations.map( location => <Marker 
      key={location.id}
      cafe={cafe}
      location={{lat: location.lat, lng: location.lng }}
      />)

    const handleSearch = this.props.handleSearch;


    return (
      <Map 
        cafe={this.props.cafe}
        google={this.props.google} 
        zoom={14}
        initialCenter={{
          lat: 51.1079,
          lng: 17.0385
        }}
        onClick={this.onMapClicked}
        style={style}
        handleSearch={this.state.handleSearch} //
      >
        
        {/* display markers*/}
        {locations.map(location =>
          <Marker 
            position={{lat: location.lat, lng: location.lng}}
            key={location.id}
            name={location.name}
            lat={location.lat}
            lng={location.lng}
            address={location.address}
            onClick={this.onMarkerClick}
            selectedPlace={location === this.state.selectedPlace} //
          />
        )}
        
        <InfoWindow
          onOpen={this.windowHasOpened} 
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h2>{this.state.selectedPlace.address}</h2>
            </div>
        </InfoWindow>
        
        {markers}

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZgCuxKRu85jYhwg4H9JNCYKl7URtbU8w')
})(MapContainer)
