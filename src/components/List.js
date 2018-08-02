import React from "react";
import Cafe from "./cafe"

export class List extends React.Component {
  selectCafe = (cafe) => {
    //console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }
  render() {
    const filterCafes = this.props.filterCafes;
    // const allCafes = this.props.allCafes;

    return (

      <div className="cafes">
        
        <ul>
        {
          this.props.items.map((cafe, index) => {
            console.log('where is the cafe name?');
            return <Cafe key={cafe.name} cafe={cafe} selectCafe={this.selectCafe} />
          })
        }
        </ul>
        
      </div>
    )  
  }
}

export default List;

/*
{ this.state.allCafes.map(cafe => { 
          return <div key={cafe.id}>{cafe.name}</div>}) }
*/