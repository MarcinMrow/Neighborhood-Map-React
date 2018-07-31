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
import AsideMenu from "./components/AsideMenu";


export class App extends Component {
  
  //constructor(props) {
  //  super(props);
  //  this.

  state = {
    // center: {},
    showingInfoWindow: false,
    activeMarker: {},
    // activeMarker: [],
    selectedPlace: {},
    cafes: [], //
    allCafes: [], //
    selectedCafe: null, //
    // actualMarker: '',
    // value: '',
    name: [],
    displayCafes: [], //
  };
  //}


  // test
  componentDidMount() {
    // const url = "https://api.foursquare.com/v2/venues/"
    const url = "https://raw.githubusercontent.com/MarcinMrow/db-sample/3b159dee401749a483be867444a18dcef0e5bfc4/locations.json"
    fetch(url) // ajax
      .then(response => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          cafes: data, //
          allCafes: data,
          selectedPlace: data, //
        });
      })
  }

  render() {

    let mylocations;
    let locationsValue = false

    if (this.state.allCafes !== undefined 
      && this.state.allCafes !== null
      && this.state.allCafes.length > 0) { 
        mylocations = this.state.allCafes
        locationsValue = true
      }

    const cafes = this.state;
    const updateList = this.state;

    // console.log(this.state);
    
    return (
      
      <div className="app">
        
        { 
          <AsideMenu             
            // cafes={this.state.cafes}
            // locations={this.state.locations}
            allCafes={this.state.allCafes}

            //title={this.state.title}
            //cafe={this.state.cafe}
            //mylocations={this.state.mylocations}
          />
        }
        
        { 
          (locationsValue) && 
          (<MapContainer
            // markers={this.state.markers}
            actualMarker={this.state.actualMarker}
            locations={mylocations}
          />)
        } 

      </div>
    );
  }
}
 
export default App;