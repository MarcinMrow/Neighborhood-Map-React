import React from "react";
import List from "./List";
import Cafe from "./cafe";

import CafeOptions from './CafeOptions'

// import * as cafeLocations from './locations.json';
// const allCafes = "https://raw.githubusercontent.com/MarcinMrow/db-sample/3b159dee401749a483be867444a18dcef0e5bfc4/locations.json"

var foursquare = require('react-foursquare')({
  clientID: 'BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U',
  clientSecret: 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH'  
});

var params = {
  "ll": "51.1079, 17.0385",
  "query": 'Cafe'
};



export class FilteredList extends React.Component {

  state = {
    value: '',
    selectedCafe: null,
    search: "",
    query: "",
    cafes: [],
    // results: []
    venues: []
  }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ 
          cafes: res.response.venues
          
        });
      });
  }

  //
  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }

  handleSearch = () => {  
    this.setState({
      venues: this.search.value
    }, () => {
      if (this.state.venues && this.state.venues.length > 1) {
        if (this.state.venues.length % 2 === 0) {
          this.componentDidMount()
        }
      } else if (!this.state.venues) {        
      }
    })
  }

  /*handleSearch = (event) => {  
    this.setState({
      search: event.target.value,
      cafes: this.state.venues.filter((venue) => new RegExp(event.target.value, "i").exec(venue.name))
    });
  }*/

  /*
  filterList = (event) => {
    let updatedList = this.state.venues;
    updatedList = updatedList.filter((cafe) => {
      return cafe.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }*/
/*
  componentDidMount = () => {
    this.setState({filterCafes: this.state.allCafes})
  }*/

  render() {
    //const { allCafes, title, cafe, mylocations } = this.props;
    //console.log('FilteredList reads props ',allCafes);

    return (
      <div className="main">

        {/*<div className="search">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={this.filterList}/>
        <List items={this.state.items}/>*/}

        <div className="search">
          <input
            type="text"
            placeholder="Search for..."
            ref={input => {this.search = input}}
            onChange={this.handleSearch}
            value={this.props.value}
          />
        </div>
         
        <div className="cafes">
          <CafeOptions cafes={this.state.cafes} />
        </div>

        {/*
        <div className="cafes">
          {
          (allCafes !== undefined && allCafes !== null && allCafes.length > 0 ) && (
            <ul>
              { allCafes.map((cafe, index) => {
                // console.log('cafe');
                return <Cafe 
                  key={cafe.name} 
                  cafe={cafe} 
                  selectCafe={this.selectCafe}
                  
                />
              }
              )}
            </ul>)
          }
        </div>*/
        }
      </div>
    )
  }
}

export default FilteredList;