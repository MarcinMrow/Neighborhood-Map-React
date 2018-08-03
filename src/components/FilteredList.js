import React from "react";
//import List from "./List";
//import Cafe from "./cafe";

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
    venues: [],
    cafe: [],
    filteredCafes: [],
    items: []
  }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ 
          cafes: res.response.venues
          
        });
      });
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

  handleClick = () => {
    this.props.selectCafe(this.props.venues);
  }

  selectCafe = (cafe) => {
    //console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }
  
/*
  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0, 20)});

  }*/
  
  /*handleSearch = (event) => {  
    this.setState({
      search: event.target.value,
      cafes: this.state.venues.filter((venue) => new RegExp(event.target.value, "i").exec(venue.name))
    });
  }*/

  /*
  handleSearch = (event) => {
    let updatedList = this.state.venues;
    updatedList = updatedList.filter((cafe) => {
      return cafe.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }*/

  render() {
    //const { cafe } = this.props;
    //console.log('FilteredList reads props ',cafes);
    /*let filteredCafes = this.state.venues.filter((cafe) => {
        return cafe.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );*/
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
            ref={input => this.search = input}
            onChange={this.handleSearch}
            //value={this.props.value}
            //value={this.state.search}
            //onChange={this.updateSearch.bind(this)}
          />
        </div>
         
        <div className="cafes">

          {/*<List cafes={this.state.cafes}/>*/}

          {/*<ul>
            {filteredCafes.map((cafe, index) => {
              return <Cafe key={cafe.id} cafe={cafe} selectCafe={this.selectCafe} />
              })}
          </ul>*/}

          <CafeOptions cafes={this.state.cafes} onClick={this.handleClick}/>
          
        </div>

      </div>
    )
  }
}

export default FilteredList;