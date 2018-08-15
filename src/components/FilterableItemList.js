import React from "react";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";

class FilterableItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInput: '',
    };
    
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(filterInput) {
    this.setState({
      filterInput: filterInput,
    });
    this.props.filterItems(filterInput);
  }

  render() {
    return (
      <div className="nav-list">
        <SearchInput
          filterInput={this.state.filterInput}
          onFilterTextChange={this.handleTextChange}
        />
        <ItemList
          items={this.props.items}
          filterInput={this.state.filterInput}
          itemClicked={this.props.itemClicked}
          //
          onMarkerClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

export default FilterableItemList;