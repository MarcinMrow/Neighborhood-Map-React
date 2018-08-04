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
    venues: [],
    cafe: [],
    //filteredCafes: [],
    items: []
  }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ 
          items: res.response.venues
          
        });
      });
  }
/*
  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }*/

  /*
  handleSearch = () => {  
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.componentDidMount()
        }
      } else if (!this.state.query) {        
      }
    })
  }*/

  

  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0, 30)});

  }
  /*
  handleSearch = (event) => {  
    this.setState({
      search: event.target.value,
      items: this.state.venues.filter((item) => new RegExp(event.target.value, "i").exec(item.name))
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
    let items = this.state.venues.filter((item) => {
        return item.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );
    
    return (
      <div className="main">

        <div className="search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

         {/*<div className="search">
          <input
            type="text"
            placeholder="Search for..."
            //ref={input => this.search = input}
            //onChange={this.handleSearch}
            //value={this.props.value}
            value={this.state.search} // entered value displayed in the console
            onChange={this.updateSearch.bind(this)} // entered value displayed in the console
          />
        </div>*/}
         
        <div className="cafes">
          <List items={this.state.items}/>
          {/*<List cafes={this.state.cafes}/>*/}

          {/*<ul>
            {this.state.items.map((item, index) => {
              return <Cafe key={item.id} item={item} />
              })}
          </ul>*/}

          {/*
          <CafeOptions items={this.state.items} onClick={this.handleClick}/>
          */}
{/*
          <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
*/}
        </div>

      </div>
    )
  }
}

export default FilteredList;