import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {

  	console.log('click')
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search your cafe..."
          value={this.props.filterInput}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default SearchInput;