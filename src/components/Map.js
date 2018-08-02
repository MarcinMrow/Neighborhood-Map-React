import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs} from 'google-maps-react';

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    // selectedCafe: null //
    //markers: []
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

    const { cafe, /*location,*/ locations, actualMarker } = this.props;

    console.log(locations);

    const style = {
      width: '100%',
      height: '100%'
    }

    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }  
      }
      return <Marker key={i} {...marker} />
    })



    // check this
    /*const markers = this.props.locations.map( location => <Marker 
      key={location.id}
      cafe={cafe}
      location={{lat: location.lat, lng: location.lng }}
      />)*/
/* 
    let markers = [];
    //let mylocations;
    let locationsValue = false
    if (locations !== undefined 
      && locations !== null
      && locations.length > 0) {
      locationsValue = true
    }
      //mylocations = this.state.cafes
*/      
/*
    if (locationsValue) {
      let marker = {};
      const markers = this.props.locations.map((location) => {
        marker = {  
          position: {lat: location.lat, lng: location.lng},
          key: location.id,
          name: location.name,
          lat: location.lat,
          lng: location.lng,
          address: location.address,
        }
        return markers.push(marker) 
      })
    }
*/
/*
    if (locationsValue) {
      let marker = {};
      const markers = this.props.locations.map((location) => 
        <Marker
          
          position={{lat: location.lat, lng: location.lng}}
            key={location.id}
            name={location.name}
            lat={location.lat}
            lng={location.lng}
            address={location.address}
            onClick={this.onMarkerClick}      
      />)
    }
*/
    return (
      <Map 
        // cafe={this.props.cafe}
        google={this.props.google} 
        zoom={14}
        initialCenter={{
          lat: 51.1079,
          lng: 17.0385
        }}
        onClick={this.onMapClicked}
        style={style}
      >
        {markers}
        {/*<Marker 
          onClick={this.onMarkerClick}
          name={'Current location'}
        />*/}
  
        {/* display markers*/}
        {/*locations.map(location => 
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
        )*/}
        
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
        
       

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZgCuxKRu85jYhwg4H9JNCYKl7URtbU8w')
})(MapContainer)
