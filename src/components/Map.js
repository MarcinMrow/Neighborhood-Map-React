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


  }


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

  

  render() {  
    const { google, map } = this.props;

    const style = {
      width: '100%',
      height: '100%'
    }
/*
    // 
    let center = {
      lat: 51.1079,
      lng: 17.0385
    }

    if (this.state.selectedCafe) {
      center = {
        lat: this.state.selectedCafe.lat,
        lng: this.state.selectedCafe.lng
      }
    }
*/

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
        //animation: google.maps.Animation.DROP,
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
        />
      } 
    });

    return (
      <div className="map-container" role="application">
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

            {/*add photos - array ? */}
            {/*
              this.props.items.forEach(item => {
                if (item.photo) {
                  let venue_url = "https://foursquare.com/v/" + item.venue.id;
                  let photo_url = item.photo.prefix + '300x300' + item.photo.suffix;
                  return (
                  <div>
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
