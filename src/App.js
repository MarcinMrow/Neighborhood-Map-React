import React, { Component } from 'react';
//import GoogleMapReact from 'google-map-react';
// import $ from 'jquery';
//import { Fetch } from 'react-request';
// import logo from './logo.svg';
import './App.css';
//import Cafe from './components/cafe';
// import Marker from './components/marker';


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/Map';
// import AsideMenu from "./components/AsideMenu";
// import FilteredList from "./components/FilteredList";
// import List from "./components/List";
import superagent from 'superagent';
import FilterableItemList from './components/FilterableItemList';
import ErrorBoundary from './components/ErrorBoundary';

/*
//define foursquare variables to get photos
const VENUE_ID = '4e9dd3a961af4feab6571edd'; // example
const clientID ='BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U';
const clientSecret = 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH';
const version = '20180323';
*/

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // center: {},
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      // selectedItems: null, //
      search: "",
      // locations: [],
      venues: [],
      items: [], //
      selectedCafe: null,
      markers: [],
      marker: [],
   
    };
    this.filterItems = this.filterItems.bind(this);
    this.toggleBounce = this.toggleBounce.bind(this);
  }

  componentDidMount() {
    this.getCafes();
  }

  filterItems(filter) {
    // console.log('filter items called!');
    let venues = [...this.state.venues];
    venues.forEach((item) => {
      if (item.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
        item.isVisible = false;
        return;
      }
      item.isVisible = true;
    });
    this.setState({ venues });
  }

  // ?? 
  handleOnCafeClick() {
    console.log('???!!!');
    let marker;
    let venues = [...this.state.venues];
      venues.forEach(item => {
        if (item.target.id === marker.name) {
        this.toggleBounce();  
        }
      });
      this.setState({ 
        markers: [] 
      });
    }

  // ??
  toggleBounce() {
    console.log('bouncing?')
    let marker;
    //if (e.target.item.id === marker.name) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(this.state.google.maps.Animation.BOUNCE);
      }
    }
    //}

  getCafes() {
    // console.log('componentDidMount')
      const url = "https://api.foursquare.com/v2/venues/search?ll=51.1079,17.0385&intent=browser&radius=10000&query=cafe&client_id=BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U&client_secret=HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH&v=20180323"
      // const url = `https://api.foursquare.com/v2/venues/${VENUE_ID}/photos?limit=1&client_id=${clientID}&client_secret=${clientSecret}&v=${version}`;
      superagent
      .get(url)
      .query(null)
      .set('Accept', 'text/json')
      .end((error, response) => {
        const venues = response.body.response.venues
        // console.log(JSON.stringify(venues))
        //console.log(venues)
        this.setState({
          venues: venues,
          // selectedPlace: venues
        })
      })
  }

/*
  selectCafe = (item) => {
    console.log(item);
    this.setState({
      selectedCafe: item
    })
  }

  handleClick = () => {
    // console.log('click on cafe')
    // call the selectCafe
    this.props.selectCafe(this.props.item);
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

    // array used with line:120
    /*const items = [
      {name: 'Nero'},
      {name: 'Costa'},
      {name: 'Cherubinowy'},
      {name: 'Targowa'},
      {name: 'Vinyl'},
      {name: 'Rozrusznik'}
    ];*/


    return (
      <ErrorBoundary>

        <div className="app">
          <div className="main">
          
          {/*add slider nav*/}
          <nav className="menu-container">
            <a href="menu" className="menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
              </svg>
            </a>
              <div className="menu-slide">
                <ul className="menu-list">
                  <li className="menu-item">

                  {/* */}
                    {/* <FilterableItemList items={this.state.venues} /> */}
                
                    <FilterableItemList 
                      items={this.state.venues}
                      filterItems={this.filterItems}
                      
                    />

                  {/* chose with const items to display list of cafes App.js: line 100 */}
                    {/* <FilterableItemList items={items} /> */}

                  </li>
                </ul>
              </div>
          </nav>
     
          <MapContainer
            center={center}
            markers={this.state.venues}
            //actualMarker={this.state.actualMarker}
            showingInfoWindow={this.state.showingInfoWindow}
            //selectedPlace={this.state.selectedPlace}
            selectedCafe={this.state.selectedCafe}
            activeMarker={this.state.activeMarker}
            toggleBounce={this.state.toggleBounce} // ?
          />

          </div>
        </div>
      </ErrorBoundary>
 
    );
  }
}
 
export default App;