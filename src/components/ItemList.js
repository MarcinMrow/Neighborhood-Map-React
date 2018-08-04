import React from "react";
import Item from "./Item";

class ItemList extends React.Component {
  render() {
    const filterInput = this.props.filterInput;
   
    const rows = [];

    this.props.items.forEach((item) => {
      if (item.name.indexOf(filterInput) === -1) {
        return;
      }

      rows.push(
        <Item
          item={item}
          key={item.name}
        />
      );
     
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Your Cafes</th>    
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ItemList;
