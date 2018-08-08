import React from "react";
import Item from "./Item";

class ItemList extends React.Component {

  selectCafe = (item) => {
    // console.log(item);
    this.setState({
      selectedCafe: item,
    });   
  }

  render() {
    const filterInput = this.props.filterInput;
   
    const rows = [];
    // let filteredItems = [];

    this.props.items.forEach((item) => {
      if (item.name.toLowerCase().indexOf(filterInput.toLowerCase()) === -1) {
        return;
      }
      item.isVisible = true;
      rows.push(
        <Item
          item={item}
          key={item.id}
          selectCafe={this.selectCafe}
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
