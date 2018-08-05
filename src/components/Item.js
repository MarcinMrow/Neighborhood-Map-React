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

  handleClick = (event) => {
    this.setState({value: event.target.value});
    console.log('click');
  }

  render() {
    const title = this.props.item.name;
    /*const name = item.name;
      <span>
        {item.name}
      </span>;*/
  
    return (
      <div className="cafe"
        onClick={this.handleClick}>
          <div className="cafe-title">
            {title}
          </div> 
        </div>
      );
  }
}

export default Item;