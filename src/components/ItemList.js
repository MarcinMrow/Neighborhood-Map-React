import React from "react";
import Item from "./Item";

class ItemList extends React.Component {

  render() {
    const filterInput = this.props.filterInput;
   
    const rows = [];
    // let filteredItems = [];

    // filter search input + case sensitivity
    this.props.items.forEach((item) => {
      if (item.name.toLowerCase().indexOf(filterInput.toLowerCase()) === -1) {
        return;
      }
      // results added to the list
      item.isVisible = true;
      rows.push(
        <Item
          item={item}
          key={item.id}
          selectCafe={this.props.selectCafe}
          handleClick={this.props.itemClicked}
        />
      );
     
    });

    return (

      <div className="cafes">
        <ul>
          <li>{rows}</li>       
        </ul>
      </div>

    );
  }
}

export default ItemList;