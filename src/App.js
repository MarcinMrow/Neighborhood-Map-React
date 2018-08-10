import React, { Component } from 'react';
import './App.css';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/Map';
import superagent from 'superagent';
import FilterableItemList from './components/FilterableItemList';
import ErrorBoundary from './components/ErrorBoundary';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      marker: [],
      selectedCafe: null,
      //
      isToggleOn: true
    };
    this.filterItems = this.filterItems.bind(this);
    this.toggleBounce = this.toggleBounce.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    //
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  componentDidMount() {
    this.getCafes();
    //this.fetchVenues();
  }

  // create animation for the marker
  toggleBounce(marker) {
    console.log('bouncing?')
    let google = this.props.google;
    if (marker.getAnimation() !== null && marker.getAnimation() !== undefined) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        marker.setAnimation(null);
      }, 2100);
    }
  };

  // create animation for the marker
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

  
  itemClicked(itemID) {
    console.log(itemID);
    // search all venues for selected one and set flag to bounce
    let venues = [...this.state.venues];
    venues.forEach((item) => {
      if (item.id === itemID) {
        if (item.selected === undefined) {
          item.selected = true;

        } else {
          item.selected = !item.selected;
        }
        return;
      }
      this.setState({ venues });
    });
  }

  /* Foursquare API */
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
        })
      })
  }


  // handle click on the hamburger menu and opens menu container
  handleClickMenu(e) {
    e.preventDefault();
    console.log('The svg was clicked');
    const drawer = document.querySelector('.nav');
      this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
      if ( drawer.classList.toggle('open') ) {
        e.stopPropagation();
      } else {
        drawer.classList.remove('open');
      }
  }

  render() {

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
        <header className="header" role="banner">
          <div className="header-inner">
            <h1 className="header-title">
              Cafe Finder
            </h1>
            <a id="menu" 
              className="header-menu" 
              onClick={this.handleClickMenu} 
              role="navigation"
              aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
              </svg>
            </a>
          </div>
        </header>

        <div className="app">

          <nav id="drawer" className="nav">        
            <FilterableItemList
              items={this.state.venues}
              filterItems={this.filterItems}
              itemClicked={this.itemClicked}
            /> 
          </nav>

          <div className="map-container">
            <MapContainer
              center={center}
              markers={this.state.venues}
              toggleBounce={this.toggleBounce}
              handleClick={this.props.handleClick}
            />
          </div>

        </div>
      </ErrorBoundary>
    );
  }
}
 
export default App;