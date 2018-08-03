/*

https://api.foursquare.com/v2/venues/search?
ll=51.1079,17.0385
&intent=browser&radius=10000
&query=cafe
&client_id=BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U
&client_secret=HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH
&v=20180323

*/

const url = `${four2url}&venueID=${}&search?ll=${venue.lat},${venue.lng}&intent=${browser}&radius=${radius}&client_id=${clientID}&client_secret=${clientSecret}&v=${version}&categoryId=${category}&limit=50`
const url = `${four2url}&venueID=${venueID}&photos?&intent=${browser}&radius=${radius}&client_id=${clientID}&client_secret=${clientSecret}&v=${version}&categoryId=${category}&limit=50`


// request is sent to foursquare to get cafes
// define variables
// define variables
  const four2url = 'https://api.foursquare.com/v2/venues/';
  const radius = '10000';
  const category = {
    cafe: '50bf8353e4b0b1f5d62928a6',
    };
  const browser = 'browser';
  
  const venueID = '4e9dd3a961af4feab6571edd';
  const clientID ='BDM3LB3BNSQGZV4QL0WX4TD1K1LYIRTGERM4A3YONTPSFR2U';
  const clientSecret = 'HPFMZTLH0BAGBWNVE3XA2ILS4Y1UKDG1VDN5CYFXIP0BVNNH';
  const version = '20180323';


/*
// foursquare request
`https://api.foursquare.com/v2/venues/${venueId}/photos?limit=1&client_id=${clientID}&client_secret=${clientSecret}&v=${version}`;
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