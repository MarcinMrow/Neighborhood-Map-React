import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs} from 'google-maps-react';

// ADDING PHOTOS
var foursquare = require('react-foursquare')({
  clientID: 'BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U',
  clientSecret: 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH'
});

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedCafe: null, //
    // markers: []
    // venue: {}

    // ADDING PHOTOS
    items: [],
    query: '',
    near: 'Wroclaw, Poland',
    // cafes: [],
    // venues: [],
    //
    //filteredMarkers: [],
    map: {},

  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // ADDING PHOTOS
  componentDidMount() {
    this.fetchVenues();
  }

  // ADDING PHOTOS
  fetchVenues = () => {
    var params = {
      "near": this.state.near,
      "intent": 'browse',
      "ll": "51.1079, 17.0385",
      "query": 'Cafe'
    };
    foursquare.venues.recommendations(params)
      .then(res => {
        console.log(res)
        this.setState({ 
          items: res.response.group.results, 
        });
      })
  }

  /*
  setQuery = event => {
      this.setState({ query: event.target.value });
  }
  setLocation = event => {
      this.setState({ near: event.target.value });
  }
  */
/*
  // Add animation
  toggleBounce = () => {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.DROP);
    }
  }
*/



  render() {
    
    


    const { cafe, location, locations, actualMarker, filterLocations, google, map, onMarkerClick, activeMarker } = this.props;

    const style = {
      width: '100%',
      height: '100%'
    }

    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }

    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        map: map,
        //icon: icons,
       
      
        // animation: this.props.google.maps.Animation.DROP //
      }

      return <Marker
        className={classes}
        aria-label="Marker of the cafe" //
        key={i} 
        {...marker} 
        name={venue.name}
        address={venue.location.address}
        onClick={this.onMarkerClick}
        selectedPlace={venue === this.state.selectedPlace}
        // animation={this.props.google.maps.Animation.DROP} //
        selected={venue.item === this.state.selectedCafe} //
        id={venue.id}
  
        />
      });

    return (
      <div className="map-container" role="application">
        <Map 
          aria-label="location"  //
          role="application"
          // cafe={this.props.cafe}
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

            {/*add photos - array ? */}
            {/* 
              this.state.items.map(item => {
                if (item.photo) {
                  let venue_url = "https://foursquare.com/v/" + item.venue.id;
                  let photo_url = item.photo.prefix + '300x300' + item.photo.suffix;
                  return (
                    <div key={item.venue.id}>
                      <a href={venue_url}>
                        <img src={photo_url} alt={this.state.selectedPlace.name} />
                      </a>  
                      <div>
                        <h2>{this.state.selectedPlace.name}</h2>
                        <h3>Address: </h3>
                          <p>{this.state.selectedPlace.address}</p>
                      </div>
                    </div>
                    )
                }
              })
            */}

          </InfoWindow>
        
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZgCuxKRu85jYhwg4H9JNCYKl7URtbU8w')
})(MapContainer)
