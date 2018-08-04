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

//define foursquare variables to get photos
const VENUE_ID = '4e9dd3a961af4feab6571edd'; // example
const clientID ='BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U';
const clientSecret = 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH';
const version = '20180323';


export class App extends Component {

  state = {
    // center: {},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedCafe: null, //
    search: "",
    // locations: [],
    venues: []
  }

  

  componentDidMount() {
    console.log('componentDidMount')
      const url = "https://api.foursquare.com/v2/venues/search?ll=51.1079,17.0385&intent=browser&radius=10000&query=cafe&client_id=BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U&client_secret=HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH&v=20180323"
      // const url = `https://api.foursquare.com/v2/venues/${VENUE_ID}/photos?limit=1&client_id=${clientID}&client_secret=${clientSecret}&v=${version}`;
      superagent
      .get(url)
      .query(null)
      .set('Accept', 'text/json')
      .end((error, response) => {
        const venues = response.body.response.venues
        // console.log(JSON.stringify(venues))
        this.setState({
          venues: venues,
          // selectedPlace: venues
        })
      })
  }
  /*
  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }
  */
 
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

    //const photo = `${photo.prefix}width300${photo.suffix}`
    /*
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
    return (
      
      <div className="app">
        <div className="main">

        {/*add slider nav*/}
        <nav className="menu-container">
          <a href="aside" className="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
            </svg>
          </a>
            <div className="menu-slide">
              <ul className="menu-list">
                <li className="menu-item">
                  <FilteredList 
                    //handleSearch={this.state.handleSearch}
                    //selectCafe={this.selectCafe}
                  />
                </li>
              </ul>
            </div>
        </nav>
     
        <MapContainer
          center={location}
          markers={this.state.venues}
          actualMarker={this.state.actualMarker}
          selectedPlace={this.state.selectedPlace}
          //showingInfoWindow={this.state.showingInfoWindow}
        />

        </div>
      </div>
 
    );
  }
}
 
export default App;