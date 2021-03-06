import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.MarkersArr = [];
  }

  // Open InfoWindow when marker is clicked
  onMarkerClick = (props, marker, e) => 
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  
  onMapClicked = (props) => {
    if (this.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // Google Maps API > handling error > visible information for the user 
  gm_authFailure() {
    window.alert("Oh no! It's a Google Maps error! Please try again or come back later.")
  }
  
  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  setMarkerRef = element => {
    this.MarkersArr.push(element);
  };

  render() {  
    const { google, map } = this.props;

    const style = {
      width: '100%',
      height: '100%'
    }

    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }

    /* Create the marker */
    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        map: map,
        animation: venue.selected ? google.maps.Animation.BOUNCE : null,
        // draggable: false 
      }

    if (venue.isVisible === undefined || venue.isVisible) {
      //console.log('venue is visible');
      return <Marker
        className={classes}
        aria-label="Marker of the cafe"
        key={i} 
        {...marker}
        name={venue.name}
        address={venue.location.address}
        onClick={this.onMarkerClick}
        selected={venue.id === this.props.selectedCafe}
        ref={this.setMarkerRef}
        />
      } else {
        return false;
      }
    });

    return (
      <div>
        
        <Map 
          aria-label="location" 
          role="application" 
          cafe={this.props.cafe}
          google={this.props.google} 
          zoom={13}
          initialCenter={{
            lat: 51.1079,
            lng: 17.0385
          }}
          onClick={this.onMapClicked}
          style={style} 
        >

          {/*display markers on the map*/}
          {markers}

          <InfoWindow
            aria-label="Information about cafe"
            onOpen={this.windowHasOpened} 
            onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
          
            <div className="info-window" tabIndex={0} aria-label="Info window">
              <h2>{this.state.selectedPlace.name}</h2>
              <h3>Address: </h3>
                <p>{this.state.selectedPlace.address}</p>
            </div>

          </InfoWindow>
        
        </Map>
  
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZgCuxKRu85jYhwg4H9JNCYKl7URtbU8w')
})(MapContainer)
