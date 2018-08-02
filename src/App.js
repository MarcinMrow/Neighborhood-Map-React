import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import $ from 'jquery';
import { Fetch } from 'react-request';
// import logo from './logo.svg';
import './App.css';
import Cafe from './components/cafe';
// import Marker from './components/marker';


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/Map';
// import AsideMenu from "./components/AsideMenu";
import FilteredList from "./components/FilteredList";
// import List from "./components/List";
import superagent from 'superagent'

export class App extends Component {

  state = {
    // center: {},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedCafe: null, //
    search: "",
    locations: [],
    venues: []
  };

  componentDidMount() {
    console.log('componentDidMount')
      const url = "https://api.foursquare.com/v2/venues/search?ll=51.1079,17.0385&intent=browser&radius=10000&query=cafe&client_id=BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U&client_secret=HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH&v=20180323"
      superagent
      .get(url)
      .query(null)
      .set('Accept', 'text/json')
      .end((error, response) => {
        const venues = response.body.response.venues
        // console.log(JSON.stringify(venues))
        this.setState({
          venues: venues
        })
      })
  }
 
  render() {
    const location = {
      lat: 51.1079,
      lng: 17.0385
    }

    const markers = [
      {
        location: {
          lat: 51.1079,
          lng: 17.0385
        }
      }
    ]

    /*let center = {
      lat: 51.1079,
      lng: 17.0385
    }

    if (this.state.selectedCafe) {
      center = {
        lat: this.state.selectedCafe.lat,
        lng: this.state.selectedCafe.lng
      }
    }*/

    /*
    let mylocations;
    let locationsValue = false

    if (this.state.cafes !== undefined 
      && this.state.cafes !== null
      && this.state.cafes.length > 0) { 
        mylocations = this.state.cafes
        locationsValue = true
      }*/

    // const cafes = this.state;

    return (
      
      <div className="app">
        <div className="main">
        
        {/* 
          (locationsValue) && 
          (<MapContainer
            // markers={this.state.markers}
            actualMarker={this.state.actualMarker}
            locations={mylocations}
          />)*/
        } 

        {/*add slider nav*/}
        <nav className="menu-container">
          <a href="#" className="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
            </svg>
          </a>
            <div className="menu-slide">
              <ul className="menu-list">
                <li className="menu-item">
                  <FilteredList 
                    // allCafes={this.state.cafes}
                    // filterCafes={this.state.filterCafes}
                    handleSearch={this.state.handleSearch}
                  />
                </li>
              </ul>
            </div>
        </nav>
     
        <MapContainer
          center={location}
          markers={this.state.venues}
          actualMarker={this.state.actualMarker}
          //locations={this.state.cafes}
          
        />

        </div>
      </div>
 
    );
  }
}
 
export default App;