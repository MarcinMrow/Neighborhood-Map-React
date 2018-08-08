import React, { Component } from 'react';
import './App.css';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/Map';
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

/*
// ADDING PHOTOS
var foursquare = require('react-foursquare')({
  clientID: 'BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U',
  clientSecret: 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH'
});
*/

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      marker: [],
      selectedCafe: null,
    };
    this.filterItems = this.filterItems.bind(this);
    this.toggleBounce = this.toggleBounce.bind(this);
    
  }

  componentDidMount() {
    this.getCafes();
    //this.fetchVenues();
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


  // add animation
  toggleBounce(marker) {
    console.log('bouncing?')
    let google = this.state;
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    };

  // ?? 
  onClickMarkerChange() {
    console.log('???!!!');
    
  }



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
          //selectedPlace: venues
        })
      })
  }

  /*
  // ADDING PHOTOS
  componentDidMount() {
    this.fetchVenues();
  }*/
/*
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
*/

 /*selectCafe = (item) => {
    console.log(item);
    this.setState({
      selectedCafe: item,
    });   
  }*/

  

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

    return (
      <ErrorBoundary>

        <div className="app">
          <div className="main">
          
          {/*add slider nav*/}
          <nav className="menu-container">
            <a href="#" className="menu-btn" tabIndex={0}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
              </svg>
            </a>
              <div className="menu-slide">
                <ul className="menu-list">
                  <li className="menu-item">

                    <FilterableItemList
                      items={this.state.venues}
                      filterItems={this.filterItems} 
                      //selectCafe={this.state.selectCafe}
                     

                    />

                  </li>
                </ul>
              </div>
          </nav>
     
          <MapContainer
            center={center}
            markers={this.state.venues}
            toggleBounce={this.toggleBounce}
            //selectCafe={this.state.selectCafe}
            handleClick={this.props.handleClick}
          />

          </div>
        </div>
      </ErrorBoundary>
 
    );
  }
}
 
export default App;