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
  	// console.log('click on search')
    return (
      <div className="search">
        <input
          /*
          role="searchbox" //
          tabIndex="0" //
          aria-label="Search your cafe" //
          */
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