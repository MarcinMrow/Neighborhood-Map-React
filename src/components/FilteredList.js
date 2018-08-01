import React from "react";
import List from "./List";
import Cafe from "./cafe";

export class FilteredList extends React.Component {

  state = {
    allCafes: [
      "Kawalerka",
      "Cherubinowy",
      "Baszta",
      "Targowa",
      "Rownik",
      "Cocofli"
    ],
    filterCafes: [],
    value: '',
    //allCafes: [],
    selectedCafe: null,
    search: "",
  }

  //
  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }

  filterList = (event) => {
    let updatedList = this.state.allCafes;
    updatedList = updatedList.filter((cafe) => {
      return cafe.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filterCafes: updatedList});
  }

  componentWillMount = () => {
    this.setState({filterCafes: this.state.allCafes})
  }

  render() {
    const { allCafes, title, cafe, mylocations } = this.props;
    console.log('FilteredList reads props ',allCafes);

    return (
      <div className="main">

        <div className="search">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={this.filterList}/>
        <List filterCafes={this.state.filterCafes}/>
        </div>

      </div>
    )
  }
}

export default FilteredList;


