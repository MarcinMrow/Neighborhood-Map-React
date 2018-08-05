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

  handleClick = () => {
    //console.log('click on cafe')
    // call the selectCafe
    this.props.selectCafe(this.props.item);
  }

  render() {
    const title = this.props.item.name;
    /*const name = item.name;
      <span>
        {item.name}
      </span>;*/
  
    return (
      <div className="cafe"
        onClick={this.handleClick}
        role="button"
        tabIndex={0}
        // onKeyPress={this.showInfo}
        >
          <div className="cafe-title">
            {title}
          </div> 
        </div>
      );
  }
}

export default Item;