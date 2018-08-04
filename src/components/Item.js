/*import React from "react";

class ItemRow extends React.Component {

  render() {
    const item = this.props.item;
    

      <span>
        {item}
      </span>;

    return (
      <tr>
        <td>{item}</td>
        
      </tr>
    );
  }
}

export default ItemRow;*/

import React from "react";

class Item extends React.Component {

  render() {
    const item = this.props.item;
    const name = item.name;
      <span>
        {item.name}
      </span>;

   
    return (
      <tr>
        <td>{name}</td>
        
      </tr>
    );
  }
}

export default Item;