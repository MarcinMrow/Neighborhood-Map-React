import React, { Component } from 'react'
import foursquare from './src/api'

const ...

class Search extends Component {
  state = {
    query: '',
    results: []
 }

handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
 }

render() {
  return (
    <form>
      <input
        placeholder="Search..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
      />
      <p>{this.state.query}</p>
    </form>
    )
  }
}

export default Search;