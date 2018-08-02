/*

https://api.foursquare.com/v2/venues/search?
ll=51.1079,17.0385
&intent=browser&radius=10000
&query=cafe
&client_id=BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U
&client_secret=HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH
&v=20180323

*/


// request is sent to foursquare to get cafes
// define variables
const url = 'https://api.foursquare.com/v2/venues/';
const version = '20180323';
const radius = '6000';
const category = {
  cafe: '50bf8353e4b0b1f5d62928a6',
}

/*
// foursquare request
`https://api.foursquare.com/v2/venues/${venueId}/photos?limit=1&client_id=${client_id}&client_secret=${client_secret}&v=${version}`;
*/

/*
//https://www.npmjs.com/package/react-foursquare

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


var foursquare = require('react-foursquare')({
  clientID: '',
  clientSecret: ''  
});

var params = {
  "ll": "37.7749,-122.4194",
  "query": 'Blue Bottle'
};

export default class FoursquareDemo extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }

  render() {
    return (
    <div>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
  )
  }
}

ReactDOM.render(
  <FoursquareDemo />,
  document.getElementById('root')
);

*/